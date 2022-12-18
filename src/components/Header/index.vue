<template>
  <div class="header">
    <el-row :gutter="0">
      <el-col :span="3" class="hidden-md-and-down">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="18" :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
        <div class="home-header-wrap">
          <!-- logo -->
          <div class="logo"></div>
          <div class="header-nav-wrap">
            <!-- 导航栏 -->
            <el-menu
              :default-active="this.$route.path"
              class="el-menu-demo"
              mode="horizontal"
              background-color="#24292e"
              router
            >
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="/articles">精选文章</el-menu-item>
              <el-menu-item index="/works">个人作品</el-menu-item>
              <el-menu-item index="/diary">个人日记</el-menu-item>
              <el-menu-item index="/resume">个人简历</el-menu-item>
            </el-menu>
          </div>
        </div>
      </el-col>
      <el-col :span="3" class="hidden-md-and-down">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {},
  methods: {}
};
</script>
<style scoped lang='less'>
.el-row {
  .grid-content {
    min-height: 45px;
    background: #24292e;
  }
}
// 头部导航栏
.home-header-wrap {
  background: #24292e;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  .logo {
    height: 100%;
    width: 100px;
    background: red;
  }
  .header-nav-wrap {
    color: #fff;
    .el-menu {
      border: none;
      background: none;
      height: 100%;
      margin: 0;
      padding: 0;
      .el-menu-item {
        height: 100%;
        display: flex;
        align-items: center;
        color: #969fa9;
      }
      .el-menu-item:hover {
        background: none;
        color: #ccc;
      }
      .is-active {
        background: #000 !important;
        color: #ccc;
      }
    }
  }
}
</style>