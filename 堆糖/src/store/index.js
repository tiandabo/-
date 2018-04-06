import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 仓库，相当于一个全局变量，存储着整个网站的数据
const store = new Vuex.Store({
	// 原始数据
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'aaa', done: true },
      { id: 2, text: 'bbb', done: false }
    ],
    alertTip: false
  },

  // 同步动作,只支持同步操作,通过store.commit('increment')触发
  mutations: {
    increment: state => {
    	state.alertTip = !state.alertTip
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
	    return getters.doneTodos.length
	  }
  }
})

export default store
