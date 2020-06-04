import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters:{
    getStateCount:function(state){//相当于computed
      return state.count+1;
    }
  },
  mutations:{
    add(state){//上面定义的state
      state.count = state.count+1;
    },
    reduction(state,n){
      state.count = state.count-n;
    }
  },
  actions:{//注册actions,类似vue里的methods
    addFun(context){//接受一个store实例具有相同方法的属性的context对象
      context.commit("add");
    },
    reductionFun(context,n){
      context.commit("reduction",n);
    }

  },
})

export default store
