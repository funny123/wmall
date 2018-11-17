<template>
  <div class="home">
    <!-- <div id="nav">
      <router-link to="/">Home1</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="swipe">
      <van-swipe :autoplay="3000" :width="300" :height="200">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div id="list">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        >
        <van-cell
          v-for="item in list"
          :key="item"
          :title="item"
        />
      </van-list>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: ["https://img.yzcdn.cn/1.jpg", "https://img.yzcdn.cn/2.jpg"],
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
      // 发起一个POST请求
      this.$axios
        .post("http://tbk.youlegoshop.com/api/index/get_dg_material", {
          page: 1,
          cat: "16,18,50102996,50006843,50006842,50340020,50025829,50010788"
        })
        .then(function(response) {
          console.info(response.data);
        })
        .catch(function(error) {
          console.info(error);
        });
    }
  }
};
</script>


