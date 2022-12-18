<template>
  <div class="articleDetails">
    <el-row :gutter="0">
      <el-col :span="16" :offset="4">
        <div class="grid-content bg-purple">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path:`/categoryarticle?category_id=${articleFrom.category_id}&category_name=${articleFrom.category_name}`}">
              <a href="javascript:;">{{articleFrom.category_name}}</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>{{articleFrom.title}}</el-breadcrumb-item>
          </el-breadcrumb>
          <!-- 文章详情 -->
          <div class="article">
            <!-- 文章标题 -->
            <h2 class="articleTitle-wrap">{{articleFrom.title}}</h2>
            <!-- 文章作者 -->
            <div class="article_name">
              <span>作者·</span>
              <span>2017-07-07</span>
            </div>
            <!-- 文章内容 -->
            <div class="article_content">
              <div v-html="articleFrom.content"></div>
            </div>
            <!-- 分页 -->
            <div class="Pagination">
              <div class="page_perve" @click="switchArticle(prevArticle.id)" v-if="prevArticle">
                <i class="iconfont icon-icon-test1"></i>
                <p>上一篇</p>
                <span>{{prevArticle.title}}</span>
              </div>
              <div v-else>暂无文章</div>
              <span></span>
              <div class="page_next" @click="switchArticle(nextArticle.id)" v-if="nextArticle.id">
                <span>{{nextArticle.title}}</span>
                <p>下一篇</p>
                <i class="iconfont icon-icon-test2"></i>
              </div>
              <div v-else>暂无文章</div>
            </div>
          </div>
          <Comment></Comment>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {Comment} from '../../components/index'
export default {
  name: "ArticleDetails",
  components:{
    Comment
  },
  data() {
    return {
      articleFrom: {},
      prevArticle: {},
      nextArticle: {},
      id: "",
      
    };
  },
  methods: {
    // 封装请求
    requireArticle(url, id) {
      return new Promise((resolve, reject) => {
        this.$http({
          url: "api/" + url,
          params: {
            id
          }
        }).then(
          res => {
            resolve(res.data);
          },
          err => {
            reject(err);
          }
        );
      });
    },
    // 获取指定文章
    async article(id) {
      let data = await this.requireArticle("articlelist", id);
      this.articleFrom = data[0];
      this.prevArticle = await this.requireArticle("prevarticle", id);
      this.nextArticle = await this.requireArticle("nextarticle", id);
    },
    // 跳转文章
    switchArticle(id) {
      this.$router.push("/articledetails/" + id);
      this.article(id);
      this.cliTop();
    },
    // 显示回到顶部按钮
    handleScroll(e) {
      // 方法一
      var top = Math.floor(
        document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.pageXOffset
      );

      if (top > 125) {
        this.tops = true;
      } else {
        this.tops = false;
      }
    },

    // 点击top = 0 事件

    cliTop() {
      var top = Math.floor(
        document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.pageXOffset
      );

      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 1);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  created() {
    let { id } = this.$route.params;
    this.id = id;
    this.article(id);
  }
};
</script>
<style lang='less'>
.articleDetails {
  height: 100%;
  background: #f5f5f5;
  padding: 50px 0;
  box-sizing: border-box;
  .el-breadcrumb {
    margin-bottom: 10px;
  }
}

.article {
  background: #fff;
  padding: 7px;
  border-radius: 4px;
  margin-bottom: 15px;
  // 文章标题
  .articleTitle-wrap {
    text-align: center;
  }
  // 文章作者
  .article_name {
    text-align: center;
    margin-bottom: 50px;
  }
  // 文章内容
  .article_content {
    padding: 20px 10px 50px;
  }
  // 分页
  .Pagination {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;
    padding-top: 30px;
    position: relative;
    & > span {
      border-left: 1px solid #000;
      height: 40px;
      position: absolute;
      left: 50%;
    }
    div {
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      cursor: pointer;
      i {
        font-size: 20px;
        font-weight: 900;
      }
      span {
        width: 200px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        /* 形成webkt特有的伸缩盒 */
        display: -webkit-box;
        /* 设置文本行数  weikit独有 */
        -webkit-line-clamp: 1;
        /* 设置文本的排列方式， 伸缩盒的特性 */
        -webkit-box-orient: vertical;
      }
    }
    // 上一篇
    .page_perve {
      p {
        margin: 10px 10px 10px 0;
      }
    }
    // 下一篇
    .page_next {
      p {
        margin: 10px 0px 10px 10px;
      }
    }
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.bg-purple {
  // background: #d3dce6;
}

.grid-content {
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  // background-color: #999;
}
</style>