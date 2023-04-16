<template>
  <div class="container">
    <BaseLogo />
    <RouterView />
  </div>
</template>

<script setup>
import BaseLogo from "./components/base/BaseLogo.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  //background-image: linear-gradient(to right, rgb(6 182 212), rgb(59 130 246));

  // background-image: url("@/assets/background.jpg");
  background-color: rgb(56 189 248);
}
</style>
