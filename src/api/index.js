import axios from 'axios'
import Cookies from 'js-cookie'

axios.defaults.baseURL = 'http://120.78.165.70'
axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiMjAxOCIsInVuaXF1ZV9uYW1lIjoiMjAxOCIsInVzZXJpZCI6IjIwMTgiLCJpc3MiOiJyZXN0YXBpdXNlciIsImF1ZCI6IjA5OGY2YmNkNDYyMWQzNzNjYWRlNGU4MzI2MjdiNGY2IiwiZXhwIjoxNTI2OTYwNjEzLCJuYmYiOjE1MjY3ODc4MTN9.NhRUDwOLxuLLgUiAcR9cjZlqaeqGLNKnfqDGc0_dUZU'
const openId = Cookies.get('openId') || 'oOojD1L0z3FdADqZKjv7Y7QV79Gc'
const tableId = Cookies.get('tableId')
// 查看商品列表
export const getProductListApi = () => {
  return axios.get('/customer/ordermeal/list')
}
// 获取最新的购物车信息
export const getCartInfoApi = () => {
  return axios.get(`/customer/ordermeal/updateCart?tableId=${tableId}`)
}
// 清除购物车
export const deleteAllCartApi = (params) => {
  return axios.post(`/customer/ordermeal/deleteAllCart?tableId=${tableId}`)
}
// 刷新购物车
export const updateCartApi = () => {
  return axios.get(`/customer/ordermeal/updateCart?tableId=${tableId}`)
}
// 加入（修改）购物车
export const addCartApi = (params) => {
  return axios.post(`/customer/ordermeal/addCart?openId=${openId}&tableId=${tableId}&productId=${params.productId}&amount=${params.amount}`)
}
// 搜索菜品
export const searchApi = (params) => {
  return axios.get(`/customer/ordermeal/search?name=${params.name}`)
}
// 设置就坐的人数
export const choiceeatApi = (params) => {
  return axios.post(`/customer/ordermeal/seat?tableId=${tableId}&peopleNumber=${params.peopleNumber}`)
}
// 查看商家给出的预约信息
export const reservationApi = (params) => {
  return axios.get(`/customer/reservation/list`)
}
// 申请一个预约
export const applyApi = (params) => {
  return axios.post(`/customer/reservation/apply?openId=${openId}&reservationTimeId=${params.reservationTimeId}&peopleNumber=${params.peopleNumber}&phone=${params.phone}`)
}
// 查看我的预约
export const getReservationInfoApi = () => {
  return axios.get(`/customer/reservation/info?openId=${openId}`)
}
// 删除一条购物车信息
export const deleteCartApi = (params) => {
  return axios.post(`/customer/ordermeal/deleteCart?tableId=${tableId}&cartId=${params.cartId}`)
}
// 下单
export const placeApi = (params) => {
  return axios.post(`/customer/ordermeal/place?tableId=${tableId}`)
}
// 查看订单
export const getOrderApi = (params) => {
  return axios.get(`/customer/ordermeal/order?tableId=${tableId}`)
}
// 查看商家信息 //需要登录
export const getSettingInfoApi = (params) => {
  return axios.get(`/shop/setting/info`)
}
// 排队拿号
export const applyTableApi = ({tableType}) => {
  return axios.post(`/customer/queue/request?openId=${openId}&tableType=${tableType}`)
}
// 查看排队信息
export const queueStatusApi = () => {
  return axios.get(`/customer/queue/status?openId=${openId}`)
}
// 取消预约
export const cancelReservationApi = () => {
  return axios.post(`/customer/reservation/cancel?openId=${openId}`)
}
// 发起微信支付
export const payApi = ({orderId}) => {
  return axios.get(`/pay/create?openId=${openId}&orderId=${orderId}`)
}
// 查看商家排队信息
export const queueApi = () => {
  return axios.get(`/customer/queue/list`)
}
// 取消排队
export const cancelQueueApi = () => {
  return axios.post(`/customer/queue/cancel?openId=${openId}`)
}
// 修改用餐人数
export const updateSeatApi = ({peopleNumber}) => {
  return axios.post(`/customer/ordermeal/updateSeat?tableId=${tableId}&peopleNumber=${peopleNumber}`)
}
// webSocket
export const webSocketApi = () => {
  let websocket = null
  // 判断当前浏览器是否支持WebSocket
  if ('WebSocket' in window) {
    websocket = new WebSocket(`ws://120.78.165.70/webSocket/cart/${tableId}`)
  } else {
    alert('当前浏览器 Not support websocket')
  }
  websocket.onopen = function () {
    console.log('WebSocket连接成功')
  }
}
