<template>
  <div>
    <yd-flexbox direction="vertical">
      <div class="header">
        <h3>向阳小酒馆</h3>
        <p>卡1桌2人</p>
        <h1>¥71.10</h1>
      </div>
      <yd-flexbox-item style="overflow-y: auto">
        <yd-preview style="padding: .3rem 0" :buttons="[]">
          <yd-preview-item>
            <div slot="left">商品</div>
            <div slot="right">啦啦啦啦啦啦啦</div>
          </yd-preview-item>
          <yd-preview-item>
            <div slot="left">商品</div>
            <div slot="right">啦啦啦啦啦啦啦</div>
          </yd-preview-item>
          <yd-preview-item>
            <div slot="left">商品商品</div>
            <div slot="right">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
          </yd-preview-item>
        </yd-preview>
      </yd-flexbox-item>
      <yd-button style="margin-bottom: .4rem" size="large" type="primary">立即支付</yd-button>
    </yd-flexbox>
  </div>
</template>

<script type="text/babel">
export default {
  data () {
    return {
      btns: []
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
