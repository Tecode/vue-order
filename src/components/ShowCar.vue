<template>
    <yd-popup :close-on-masker='false' v-model='showCar' position='bottom' height='60%'>
        <div class='header'>
            <h3>已选菜品</h3>
            <p class='clear' @click='clearDishes(tableId)'><yd-icon name="delete" size='.4rem'></yd-icon>清除</p>
            <p class='close' @click='setValue({key: "showCar", value: false})'>
                <yd-icon name="error-outline" size='.4rem'></yd-icon>关闭</p>
        </div>
        <yd-flexbox v-for='(item, key) in myShopCar' :key="key" class='count-box'>
            <yd-flexbox-item class='text-left'>
              <p class='name' @click='setValue("showCar", false)'>{{item.productName}}</p>
              <p class='count-info'>¥{{item.productPrice}}/份</p>
            </yd-flexbox-item>
            <yd-flexbox-item class='text-right'>
              <yd-spinner min="0" :longpress='false' unit="1" @click.native="changeCount(item.productAmount, item.productId, item.cartId, item.tableId)" v-model="item.productAmount"></yd-spinner>
            </yd-flexbox-item>
        </yd-flexbox>
    </yd-popup>
</template>
<script>
import {mapMutations, mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      spinner: 0,
      tableId: 37
    }
  },
  computed: {
    ...mapState({
      showCar: state => state.HomePage.showCar,
      myShopCar: state => state.HomePage.myShopCar
    })
  },
  methods: {
    ...mapMutations({
      setValue: 'SET_VALUE',
      resetStore: 'RESET_STORE'
    }),
    ...mapActions({
      clearDishes: 'CLEAR_DISHES',
      changeCar: 'ADD_CAR',
      deleteCart: 'DELETE_CARINFO'
    }),
    changeCount (amount, productId, cartId, tableId) {
      if (amount === 0) {
        this.deleteCart({productId, cartId, tableId})
      } else {
        this.changeCar({
          tableId: 37,
          productId,
          amount
        })
      }
    }
  },
  beforeDestroy: function () {
    this.resetStore()
  }
}
</script>
<style scoped>
    .text-left{
        text-align: left;
    }
    .text-right{
        text-align: right;
    }
    .header {
        background-color: #dedede;
        position: relative;
        padding: .2rem 0;
    }
    .header .clear {
        position: absolute;
        top: .15rem;
        right: .15rem;
    }
    .header .close {
        position: absolute;
        top: .15rem;
        left: .15rem;
    }
    .count-box {
        padding: .21rem .4rem .21rem .4rem
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
