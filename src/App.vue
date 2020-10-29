<template>
  <div>
    <router-view></router-view>
    <footer-guide v-show="$route.meta.showFooter"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus">
body,ul,p,h4 {
  margin: 0px;
  padding: 0px;
}
</style>
