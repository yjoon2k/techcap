<template>
  <div id="app">
        <a href="/">
          <img id="logo" width=300px height=300px src='@/assets/logo.png'>
        </a>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#logo{
    position: absolute;
    left: 0px;
    top: 0px;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
