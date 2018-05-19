import axios from 'axios'

axios.defaults.baseURL = 'http://120.78.165.70'
axios.defaults.headers.common['Authorization'] = ''
// 查看商品列表
export const getProductListApi = () => {
  return axios.get('/customer/ordermeal/list')
}
// 获取最新的购物车信息
export const getCartInfoApi = () => {
  return axios.get('/customer/ordermeal/updateCart')
}
// 清除购物车
export const deleteAllCartApi = (params) => {
  return axios.post(`/customer/ordermeal/deleteAllCart?tableId=${params.tableId}`)
}
// 刷新购物车
export const updateCartApi = (params) => {
  return axios.get('/customer/ordermeal/updateCart', {params})
}
// 加入（修改）购物车
export const addCartApi = (params) => {
  return axios.post(`/customer/ordermeal/addCart?openId=${params.openId}&tableId=${params.tableId}&productId=${params.productId}&amount=${params.amount}`)
}
// 搜索菜品
export const searchApi = (params) => {
  return axios.get(`/customer/ordermeal/search?name=${params.name}`)
}
// 设置就坐的人数
export const choiceeatApi = (params) => {
  return axios.post(`/customer/ordermeal/seat?tableId=${params.tableId}&peopleNumber=${params.peopleNumber}`)
}
// 查看商家给出的预约信息
export const reservationApi = (params) => {
  return axios.get(`/customer/reservation/list`)
}
// 申请一个预约
export const applyApi = (params) => {
  return axios.post(`/customer/reservation/apply?openId=${params.openId}&date=${params.date}&time=${params.time}&peopleNumber=${params.peopleNumber}&phone=${params.phone}`)
}
// 查看我的预约
export const getReservationInfoApi = (params) => {
  return axios.get(`/customer/reservation/info?openId=${params.openId}`)
}
// 删除一条购物车信息
export const deleteCartApi = (params) => {
  return axios.post(`/customer/ordermeal/deleteCart?tableId=${params.tableId}&cartId=${params.cartId}`)
}
// 下单
export const placeApi = (params) => {
  return axios.post(`/customer/ordermeal/place?tableId=${params.tableId}`)
}
// 查看订单
export const getOrderApi = (params) => {
  return axios.get(`/customer/ordermeal/order?tableId=${params.tableId}`)
}
