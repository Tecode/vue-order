<template>
    <div class="queue-box">
        <h2>排号</h2>
        <yd-flexbox style='margin-top: .5rem' v-for='(item, key) in list' :key='key'>
            <yd-flexbox-item v-for='(queue, key1) in item' :key='key1'>
                <div class="info">
                    <h3>{{queue.type}}桌</h3>
                    <p>{{queue.info}}</p>
                </div>
            </yd-flexbox-item>
        </yd-flexbox>
        <div class="conect">
            <p>取号规则</p>
            <p>联系电话</p>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      list: [[
        {
          type: 'A',
          tabletype: 0,
          info: '1-2人'
        },
        {
          type: 'B',
          tabletype: 1,
          info: '3-4人'
        }
      ], [
        {
          type: 'C',
          tabletype: 2,
          info: '5-8人'
        },
        {
          type: 'D',
          tabletype: 3,
          info: '8人以上'
        }
      ]]
    }
  }
}
</script>
<style scoped>
    .queue-box{
        width: 100%;
        margin-top: 2rem;
    }
    .queue-box h2 {
        padding: 0 0 .6rem 0;
        font-size: .4rem;
    }
    .queue-box h3 {
        font-size: .38rem;
    }
    .queue-box .info {
        width: 2.8rem;
        background-color: #ffffff;
        margin: auto;
        padding: .4rem 0;
        border: 1px solid #dedede;
    }
    .queue-box .conect {
        text-align: left;
        padding: .6rem .4rem;
    }
</style>
