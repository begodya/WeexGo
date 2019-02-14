<template>
  <div class="wrapper">
    <home-header></home-header>
    <text class="button" @click="jump">Jump</text>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: yellow;
  flex-direction: column;
  justify-content: center;
}
.button {
  font-size: 60px;
  width: 450px;
  text-align: center;
  margin-top: 30px;
  margin-left: 150px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-width: 2px;
  border-style: solid;
  color: #666666;
  border-color: #dddddd;
  background-color: #f5f5f5;
}
</style>

<script>
import HomeHeader from '../components/HomeHeader'
var navigator = weex.requireModule('navigator')
var modal = weex.requireModule('modal')

export default {
  components: {
    'home-header': HomeHeader
  },

  methods: {
    jump (event) {
      console.log('will jump')
      navigator.push({
        url: 'http://dotwe.org/raw/dist/index.js',
        animated: 'true'
      }, event => {
        modal.toast({ message: 'callback: ' + event })
      })
    }
  }
}
</script>
