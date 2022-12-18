<template>
  <div id="app">
    <!-- 头部导航栏 -->
    <Header />
    <router-view />
  </div>
</template>

<script>
import { Header } from "./components/index";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
#app,body,html{
  margin: 0;
  padding: 0;
  z-index: -99;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
ul{
list-style: none;
}
</style>
