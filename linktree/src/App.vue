<template>
  <div id="app">
    <link-node></link-node>
  </div>
</template>

<script>
import LinkNode from './components/link-node.vue'


export default {
  name: 'App',
  components: {
    LinkNode
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
