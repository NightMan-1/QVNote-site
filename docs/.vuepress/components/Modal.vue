<template>
    <div @click="showModal = true" class="d-inline">
        <slot></slot>
        <transition name="nice-modal-fade">
            <div class="modal-mask" @click.stop="showModal = false" v-if="showModal">
                <div class="modal modal-wrapper" :class="{'show':showModal === true}">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" v-if="modalTitle">{{modalTitle}}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" @click="showModal = false">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p v-if="modalText">{{modalText}}</p>
                            <p v-if="modalPic"><img :src="$withBase(modalPic)"/></p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: ['modalTitle', 'modalText', 'modalPic'],
    data() {
        return {
            showModal: false
        }
    },
    watch: {
        'showModal' () {
            if (this.showModal){
                document.body.classList.add("modal-open")
            }else{
                document.body.classList.remove("modal-open")
            }
        },
    }

}
</script>
