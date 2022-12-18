<template>
  <div class="time">
    <div class="text-content">
      <h2 class="text-center">个人经历</h2>
      <div class="time-line">
        <div v-for="item in testList" class="time-line-div" :key="item.key">
          <p>{{item.time}}</p>
          <p ref="circular"></p>
          <p>{{item.text}}</p>
        </div>
        <div class="img-dotted" ref="dotted"></div>
      </div>
      <div style="margin-top:20px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testList: [
        { key: "1", time: "2018.10-2019.07", text: "欣鸟网络科技有限公司" },
        {
          key: "2",
          time: "2019.09.- 至今",
          text: "佛山市大本钟文化传播有限公司"
        }
      ]
    };
  },
  mounted() {
    this.$refs.dotted.style.left =
      this.$refs.circular[0].offsetLeft - 12 + "px";
  }
};
</script>

<style>
.text-center {
  text-align: center;
}
.time h2 {
  color: #ff6600;
  margin: 20px auto 30px auto;
}
.time-line {
  position: relative;
  width: 400px;
  margin: 0 auto;
}
.time-line-div {
  position: relative;
  min-height: 85px;
}
.time-line-div > p:nth-child(1) {
  position: absolute;
  left: 10%;
  top: 50%;
}
.time-line-div > p:nth-child(2) {
  position: absolute;
  left: 50%;
  width: 15px;
  height: 15px;
  top: 50%;
  background: #5cb85c;
  border-radius: 50%;
  z-index: 10;
  transform: translateX(-50%);
}
.time-line-div > p:nth-child(3) {
  position: absolute;
  left: 55%;
  padding: 10px;
  background: #24292e;
  font-size: 0.8rem;
  color: #fff;
  border-radius: 4px;
  top: 40%;
}
.img-dotted::after {
	content:'';
  position: absolute;
  height: 50%;
  border-left: 1px solid #000;
  top: 40%;
  left: 50%;
  z-index: 1;
}
</style>