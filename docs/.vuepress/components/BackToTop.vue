<!-- https://github.com/caiofsouza/vue-backtotop -->
<template>
  <transition name="back-to-top-fade">
    <div 
      class="vue-back-to-top"
      v-show="visible" 
      @click="backToTop">
      <slot>
      </slot>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'BackToTop',
  props: {
    visibleoffset: {
      type: [String, Number],
      default: 600,
    },
    visibleoffsetbottom: {
      type: [String, Number],
      default: 0,
    },
    scrollFn: {
      type: Function,
      default: function (eventObject) {},
    }
  },
  data () {
    return {
      visible: false
    }
  },
  mounted () {
    window.smoothscroll = () => {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll)
        window.scrollTo(0, Math.floor(currentScroll - (currentScroll / 5)))
      }
    }
    window.addEventListener('scroll', this.catchScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.catchScroll)
  },
  methods: {
    /**
     * Catch window scroll event 
     * @return {void}
     */
    catchScroll () {
      const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset)
      const pastBottomOffset = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - parseInt(this.visibleoffsetbottom)
      this.visible = parseInt(this.visibleoffsetbottom) > 0 ? pastTopOffset && !pastBottomOffset : pastTopOffset
      this.scrollFn(this)
    },
    /**
     * The function who make the magics
     * @return {void}
     */
    backToTop () {
      window.smoothscroll()
      this.$emit('scrolled')
    }
  },
}
</script>

<style>
.back-to-top-fade-enter-active, 
.back-to-top-fade-leave-active {
  transition: opacity .7s;
}
.back-to-top-fade-enter, 
.back-to-top-fade-leave-to {
  opacity: 0;
}

.vue-back-to-top {
  cursor:pointer;
  position: fixed;
  z-index: 1000;
  padding: 0.7rem 1rem;
  background: rgba(124, 152, 179, .3);
  border-radius: 0.4rem;
  transition: all .3s ease;
  bottom:4rem;
  right:1rem;
}

.vue-back-to-top:hover{
  background: rgba(124, 152, 179, 1);

}

.vue-back-to-top--is-footer {
  bottom: 50% !important;
  position: absolute;
  transform: translateY(50%);
}
</style>
