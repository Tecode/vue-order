<template>
        <yd-popup v-model='visible' position='center' :close-on-masker='masker' width='90%'>
            <div class='detail-box'>
              <h3>{{productDetail.name}}</h3>
              <yd-icon class='close' name='error-outline' @click.native='callBack()'></yd-icon>
                <div style='height:5rem;overflow:hidden'>
                  <img :src='productDetail.icon' />
                </div>
                <p style='text-align: center;'>
                    <yd-button @click.native='callBack()'>Close Center Popup</yd-button>
                </p>
            </div>
        </yd-popup>
</template>
<script>
export default {
  name: 'ShowDetail',
  data () {
    return {
      masker: false
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
  top: .18rem;
  z-index: 1000;
}
</style>
