<template>
  <div id="app">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <router-view/>
    <van-tabbar v-model="active">
    <van-tabbar-item icon="home" to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="exchange" to="/cat">分类</van-tabbar-item>
    <van-tabbar-item icon="cart" info="5" to="/cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact" info="20" to="/my">我的</van-tabbar-item>
  </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    } 
  },
  methods: {
    onClickLeft() {
      // this.$toast('返回');
    },
    onClickRight() {
      this.$toast('按钮');
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
