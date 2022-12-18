<template>
  <div>
    <div class="home-banner-wrap">
      <div class="home-banner-title animate__animated animate__fadeInDown">
        <h2 class>Android Tech And Perf</h2>
        <h3>True mastery of any skill takes a lifetime</h3>
      </div>
      <el-image :src="require('@/assets/image/微信图片_20200710181112.jpg')"></el-image>
    </div>

    <el-row :gutter="0">
      <el-col :span="3" class="hidden-lg-and-down">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <!-- 左侧内容 -->
      <el-col :span="4" :md="6" :lg="6" :xl="4" class="hidden-sm-and-down home-aside-wrap">
        <!-- 搜索框 -->
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search"></el-input>
        <div class="user-wrap">
          <h3>关于我</h3>
          <img src="../../assets/image/微信图片_20200704011209.jpg" alt />
          <p>死亡如风</p>
          <p @click="$router.push('/resume')">了解更多</p>
        </div>
        <!-- 标签分类 -->
        <div class="category-wrap">
          <h3>标签分类</h3>
          <div class="category-name-wrap">
            <span v-for="item of category" :key="item.id" @click="$router.push('/categoryarticle?category_id='+item.id+`&category_name=${item.name}`)">{{item.name}}</span>
          </div>
        </div>
      </el-col>
      <!-- 右侧内容 -->
      <el-col :span="14" :xs="24" :sm="24" :md="17" :lg="17" :xl="14">
        <div class="article-titleTop">
          <h2>最新文章</h2>
        </div>
        <ArticlePost :newestArticle="newestArticle" />
        <div class="pagination-wrap">
          <el-pagination
            layout="prev, pager, next"
            :page-count="total.total"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
      </el-col>

      <el-col :span="3" class="hidden-md-and-down">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { ArticlePost } from "../../components/index";
export default {
  name: "articles",
  components: {
    ArticlePost
  },
  data() {
    return {
      newestArticle: [],
      total: {},
      category: [],
      search: ""
    };
  },
  mounted() {
   
    // 获取文章
    this.$http.get("api").then(res => {
      res.data.pageList.forEach(e => {
        e.time = this.formatDate(new Date(e.time));
      });
      this.total = res.data.page;
      this.newestArticle = res.data.pageList;
      this.category = res.data.category;
      console.log(res.data.category);
    });
  },
  methods: {
     handleCurrentChange(){}, 
    // 时间运算
    formatDate(now) {
      var year = now.getFullYear(); //取得4位数的年份
      var month = now.getMonth() + 1; //取得日期中的月份，其中0表示1月，11表示12月
      var date = now.getDate(); //返回日期月份中的天数（1到31)
      return year + "年" + month + "月" + date + "日";
    }
  }
};
</script>
<style scoped lang='less'>
/* 头部轮播图样式开始 */
.home-banner-wrap {
  position: relative;
  width: 100%;
  height: 50vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .home-banner-title {
    color: #fff;
    font-size: 35px;
  }
  .el-image {
    position: absolute;
    z-index: -3;
    left: 0;
  }
}
/* 头部轮播图样式结束 */
.el-row {
  .grid-content {
    min-height: 45px;
    border-radius: 2px;
  }

  // 右侧文章区域样式

  //   标题
  .article-titleTop {
    border-bottom: 1px solid #999;
    margin-bottom: 20px;
    h2 {
      font-size: 20px;
      border-left: 4px solid #24292e;
      padding-left: 10px;
    }
    .pagination-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70px;
    }
  }

  // 左侧展示区域
  .home-aside-wrap {
    padding: 10px 20px;

    // 关于我
    .user-wrap {
      text-align: center;
      margin-bottom: 50px;
      h3 {
      }
      img {
        width: 40%;
        border-radius: 50%;
      }
      p {
        font-size: 16px;
        font-weight: 800;
        color: #999;
        margin-bottom: 30px;
        &:nth-last-child(1) {
          color: #000;
          cursor: pointer;
        }
      }
    }
    // 标签分类
    .category-wrap {
      text-align: center;
      padding: 0 20px;
      .category-name-wrap {
        display: flex;
        flex-wrap: wrap;
        span {
          padding: 2px 10px;
          border: 1px solid #bfbfbf;
          margin: 0 10px 10px 0;
          border-radius: 2px;
          cursor: pointer;
        }
      }
    }
   
  }
   // 分页
  .pagination-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
  }
}
</style>