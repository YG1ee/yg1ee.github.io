<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div id="app">
    <h1>To-Do List</h1>
    <ul>
      <li>
        <Caticon label="My Item" :done="false"></Caticon>
      </li>
    </ul>
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import Caticon from './components/Caticon.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data() {
    return {
      // 여기에 데이터 저장
      // key: value
      // isDone: this.done
    }
  },
  components: {
    Caticon,
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
