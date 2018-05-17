<template>
    <yd-flexbox>
    <yd-scrollnav>
            <yd-scrollnav-panel :label='item.name' v-for='(item, key) in list' :key='key'>
                <!-- 内容 -->
                <h2>{{item.name}}</h2>
                <yd-list :theme='3'>
                    <yd-list-item v-for='product in item.foods' :key='product.id'>
                        <img slot='img' :src='product.icon' @click='showDetail(product)' />
                        <yd-list-other slot='other'>
                            <div style='width:100%'>
                                <div class='info'>
                                    <p class='list-name'>{{product.name}}</p>
                                    <p class='list-price'>¥{{product.price}}</p>
                                </div>
                                <button @click='showDetail(product)' class='add-product'>添加</button>
                            </div>
                        </yd-list-other>
                    </yd-list-item>
                </yd-list>
                <!-- 内容 -->
            </yd-scrollnav-panel>
            <div style="height:1.4rem"></div>
            <div class="footer-car">
                <yd-flexbox class="button-info">
                    <yd-flexbox-item class="shop-car">
                        <yd-icon name="order"></yd-icon>
                        <span>已点了5个菜</span>
                    </yd-flexbox-item>
                    <yd-flexbox-item class="text-right">
                        <yd-button type="danger">选好了</yd-button>
                    </yd-flexbox-item>
                </yd-flexbox>
            </div>
            <yd-backtop></yd-backtop>
        </yd-scrollnav>
        <show-detail
                :visible= 'visible'
                :productDetail= 'productDetail'
                :callBack= 'callBack'
        ></show-detail>
        <div @click='linkPage()'>
            <yd-icon name='search' class="search"></yd-icon>
        </div>
    </yd-flexbox>
</template>

<script>
import { getProductListApi } from '@/api'
import ShowDetail from './ShowDetail'
export default {
  data () {
    return {
      list: [],
      productDetail: {},
      visible: false
    }
  },
  components: {
    ShowDetail
  },
  created () {
    getProductListApi()
      .then(({ data }) => {
        this.list = data.data
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    showDetail (productDetail) {
      this.visible = true
      this.productDetail = productDetail
    },
    callBack () {
      this.visible = !this.visible
    },
    linkPage () {
      console.log(5)
      this.$router.push({path: '/search', query: { name: 'private' }})
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  padding: 0.15rem 0;
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
  padding: 0.1rem 0;
  border-radius: 4px;
  color: #ef4f4f;
}
.info {
  height: 0.8rem;
}
.shop-car {
    color: #ef4f4f;
    font-size: .34rem;
    text-align: left;
}
.text-right{
    text-align: right;
}
.search {
    position: fixed;
    bottom: 180px;
    width: 1rem;
    height: 1rem;
    right: 5%;
    background-color: #fff;
    color: #ef4f4f;
    padding-top: .14rem;
    border-radius: 999px;
    border: 1px solid #ef4f4f;
}
.footer-car {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    padding: .15rem .4rem;
    border-top: 1px solid #dedede;
}
</style>
