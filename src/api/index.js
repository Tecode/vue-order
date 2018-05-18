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
  return axios.post('/customer/ordermeal/deleteAllCart', {params})
}
// 刷新购物车
export const updateCartApi = (params) => {
  return axios.get('/customer/ordermeal/updateCart', {params})
}
// 加入（修改）购物车
export const addCartApi = (params) => {
  return axios.post(`/customer/ordermeal/addCart?openId=${params.openId}&tableId=${params.tableId}&productId=${params.productId}&amount=${params.amount}`)
}
