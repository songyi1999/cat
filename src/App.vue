<template>

  <router-view/>
  <van-tabbar route>
  <van-tabbar-item icon="home-o" to="/">最新</van-tabbar-item>
  <van-tabbar-item icon="search" to="/category">分类</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to="/takepic">拍摄</van-tabbar-item>
  <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
</van-tabbar>
</template>
<script  lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  
  setup() {
    return {
      
    }
  },
});
  
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
