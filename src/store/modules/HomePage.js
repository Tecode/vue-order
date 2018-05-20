import {
  ADD_FOOD,
  SET_VALUE,
  RESET_STORE,
  UPDATE_CAR,
  DELETE_CARINFO,
  ADD_CAR,
  CLEAR_DISHES } from '../actionTypes'
import {
  deleteAllCartApi,
  addCartApi,
  deleteCartApi,
  updateCartApi } from '@/api'
import {
  Confirm,
  // Alert,
  Toast
  // Notify,
  // Loading
} from 'vue-ydui/dist/lib.rem/dialog'

const HomePage = {
  state: {
    showCar: false,
    showDetail: false,
    dishes: 1,
    myShopCar: []
  },
  mutations: {
    [ADD_FOOD] (state, { text, isError, isShow, time = 1500 }) {
      // state.isShow = isShow
      // state.text = text
      // state.isError = isError
    },
    [SET_VALUE] (state, {key, value}) {
      console.log(key, value, './//////////')
      // 打开购物车
      state[key] = value
    },
    [RESET_STORE] (state) {
      state.showCar = false
      state.showDetail = false
    }
  },
  actions: {
    // 清除购物车
    [CLEAR_DISHES] ({state, commit, rootState}) {
      Confirm({
        title: '清空购物车',
        mes: '确定清空购物车吗?',
        opts: () => {
          deleteAllCartApi().then((resp) => {
            Toast({
              mes: resp.data.msg,
              timeout: 1500,
              icon: 'success'
            })
            commit('SET_VALUE', {key: 'myShopCar', value: []})
          }).catch(() => {
            Toast({
              mes: '出错了',
              timeout: 1500,
              icon: 'error'
            })
          })
        }
      })
    },
    // 刷新购物车
    [UPDATE_CAR] ({state, commit, rootState}) {
      updateCartApi().then(({data}) => {
        commit('SET_VALUE', {key: 'myShopCar', value: data.data})
      }).catch((err) => {
        console.log(err)
      })
    },
    // 加入（修改）购物车
    [ADD_CAR] ({state, commit, dispatch}, {productId, amount}) {
      addCartApi({productId, amount}).then((resp) => {
        console.log(resp.data)
        Toast({
          mes: resp.data.msg,
          timeout: 1500,
          icon: 'success'
        })
        // 重新请求购物车信息
        dispatch('UPDATE_CAR')
        commit('SET_VALUE', {key: 'showDetail', value: false})
      }).catch((err) => {
        console.log(err)
        Toast({
          mes: '加入购物车失败',
          timeout: 1500,
          icon: 'error',
          callback: () => {
            console.log()
          }
        })
      })
    },
    // 删除一条购物车信息
    [DELETE_CARINFO] ({dispatch}, {cartId, tableId}) {
      deleteCartApi({tableId, cartId}).then(({data}) => {
        Toast({
          mes: data.msg,
          timeout: 1500,
          icon: 'success'
        })
        // 重新请求购物车信息
        dispatch('UPDATE_CAR', {tableId})
      }).catch(err => {
        console.log(err)
      })
    }
  }
}

export default HomePage
