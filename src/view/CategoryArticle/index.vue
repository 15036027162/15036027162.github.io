<template>
  <div id="categoryArticle">
    <el-row :gutter="0">
      <el-col :span="18" :offset="3" class="ca-wrap">
        <div class="ca_title">
          <h2>{{category_name}}</h2>
        </div>

        <ArticlePost :newestArticle="article"></ArticlePost>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { ArticlePost } from "../../components/index.js";
export default {
  name: "CategoryArticle",
  components: {
    ArticlePost
  },
  data() {
    return {
      article: [],
      category_name: ""
    };
  },
  mounted() {
    let { category_id, category_name } = this.$route.query;
    this.category_name = category_name;
    this.$http({
      url: "api/list",
      params: {
        category_id: 1
      }
    }).then(res => {
      console.log(res);
      this.article = res.data;
    });
  }
};
</script>
<style lang='less'>
.ca_title {
  height: 150px;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>