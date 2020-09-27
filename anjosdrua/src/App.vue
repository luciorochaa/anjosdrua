<template>
  <div id="app">    
    <router-view></router-view>
    <router-view :key="$route.fullPath" name="template"></router-view>
  </div>
</template>

<script>
import { routes } from "./routes/routes.js";

export default {
  name: 'App', 
  data() {
    return {
      routes
    };
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
