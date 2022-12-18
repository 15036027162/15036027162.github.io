<template>
  <div>
    <div class="home-banner-wrap">
      <div class="home-banner-title animate__animated animate__fadeInDown">
        <h2 class>Android Tech And Perf</h2>
        <h3>True mastery of any skill takes a lifetime</h3>
      </div>
      <el-image :src="require('@/assets/image/微信图片_20200710181103.jpg')"></el-image>
    </div>
    <!-- 内容展示 -->
    <el-row :gutter="0">
      <!-- 左边栏 -->
      <el-col :span="3" class="hidden-lg-and-down">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <!-- 左侧博主信息展示 -->
      <el-col :span="4" :md="6" :lg="6" :xl="4" class="hidden-sm-and-down home-aside-wrap">
        <div class="aside-user-wrap">
          <img src="../../assets/image/微信图片_20200704011209.jpg" alt class="aside-image" />
          <h3 class="userTitle">Gracker</h3>
          <h3 class="userSubtitle">闻道有先后,术业有专攻,如是而已</h3>
          <!-- 联系方式 -->
          <div class="user-contact-wrap">
            <i class="iconfont icon-weixin"></i>
            <i class="iconfont icon-QQ"></i>
            <i class="iconfont icon-gitee-fill-round"></i>
          </div>
        </div>
      </el-col>
      <!-- 内容区/文章展示 -->
      <el-col :span="14" :xs="24" :sm="24" :md="17" :lg="17" :xl="14">
        <div class="home-articleContent-wrap" v-for="item of hotArticle" :key="item.id">
          <!-- 文章标题 -->
          <div class="article-title-wrap" @click="$router.push('/articledetails/'+item.id)">
            <!-- 置顶图标 -->
            <i class="title-Topping iconfont icon-xiangshang" v-if="item.hot"></i>
            <h2 class="article-title">
              <span>{{item.hot===1?'[热门]"':''}}</span>
              {{item.title}}
            </h2>
          </div>
          <!-- 文章内容 -->
          <div class="article-content-wrap">
            <div v-html="item.content.substring(0,150) + ` ...`" v-if="item.content.length>100"></div>
            <div v-html="item.content" v-else></div>
          </div>
          <!-- 文章日期与分类 -->
          <div class="article-bottom-wrap">
            <div class="article-title">
              <!-- 图标 -->
              <i class="iconfont icon-ic_calendar"></i>
              <!-- 时间 -->
              <span>{{item.time}}</span>
            </div>
            <div
              class="article-classification"
              @click="$router.push('/categoryarticle?category_id='+item.category_id+`&category_name=${item.category_name}`)"
            ># {{item.category_name}}</div>
          </div>
        </div>
        <!-- 分页 -->
        <div class="pagination-wrap">
          <el-pagination
            layout="prev, pager, next"
            :page-count="total.total"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
      </el-col>
      <!-- 右边栏 -->
      <el-col :span="3" class="hidden-lg-and-down">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      hotArticle: [],
      total: {},
      img: "../../assets/image/微信图片_20200710181103.jpg"
    };
  },
  mounted() {
    this.handleArticle()
  },
  methods: {
    // 时间运算
    formatDate(now) {
      var year = now.getFullYear(); //取得4位数的年份
      var month = now.getMonth() + 1; //取得日期中的月份，其中0表示1月，11表示12月
      var date = now.getDate(); //返回日期月份中的天数（1到31)
      return year + "年" + month + "月" + date + "日";
    },
    // 分页
    handleCurrentChange(val) {
      this.handleArticle(val)
    },
    handleArticle(val=1) {
      // 获取文章
      this.$http({
        url:'api',
        params:{
          p:val
        }
      }).then(res => {
        res.data.pageList.forEach(e => {
          e.time = this.formatDate(new Date(e.time));
        });
        this.total = res.data.page;
        // 热门排序
        this.hotArticle = res.data.pageList.sort((a, b) => {
          return b.hot - a.hot;
        });
      });
    }
  }
};
</script>
<style scoped lang="less">
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
// 内容区样式
.el-row {
  margin-top: 20px;
  .bg-purple {
    min-height: 36px;
  }
  // 左边内容区
  .home-aside-wrap {
    box-sizing: border-box;
    padding: 0 30px;
    // 头像
    .aside-user-wrap {
      text-align: center;
      border-bottom: 1px solid #ccc;
      padding-bottom: 35px;
      .aside-image {
        width: 70%;
        border-radius: 10px;
      }
      .userTitle {
      }
      .userSubtitle {
        font-size: 16px;
      }
      .user-contact-wrap {
        width: 100%;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        i {
          flex: 1;
          font-size: 25px;
        }
      }
    }
  }
  // 右侧内容
  .home-articleContent-wrap {
    border-bottom: 1px dashed #ababab;
    // padding-bottom: 20px;
    padding: 0 20px 20px;
    // 文章标题
    .article-title-wrap {
      display: flex;
      cursor: pointer;
      .title-Topping {
        width: 50px;
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .article-title {
        flex: 1;
      }
      .article-title:hover {
        color: red;
      }
    }
    // 文章内容
    .article-content-wrap {
      div {
        font-size: 18px;
        line-height: 25px;
        margin: 0;
        overflow: hidden;

        a {
          color: red;
        }
      }
    }
    // 文章日期与分类
    .article-bottom-wrap {
      display: flex;
      justify-content: space-between;
      color: #ababab;
      // 日期时间
      .article-title {
        i {
          font-size: 18px;
        }
      }
      // 分类标签
      .article-classification {
        cursor: pointer;
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