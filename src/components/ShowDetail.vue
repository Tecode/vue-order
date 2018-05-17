<template>
        <yd-popup v-model='visible' position='center' :close-on-masker='masker' width='90%'>
            <div class='detail-box'>
              <h3>{{productDetail.name}}</h3>
              <yd-icon class='close' name='error-outline' @click.native='callBack()'></yd-icon>
                <div style='height:5rem;overflow:hidden'>
                  <img :src='productDetail.icon' />
                </div>
                <yd-flexbox class="counting">
                    <yd-flexbox-item class="count">选择数量</yd-flexbox-item>
                    <yd-flexbox-item class="text-right">
                        <yd-spinner min="0" unit="1" v-model="count"></yd-spinner>
                    </yd-flexbox-item>
                </yd-flexbox>
                <yd-flexbox class="button-info">
                    <yd-flexbox-item class="count">¥{{productDetail.price}}/份</yd-flexbox-item>
                    <yd-flexbox-item class="text-right">
                        <yd-button type="danger">确 定</yd-button>
                    </yd-flexbox-item>
                </yd-flexbox>
            </div>
        </yd-popup>
</template>
<script>
export default {
  name: 'ShowDetail',
  data () {
    return {
      masker: false,
      count: 0
    }
  },
  props: ['visible', 'productDetail', 'callBack']
  // watch:{
  //   show(newData) {
  //     this.visible = newData;
  //   }
  // }
}
</script>
<style scoped>
.detail-box {
  background-color: #fff;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}
.detail-box img {
  width: 100%;
}
.detail-box h3 {
  position: absolute;
  top: 0.1rem;
  color: #fff;
  font-size: 0.4rem;
  width: 100%;
}
.detail-box .close {
  position: absolute;
  color: #fff;
  right: .18rem;
  top: .1rem;
  z-index: 1000;
}
.detail-box .counting {
    padding: .21rem .4rem .21rem .4rem;
    border: 1px solid #dedede;
}
.detail-box .count{
  text-align: left;
}
.text-right {
    text-align: right;
}
.detail-box .button-info {
    padding: .21rem .4rem .21rem .4rem;
}
</style>
