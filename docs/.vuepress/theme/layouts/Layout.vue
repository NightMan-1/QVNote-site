<template>
  <div class="grid">
    <header class="header">
      <div class="container position-relative">
        <nav class="navbar navbar-expand-lg">
          <router-link :to="$themeConfig.locales[locale].url" class="navbar-brand"><img class="logo-icon" src="/images/icon.svg" alt="logo"> <span class="logo-text">QVNote</span></router-link>
          <button class="navbar-toggler" type="button" @click.stop="showMenu = !showMenu" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" :class="{'show': showMenu}">
            <ul class="navbar-nav ml-auto">
              <li
                class="nav-item"
                v-for="item in $themeConfig.nav"
                :key="item.link"
                :class="{'active': item.link === $route.path}"
              >
                <router-link :to="$themeConfig.locales[locale].url + item.link" class="nav-link">{{item[locale]}}</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link d-inline-block" target="_blank" href="https://github.com/NightMan-1/QVNote"><i class="fab fa-github"></i></a>
                <a :href="otherURL" @click.prevent="openLocale('ru_RU')" class="nav-link locales-switch pr-0 d-inline-block ml-2 ml-sm-0" v-if="locale === 'en_US'"><img src="/images/locales/ru.png"></a>
                <a :href="otherURL"  @click.prevent="openLocale('en_US')" class="nav-link locales-switch pr-0 d-inline-block ml-2 ml-sm-0" v-if="locale === 'ru_RU'"><img src="/images/locales/en.png"></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <main>
      <div class="container">
        <span class="badge badge-info float-right mt-1 mt-sm-3 font-light" v-if="$page.frontmatter.date"><i class="far fa-calendar-alt mr-1"></i> {{ trueDate($page.frontmatter.date) }}</span>
        <h2 v-if="$page.frontmatter.hideTitle !== true">{{$page.title}}</h2>
        <Content/>
        <back-to-top><i class="fas fa-chevron-up"></i></back-to-top>
      </div>
    </main>

    <footer class="footer theme-bg-primary">
      <div class="container text-center">Copyright © {{year}} <a href="https://www.nightman.info/" target="_blank">Sergey Gurinovich</a>. <br class="d-block d-sm-none"> All Rights Reserved.</div>
    </footer>
  </div>
</template>

<script>
import "@fortawesome/fontawesome-free/css/all.css"
import "../assets/nova/theme.scss"
// import "prismjs/themes/prism.css"
import "../assets/prism/prism-base16-ateliersulphurpool.light.css"
// import "../assets/prism/prism-atom-dark.css"
// import "../assets/animate.min.css"

export default {
  name: "Layout",
  components: {
    // magicGrid
  },
  data() {
    return {
      year: new Date().getFullYear(),
      locale: 'en_US',
      showMenu: false,
      otherURL: '/'

    };
  },
  computed: {
    headNav() {
      return this.$site.themeConfig.nav || [];
    }
  },
  mounted () {
    if (this.$route.path.match(/^\/ru/)){
      localStorage.setItem('locale', 'ru_RU')
    }
    if (localStorage.getItem('locale') !== null){
      this.locale = localStorage.getItem('locale')
    }
    if (this.$route.path === '/' && this.locale !== undefined && this.locale === 'ru_RU'){
      this.$router.push('/ru/')
    }
  },
  methods: {
    openLocale (l) {
      this.locale = l
      localStorage.setItem('locale', l)
      switch(l) {
        case 'en_US':
          this.$router.push(this.otherURL)
        case 'ru_RU':
          if (this.$route.path === '/'){
            this.$router.push('/ru/')
          }else{
            this.$router.push(this.otherURL)
          }
      }
    },
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  },
  watch: {
    '$route' (to, from) {
      this.showMenu = false
      let t = this.$route.path.match(/^\/ru(\/\S+)/)
      if (t !== null && t[1]){
        this.otherURL = t[1]
      } else if (this.$route.path === '/ru/') {
        this.otherURL = '/'
      } else {
        this.otherURL = '/ru' + this.$route.path
      }
    },
    'showMenu' () {
      if (this.showMenu === true) {
        document.addEventListener('click', this.toggleMenu)
      } else {
        document.removeEventListener('click', this.toggleMenu)
      }
    }
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:400,400i,500,500i,700,700i&subset=cyrillic');
  html,
  body {
    font-family: "Alegreya Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-kerning: normal;
    font-variant-ligatures: common-ligatures contextual;
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-size: 20px;
    font-weight: 400;
    line-height: 1.42857143;
    font-display: fallback; /* swap or block */
    background-color: white;
    height: 100vh;
    /*scroll-behavior: smooth;*/
  }

  b, strong {
    font-weight: 500;
  }

  a, button {
    outline: 0 !important;
  }
  .no-underline:hover {
    text-decoration: none;
  }
  .form-control, .btn, .font-light {
    font-weight: 400;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 5.2rem auto 3rem;
    min-height: 100vh;
  }

  header {
    grid-column: span 12;
    z-index: 100;
    /*position: sticky;*/
    top: 0;
  }

  main {
    grid-column: span 12;
    padding: 1rem 0;
  }

  footer {
    grid-column: span 12;
    padding: 1rem;
    font-size: 0.85rem;
    height: 3rem;
    z-index: 100;
    position: relative;
  }

  .header .logo-icon{
    width: 2.6rem;
    margin-top: -.6rem;
  }
  .header .logo-text{
    font-weight: 500;
    font-size: 2rem;
  }
  .header .nav-link:hover{
    color: #000;
  }

  .header .nav-link.router-link-exact-active{
    color: #000;
  }

  .locales-switch img{
    height: 16px;
    box-shadow: 0 0 1px #a4bcd4;
    margin-top: -.3rem;
  }

  .modal-close-icon{
    position: absolute;
    z-index: 2000;
    color: #fff;
    font-size: 2rem;
    right: 1.5rem;
    top: 0.5rem;
    cursor: pointer;
    width: 3rem;
    display: block;
    text-align: center;
    border-radius: 0.25rem;
    background: transparent;
  }
  img {
    image-rendering: optimizeQuality;
    max-width: 100%;
  }
  .h1, .h2, .h3, .h4, .h5, .h6,
  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
  h4{padding-top: 1rem;}

  .header-anchor{
    display: none;
  }

  .icon.outbound{
    margin-left: 1px;
  }

  .alert-info{
    background: rgba(209, 236, 241, 0.6);
    border-color: rgba(190, 229, 235, 0.6);
  }

  /* Extra small devices (portrait phones, less than 576px) */
  @media (max-width: 575.98px) {
    footer {font-size: 0.7rem;}
    h2, .h2 {font-size: 1.5rem;}
    h3, .h3  {font-size: 1.4rem;}
    .grid { grid-template-rows: 5.2rem auto 4rem; }
    footer { height: 4rem; }
    .navbar-toggler {margin-right: 1rem; margin-top: 0.5rem;}
    .navbar-collapse.show ul { background: #fff; text-align: right; padding-right: 1rem;padding-bottom: 1rem;}
    .list-group-item{padding: 0.35rem 0.9rem;}
    h4{hyphens: auto}
  }

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) and (max-width: 767.98px) {
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 991.98px) {
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1199.98px) {
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    .navbar-expand-lg .navbar-nav .nav-link{
      padding-right: 0.7rem;
      padding-left: 0.7rem;
    }
  }
</style>

