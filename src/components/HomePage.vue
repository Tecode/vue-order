<template>
<yd-flexbox>
    <yd-scrollnav>
        <yd-scrollnav-panel :label='item.name' v-for='item, key in list' :key='key'>
            <!-- 内容 -->
            <h2>{{item.name}}</h2>
            <yd-list :theme='3'>
                <yd-list-item v-for='product in item.foods'>
                    <img slot='img' :src='product.icon'>
                    <yd-list-other slot='other'>
                      <div style="width:100%">
                        <div class='info'>
                          <p class='list-name'>{{product.name}}</p>
                          <p class='list-price'>¥{{product.price}}</p>
                        </div>
                          <button class='add-product'>添加</button>
                      </div>
                    </yd-list-other>
                </yd-list-item>
            </yd-list>
            <!-- 内容 -->
        </yd-scrollnav-panel>
        <yd-backtop></yd-backtop>
    </yd-scrollnav>
</yd-flexbox>
</template>

<script>
import { getProductListApi } from '@/api';
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
    
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  padding: .15rem 0;
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
.list-name {
  color: #4c4c4c;
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.list-price {
  text-align: left;
}
.add-product {
display: block;
    text-align: center;
    width: 100%;
    border: 1px solid #ef4f4f;
    padding: .1rem 0;
    border-radius: 4px;
    color: #ef4f4f;
}
.info {
  height: .8rem;
}
</style>
