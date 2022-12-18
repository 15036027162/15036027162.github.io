<template>
<div>
 <!-- 评论模块 -->
          <div class="comment-wrap">
            <div class="comment-Mask">功能开发中</div>
            <!-- 评论输入框 -->
            <div class="comment-input">
              <el-input
              disabled
                type="textarea"
                :rows="4"
                resize="none"
                placeholder="请输入内容"
                v-model="textarea"
              ></el-input>
              <el-button type="primary">评论</el-button>
            </div>
            <!-- 评论列表 -->
            <div class="comment-list-wrap">
              <p>全部评论</p>
              <div class="user-comment-wrap">
                <!-- 头像 -->
                <div class="userImage">
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  ></el-avatar>
                </div>
                <!-- 评论内容 -->
                <div class="userComment">
                  <h5 class="username">My_Chao</h5>
                  <p class="usercomment">可不可以参考您的界面做个博客呢？</p>
                  <!-- 时间显示与点赞 -->
                  <div class="user-time-wrap">
                    <!-- 评论时间 -->
                    <div class="comment-time">123天</div>
                    <div class="comment-Fabulous">点赞</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</div>
</template>
<script>
export default {
  data(){
    return {
      textarea: ""
    }
  }
}
</script>
<style lang='less'>
.comment-wrap {
    border-radius: 4px;
    background: #fff;
    padding: 30px 100px;
    position: relative;
    .comment-Mask {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: rgba(245, 245, 245, .7);
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #9999;
      font-size: 40px;
      font-weight: 900;
    }
    // 评论表单
    .comment-input {
      margin-bottom: 20px;
      overflow: hidden;
      .el-input {
        z-index: -3;
      }
      .el-button {
        margin-top: 10px;
        float: right;
      }
    }
    // 评论模块
    .comment-list-wrap {
      border-top: 1px solid #eee;
      // 用户评论内容与头像
      .user-comment-wrap {
        border-bottom: 1px solid #eee;
        padding: 10px 0 40px;
        display: flex;
        // 头像
        .userImage {
          flex: 1;
          display: flex;
          justify-content: center;
          .el-avatar {
            height: 50px;
            width: 50px;
          }
        }
        // 评论内容
        .userComment {
          flex: 9;
          // 名称
          .username {
            font-weight: 800;
            font-size: 15px;
            margin: 0 0 20px;
          }
          // 内容
          .usercomment {
            color: #686868;
            font-size: 14px;
            margin-bottom: 30px;
          }
          // 评论时间与点赞
          .user-time-wrap {
            color: #bbbbbb;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            padding: 0 30px 0 0;
            .comment-time {
            }
            .comment-Fabulous {
            }
          }
        }
      }
    }
  }
</style>