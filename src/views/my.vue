<template>
  <div class="about">
     <div id="nav">
      <router-link to="/">Home1</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h1>This is an my page</h1>
    <!-- 优惠券单元格 -->
<van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList = true"
/>

<!-- 优惠券列表 -->
<van-popup v-model="showList" position="bottom">
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup>
  </div>
</template>
<script>
const coupon = {
  available: 1,
  discount: 0,
  denominations: 150,
  originCondition: 0,
  reason: '',
  value: 150,
  showList:false,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000
};
export default {
  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      showList:false,
      disabledCoupons: [coupon]
    }
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange() {
      this.coupons.push(coupon);
    }
  }
}
</script>

