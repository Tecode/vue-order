import { ADD_FOOD } from '../actionTypes'

const HomePage = {
  state: {
    isShow: false,
    text: '登录成功',
    isError: false
  },
  mutations: {
    [ADD_FOOD] (state, { text, isError, isShow, time = 1500 }) {
      state.isShow = isShow
      state.text = text
      state.isError = isError
      setTimeout(() => {
        state.isShow = false
        state.text = ''
        state.isError = false
      }, time)
    }
  }
}

export default HomePage
