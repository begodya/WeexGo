<template>
  <div class="wrapper">
    <router-view class="box"></router-view>
    <tab-bar @tabTo="onTabTo"></tab-bar>
  </div>
</template>

<script>
import tabBar from './components/tabBar.vue'
var modal = weex.requireModule('modal')

export default {
  data () {
    return {

    }
  },

  components: {
    'tab-bar': tabBar
  },

  methods: {
    onTabTo (_result) {
      modal.toast({ message: _result.data.key })
      let _key = _result.data.key || ''
      this.$router.push('/' + _key)
    }
  }
}
</script>

<style scoped>
.wrapper {
  background-color: white;
}
.box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
