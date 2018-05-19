<template>
    <div class="cell-box">
        <h3 class="header">酒阳蒸经(观音桥店)</h3>
        <yd-cell-group>
            <yd-cell-item arrow>
                <span slot="left">时间：</span>
                <yd-datetime type="datetime" v-model="datetime" slot="right"></yd-datetime>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">人数</span>
                <span slot="right">
                <yd-spinner min="1" unit="1" v-model="people"></yd-spinner>
            </span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">手机：</span>
                <input slot="right" v-model="phone" type="number" placeholder="请输入手机号">
            </yd-cell-item>
            <div class="status">预约状态:已提交</div>
        </yd-cell-group>
        <yd-button @click.native="submitApply" class="button" size="large" type="danger">立即预约</yd-button>
    </div>
</template>
<script>
import moment from 'moment'
import { applyApi } from '@/api'
export default {
  data () {
    return {
      datetime: moment().format('YYYY-MM-DD HH:mm'),
      people: 1,
      phone: ''
    }
  },
  methods: {
    submitApply () {
      if (!(/^[1][3,4,5,7,8,9][0-9]{9}$/.test(this.phone))) {
        this.$dialog.notify({
          mes: '手机号码格式不正确',
          timeout: 3000
        })
      } else {
        applyApi({
          openId: 'oOojD1L0z3FdADqZKjv7Y7QV79Gc',
          peopleNumber: this.people,
          phone: this.phone,
          time: moment(this.datetime).format('HH:mm'),
          date: moment(this.datetime).format('YYYY-MM-DD')}).then(({data}) => {
          this.$dialog.toast({
            mes: data.msg,
            timeout: 1500,
            icon: 'error'
          })
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>
<style scoped>
.cell-box {
    width: 100%;
}
.cell-box .button {
    margin: 1rem 0;
    width: 96%;
    margin: auto;
}
.status {
    background-color: #ffffff;
    padding: .2rem 0;
}
.header {
    background-color: #ffffff;
    padding: .4rem 0;
    border-bottom: 1px solid #dedede;
}
</style>
