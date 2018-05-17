<template>
<yd-flexbox>
    <yd-scrollnav>
        <yd-scrollnav-panel :label='item.name' v-for='item, key in list' :key='key'>
            <!-- 内容 -->
            <h2>{{item.name}}</h2>
            <yd-list :theme='1'>
                <yd-list-item v-for='product in item.foods'>
                    <img slot='img' :src='product.icon'>
                    <span slot='title'>{{product.name}} - ¥{{product.price}}</span>
                    <div slot='title'>
                      <button slot='button'>添加</button>
                    </div>
                </yd-list-item>
            </yd-list>
            <!-- 内容 -->
        </yd-scrollnav-panel>
        <yd-backtop></yd-backtop>
    </yd-scrollnav>
</yd-flexbox>
</template>

<script>
import { getProductListApi } from "@/api";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    getProductListApi()
      .then(({ data }) => {
        console.log(data.data);
        this.list = data.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    loadList() {
      getProductListApi()
        .then(({ data }) => {
          console.log(data.data)
          this.list = data.data
        })
        .catch(err => {
          console.log(err)
        });
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
