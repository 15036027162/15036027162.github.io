<template>
  <div>
    <div class="home-articleContent-wrap" v-for="item of newestArticle" :key="item.id">
      <!-- 文章标题 -->
      <div class="article-title-wrap" @click="$router.push('/articledetails/'+item.id)">
        <!-- 置顶图标 -->
        <!-- <i class="title-Topping iconfont icon-xiangshang" v-if="item.hot"></i> -->
        <h2 class="article-title">
          <span>{{item.hot===1?'"热门"':''}}</span>
          {{item.title}}
        </h2>
      </div>
      <!-- 文章内容 -->
      <div class="article-content-wrap">
        <div class="image-wrap" v-if="item.description_image_path">
          <img :src="item.description_image_path" alt />
        </div>
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
          <span>
            <span>40</span>人表示喜欢
          </span>
          <span>
            <span>40</span>次访问
          </span>
        </div>
        <div class="article-classification"
        @click="$router.push('/categoryarticle?category_id='+item.category_id+`&category_name=${item.category_name}`)"
        ># {{item.category_name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticlePost",
  props: {
    newestArticle: {
      type: Array,
      value: []
    }
  }
};
</script>
<style scoped lang='less'>
.home-articleContent-wrap {
  border-bottom: 1px solid #999;
  padding-bottom: 20px;
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
    color: #646464;
    display: flex;
    margin-bottom: 10px;
    .image-wrap {
      flex: 2;
      padding-right: 20px;
      box-sizing: border-box;
      img {
        width: 100%;
      }
    }
    div {
      flex: 9;
      overflow: hidden;
      font-size: 16px;
      line-height: 25px;
      margin: 0;
      a {
        color: red;
      }
    }
  }
  // 文章日期与分类
  .article-bottom-wrap {
    display: flex;
    justify-content: space-between;
    color: #8590a6;
    // 日期时间
    .article-title {
      font-size: 14px;
      i {
        font-size: 18px;
      }
      & > span {
        margin-right: 5px;
        span {
          color: #000;
        }
      }
    }
    // 分类标签
    .article-classification {
      cursor: pointer;
    }
  }
}
</style>