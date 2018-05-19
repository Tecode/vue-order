<template>
    <yd-flexbox class="order-box" direction="vertical">
        <div class="base-info">
            <h3>桌号:37</h3>
            <p>4个菜</p>
            <yd-flexbox class="edit-box" direction="horizontal">
                <yd-flexbox-item class="text-left">
                    <div>用餐人数: 5人</div>
                    <p style="line-height:.3rem">备注:少辣椒</p>
                </yd-flexbox-item>
                <yd-flexbox-item class="text-right">
                    <yd-button type="danger">编辑</yd-button>
                </yd-flexbox-item>
            </yd-flexbox>
        </div>
        <yd-flexbox-item class="order-detail">
            <yd-flexbox class="footer" direction="horizontal">
                <yd-flexbox-item class="text-left">
                    <p>餐位费</p>
                    <p style="line-height: .2rem;color: #808080">¥3/位</p>
                </yd-flexbox-item>
                <yd-flexbox-item class="text-right" style="font-size: .46rem;">
                    x3
                </yd-flexbox-item>
            </yd-flexbox>
            <yd-flexbox v-for='(item, key) in myShopCar' :key="key" class='count-box'>
                <yd-flexbox-item class='text-left'>
                    <p class='name' @click='setValue("showCar", false)'>{{item.productName}}</p>
                    <p class='count-info'>¥12/份</p>
                </yd-flexbox-item>
                <yd-flexbox-item class='text-right'>
                    <yd-spinner min="0" @click.native="changeCount(item.productAmount, item.productId, item.cartId, item.tableId)" :longpress='false' unit="1" v-model="item.productAmount"></yd-spinner>
                </yd-flexbox-item>
            </yd-flexbox>
        </yd-flexbox-item>
        <yd-flexbox class="footer" direction="horizontal">
            <yd-flexbox-item class="add-dishes">
                加菜
            </yd-flexbox-item>
            <yd-flexbox-item class="creat-order">
                去下单
            </yd-flexbox-item>
        </yd-flexbox>
    </yd-flexbox>
</template>
<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      showCar: state => state.HomePage.showCar,
      myShopCar: state => state.HomePage.myShopCar
    })
  },
  created () {
    // 获取购物车信息
    this.refreshCar({ tableId: 37 })
  },
  methods: {
    ...mapMutations({
      setValue: 'SET_VALUE',
      resetStore: 'RESET_STORE'
    }),
    ...mapActions({
      refreshCar: 'UPDATE_CAR'
    }),
    changeCount () {
      console.log(4)
    }
  }
}
</script>
<style scoped>
    .order-box {
        width: 100%;
        height: 100%;
    }
    .base-info h3 {
        font-size: .42rem;
        padding-top: .4rem;
    }
    .base-info p {
        color: #808080;
    }
    .base-info {
        width: 100%;
        background-color: #ffffff;
    }
    .edit-box {
        padding: .4rem .4rem .5rem .4rem;
    }
    .text-left {
        text-align: left;
    }
    .text-right {
        text-align: right;
    }
    .footer {
        width: 100%;
    }
    .add-dishes {
        padding: .24rem;
        background-color: #ffb400;
        color: #fff;
    }
    .creat-order {
        padding: .24rem;
        background-color: #ef4f4f;
        color: #fff;
    }
    .order-detail {
        overflow-y: auto;
        padding: .2rem .4rem;
        background-color: #ffffff;
        border-top: 1px solid #dedede;
    }
    .count-box {
        padding: .21rem 0 .21rem 0
    }
    .name {
        color: #4c4c4c;
    }
    .count-info {
        line-height: .2rem;
        font-size: .26rem;
        color: #808080;
    }
</style>
