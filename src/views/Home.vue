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
const axios = require("axios");
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
      let _this = this;
      axios.post("http://demo.com/", {}).then(function(response) {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            _this.list.push(response.data.articles[i].title);
          }
          // 加载状态结束
          _this.loading = false;

          // 数据全部加载完成
          if (_this.list.length >= response.data.articles.length) {
            _this.finished = true;
          }
        }, 500);
      });
      axios.post("http://demo2.com/",{}).then(function(response){
        console.log(response)
      })
      // 使用 Mock
      // var Mock = require("mockjs");
      // var data = Mock.mock({
      //   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      //   "list|1-10": [
      //     {
      //       // 属性 id 是一个自增数，起始值为 1，每次增 1
      //       "id|+1": 1
      //     }
      //   ]
      // });
      // 输出结果
      // console.log(JSON.stringify(data, null, 4));
      // 发起一个POST请求
      // axios
      //   .post("http://192.168.0.104/tbk/public/index.php/api/index/get_dg_material", {
      //     page: 1,
      //     cat: "16,18,50102996,50006843,50006842,50340020,50025829,50010788"
      //   })
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    }
  }
};
</script>


