<template>
<div v-title="'号单详情'" class='view-box'>
    <div class='status'>
        <yd-icon size='.4rem' color='#16aa6b' name="checkoff"></yd-icon> 已取号
    </div>
    <div class="order">
        <h1>{{mapping[data.tableType]}}{{data.queueId}}</h1>
        <p class="time-info">排队开始时间: {{startTime}}</p>
        <p class="time-info">前面还有: {{data.waitNumber}}位</p>
    </div>
    <div class="button">
        <yd-button @click.native="cancelQueue" size="large" type="primary">取消排号</yd-button>
    </div>
    </div>
</template>
<script>
import { queueStatusApi, cancelQueueApi } from '@/api'
import moment from 'moment'
export default {
  data () {
    return {
      data: {},
      mapping: ['A', 'B', 'C', 'D'],
      startTime: ''
    }
  },
  created () {
    queueStatusApi().then(({data}) => {
      this.data = data.data
      this.startTime = moment(data.data.startTime).format('HH:MM')
    })
  },
  methods: {
    cancelQueue () {
      cancelQueueApi().then(({data}) => {
        this.$dialog.toast({
          mes: data.msg,
          timeout: 1500,
          icon: 'success'
        })
        this.$router.push({path: '/queue'})
      })
    }
  }
}
</script>
<style scoped>
.view-box {
    width: 100%;
}
.order {
    width: 50%;
    margin: auto;
    padding: .8rem 0 .4rem 0;
    background-color: #ffffff;
    border: 1px solid #dedede;
    border-radius: 6px;
}
.order h1 {
    font-size: .4rem;
}
.button {
    padding: .6rem .4rem;
}
.view-box .status {
    text-align: left;
    padding: .6rem .4rem .8rem .4rem;
    background-color: #ffffff;
    border-bottom: 1px solid #dedede;
    margin-bottom: .8rem;
}
.time-info {
   text-align: left;
    padding: 0 .2rem;
    padding-top: .1rem;
}
</style>
