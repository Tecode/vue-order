<template>
    <div v-title="'在线预约'" class="cell-box">
        <h3 class="header">酒阳蒸经(观音桥店)</h3>
        <yd-cell-group>
            <yd-cell-item>
              <span slot="left">时间:</span>
              <span slot="right">{{queryData.reservationDay}} {{queryData.day}} {{queryData.reservationTime && queryData.reservationTime.slice(0, 5)}}</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">人数:</span>
                <span slot="right">
                <yd-spinner v-if="!queryData.reservationId" min="1" unit="1" v-model="people"></yd-spinner>
                <yd-spinner v-if="queryData.reservationId" min="1" unit="1" :readonly="true" v-model="queryData.peopleNumber"></yd-spinner>
            </span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">手机：</span>
                <input v-if="!queryData.reservationId" slot="right" v-model="phone" type="number" placeholder="请输入手机号">
                <span v-if="queryData.reservationId" slot="right">{{queryData.phone}}</span>
            </yd-cell-item>
            <div v-if="data.reservationId" class="status">预约状态:已提交</div>
        </yd-cell-group>
        <yd-button v-if="!queryData.reservationId" @click.native="submitApply" class="button" size="large" type="danger">立即预约</yd-button>
        <yd-button v-if="queryData.reservationId" @click.native="cancleApply" class="button" size="large" type="danger">取消预约</yd-button>
    </div>
</template>
<script>
// import moment from 'moment'
import { applyApi, getReservationInfoApi, cancelQueueApi } from '@/api'
export default {
  data () {
    return {
      queryData: {},
      people: 1,
      phone: '',
      data: {}
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
          peopleNumber: this.people,
          phone: this.phone,
          reservationTimeId: this.queryData.reservationTimeId}).then(({data}) => {
          this.$dialog.toast({mes: data.msg, timeout: 1000})
          this.queryData = data.data
          this.$router.push({path: '/apply'})
        }).catch(err => {
          console.log(err)
        })
      }
    },
    cancleApply () {
      cancelQueueApi().then(({data}) => {
        this.$dialog.toast({mes: data.msg, timeout: 1000})
        this.$router.push({path: '/reservation'})
      })
    }
  },
  created () {
    if (this.$route.query.day) {
      this.queryData = this.$route.query
    } else {
      getReservationInfoApi().then(({data}) => {
        this.queryData = data.data
      })
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
