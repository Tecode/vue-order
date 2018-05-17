import Vue from 'vue'
import Vuex from 'vuex'
// 单个模块
import HomePage from './modules/HomePage'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
      HomePage: HomePage
    }
  })
}
