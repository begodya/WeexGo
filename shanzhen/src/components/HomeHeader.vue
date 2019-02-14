<template>
  <div class="wrapper">
    <text class="scan">扫一扫</text>
    <text class="search" @click="jumpWeb()">搜索商品，共8888款好物</text>
    <text class="notice">消息</text>
  </div>
</template>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 114px;
  padding-top: 44px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  z-index: 101;
  background-color: #fafafa;
  opacity: 0.99;
}

.scan {
  height: 80px;
  width: 96px;
  text-align: center;
  color: #666;
  font-weight: 300;
  font-size: 28px;
}

.search {
  flex: 1;
  height: 60px;
  background-color: #ededed;
  border-radius: 8px;
  font-size: 28px;
}

.notice {
  height: 80px;
  width: 96px;
  font-size: 28px;
}
</style>

<script>
import util from '../utils/util.js'
var navigator = weex.requireModule('navigator')
var modal = weex.requireModule('modal')

export default {
  methods: {
    jumpWeb (_url) {
      if (!_url) _url = 'http://m.you.163.com/search'
      const url = this.$getConfig().bundleUrl
      navigator.push({
        url: util.setBundleUrl(url, 'page/webview.js?weburl=' + _url),
        animated: 'true'
      }, event => {
        modal.toast({ message: 'callback: ' + event })
      })
    }
  }
}
</script>
