import axios from 'axios'

axios.defaults.baseURL = 'http://120.78.165.70'
axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiMjAxOCIsInVuaXF1ZV9uYW1lIjoiMjAxOCIsInVzZXJpZCI6IjIwMTgiLCJpc3MiOiJyZXN0YXBpdXNlciIsImF1ZCI6IjA5OGY2YmNkNDYyMWQzNzNjYWRlNGU4MzI2MjdiNGY2IiwiZXhwIjoxNTI2NzA3MTIyLCJuYmYiOjE1MjY1MzQzMjJ9.TCBihvJ2ls76crlKZdx0ZhyQcX3OTnm1oE4bLQUX5aw'
// 查看商品列表
export const getProductListApi = () => {
  return axios.get('/customer/ordermeal/list')
}
