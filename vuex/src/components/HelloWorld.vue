<template>
  <div class="hello">
    <h1>{{this.$store.state.count}}</h1>
    <!-- Getter相当于vue中的computed计算属性，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算，这里我们可以通过定义vuex的Getter来获取，Getters 可以用于监听、state中的值的变化 -->
    <h2>我从页面上直接获取的:{{this.$store.state.count}}</h2>
    <h2>我是从Getters获取的计算后的值为:{{this.$store.getters.getStateCount}}</h2>
    <!-- 数据我们在页面是获取到了，但是如果我们需要修改count值怎么办？如果需要修改store中的值唯一的方法就是提交mutation来修改，我们现在Hello World.vue文件中添加两个按钮，一个加1，一个减1；这里我们点击按钮调用addFun（执行加的方法）和reductionFun（执行减法的方法），然后在里面直接提交mutations中的方法修改值： -->
    <p>count的值:{{this.$store.state.count}}</p>
    <button @click="addFun">+</button>
    <button @click="reductionFun">-</button>
    <!-- 我们看到，当点击三次后值从2变成了-1；页面上的值是改变了；我们达到了修改store中状态值的目的，但是，官方并不介意我们这样直接去修改store里面的值，而是让我们去提交一个actions，在actions中提交mutation再去修改状态值，接下来我们修改index.js文件，先定义actions提交mutation的函数： -->
<!-- 如果我们不喜欢这种在页面上使用“this.$stroe.state.count”和“this.$store.dispatch('funName')”这种很长的写法，那么我们可以使用mapState、mapGetters、mapActions就不会这么麻烦了； -->
<p>{{count1}}</p>   
</div>
</template>

<script>
  import {mapState,mapActions,mapGetters} from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState({
      count1:state=>state.count
    })
  },
  methods: {
    addFun(){
      // this.$store.commit("add")
      this.$store.dispatch("addFun")

    },
    reductionFun(){
      var n =10
      // this.$store.commit("reduction")
      this.$store.dispatch("reductionFun",n)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
