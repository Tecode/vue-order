<template>
  <div style="width: 100%">
    <yd-flexbox direction="vertical">
      <div class="header">
        <!--<h3>向阳小酒馆</h3>-->
        <p>{{mapping[data.tableType]}}{{data.tableId}}桌{{data.peopleNumber}}人</p>
        <h1>¥{{data.orderMoney && data.orderMoney.toFixed(2)}}</h1>
      </div>
      <yd-flexbox-item style="overflow-y: auto">
        <yd-preview style="padding: .3rem 0" :buttons="[]">
          <yd-preview-item v-for="(item, key) in orderList" :key="key">
            <div slot="left">{{item.productName}}</div>
            <div slot="right">¥{{item.productPrice}}
            <span style="margin-left: .4rem">x{{item.productAmount}}</span>
            </div>
          </yd-preview-item>
        </yd-preview>
      </yd-flexbox-item>
      <yd-button size="large" @click.native="wechatPay" type="primary">¥{{data.orderMoney && data.orderMoney.toFixed(2)}}（微信支付）</yd-button>
    </yd-flexbox>
  </div>
</template>

<script type="text/babel">
import { getOrderApi, payApi } from '@/api'
export default {
  data () {
    return {
      orderList: [],
      data: {},
      btns: [],
      mapping: ['A', 'B', 'C', 'D']
    }
  },
  created () {
    // 获取购物车信息
    getOrderApi().then(({data}) => {
      this.orderList = data.data.orderDetailList
      this.data = data.data
    })
  },

  methods: {
    wechatPay () {
      payApi({orderId: this.data.orderTotalId}).then(({data}) => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
.header {
  width: 100%;
  padding-top: .4rem;
  padding-bottom: .3rem;
}
.header h3 {
  font-size: .34rem;
}
.header p {
  padding: .2rem 0 .1rem 0;
  color: #808080;
}
.header h1 {
  font-size: .6rem !important;
}
</style>
