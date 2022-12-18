<template>
  <div class="resume">
    <!-- 顶部第一展示窗口 -->
    <div class="resume-header-wrap">
      <div>
        <h2>Hello, I'm RedSpite</h2>
        <p>一个拥有像素眼的前端工程师</p>
        <div>
          <el-button type="success">关于</el-button>
          <el-button type="success">我的作品</el-button>
        </div>
      </div>
    </div>
    <!-- 第二展示窗口  关于我-->
    <div class="resume-AboutMe-wrap">
      <div>
        <h2>
          <span>关于我</span>
        </h2>
        <img :src="require('@/assets/image/微信图片_20200704011209.jpg')" alt />
        <p>我叫方焕武，21岁，坐标广州，是一名前端工程师。前端是一门有容乃大的行业，我并不是计算机专业出生。 在自学前端之前，唯一接触过的就是学校里的php语言。庆幸的是JS与C很相像，给我很大的信心来学习。</p>
      </div>
    </div>
    <!-- 第三展示窗口  技能 -->
    <div class="resume-job_wanted-wrap">
      <div class="re_jw_center">
        <h2 class="job_wanred-title">求职意向</h2>
        <!-- 技能展示列表 -->
        <div class="skill-wrap">
          <div class="skill_display-wrap" v-for="(item,index) of skill" :key="index">
            <i class="iconfont" :class="item.icon"></i>
            <h4>{{item.title}}</h4>
            <p>{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 第四展示窗口  我的经历 -->
    <div class="resume-experience-wrap">
      <div class="block">
        <el-timeline>
          <el-timeline-item timestamp="2018/4/12" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>
<script>
import { TimeAxis } from "../../components/index";
export default {
  components: {
    TimeAxis
  },
  data() {
    return {
      skill: [
        {
          icon: "icon-shebeiweihuguanli",
          title: "网页制作",
          content:
            "响应式页面,简单不冗余代码。css3流畅动画效果，兼容不同浏览器。"
        },
        {
          icon: "icon-_qianduankaifa",
          title: "前端功能",
          content: "用JS完成常见的前端功能特效用AJAX读取后台数据"
        },
        {
          icon: "icon-shouji",
          title: "h5页面",
          content: "移动端页面的书写兼容平板、安卓、IOS不同终端。"
        },
        {
          icon: "icon-xiaochengxu",
          title: "小程序",
          content: "使用原生小程序语法熟练搭建各类需求程序"
        }
      ]
    };
  }
};
</script>
<style scoped lang='less'>
// 第一窗口展示
.resume-header-wrap {
  height: calc(100vh - 45px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #ccc;
  h2 {
    margin: 0;
    font-family: cursive, "Lato", sans-serif;
    font-size: 70px;
    font-weight: 500;
  }
  p {
    font-size: 30px;
    font-weight: 600;
  }
  button {
    font-size: 18px;
    width: 150px;
    &:nth-child(1) {
      background: #24292e;
      border: none;
    }
    &:nth-child(2) {
      background: #fff;
      border-color: #24292e;
      color: #24292e;
    }
  }
}
// 第二窗口展示
.resume-AboutMe-wrap {
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 800px;
    h2 {
      margin-bottom: 50px;
      font-size: 30px;
      span {
        border-bottom: 4px solid #409eff;
        display: inline-block;
        padding-bottom: 10px;
      }
    }
    img {
      width: 200px;
      border-radius: 50%;
    }
    p {
      text-align: left;
      text-indent: 2em;
      line-height: 25px;
      color: #999;
    }
  }
}
// 第三窗口展示
.resume-job_wanted-wrap {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .re_jw_center {
    .job_wanred-title {
      font-size: 24px;
      margin-bottom: 100px;
    }
    .skill-wrap {
      width: 1100px;
      display: flex;
      .skill_display-wrap {
        width: 25%;
        flex: 1;
        padding: 0 20px;
        box-sizing: border-box;
        i {
          font-size: 70px;
        }
      }
    }
  }
}
.resume-experience-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .block{
    width: 40%;
  }
}
</style>