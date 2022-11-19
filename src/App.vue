<template>
  <div class="container">
    <app-logo></app-logo>
    <router-view />
  </div>
</template>

<script setup>
import AppLogo from "./components/AppLogo.vue";
import router from "@/router";

router.push({ name: "register" });
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
  background-color: rgb(56 189 248);
}
</style>
