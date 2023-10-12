<script setup>
import {ref} from 'vue'

const imgList = ref([
  {
    name: "东南大学",
    eName: "Southeast University",
    commentNum: 189,
    mentionNum: 19,
  },
  {
    name: "中国海洋大学",
    eName: "Ocean University of China",
    commentNum: 289,
    mentionNum: 27,
  },
  {
    name: "厦门大学",
    eName: "Xiamen University",
    commentNum: 361,
    mentionNum: 48,
  },
  {
    name: "武汉大学",
    eName: "Wuhan University",
    commentNum: 344,
    mentionNum: 41,
  },
  {
    name: "湖南大学",
    eName: "Hunan University",
    commentNum: 249,
    mentionNum: 23,
  }
])

</script>

<template>
  <el-carousel height="500px">
    <el-carousel-item v-for="(item, index) in imgList" :key="index">
      <a :style="{ backgroundImage: `url('src/assets/images/${item.name}.png')` }">
        <p class="title">{{ item.name }}</p>
        <p class="subtitle">{{ item.eName }}</p>
        <p class="append">
          <b>{{ item.commentNum }}</b>评论
          <b>{{ item.mentionNum }}</b>游记提及
        </p>
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<style lang="less" scoped>
.el-carousel__item a {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover; /* 背景图片填充整个容器 */
  background-repeat: no-repeat; /* 禁止背景图片重复 */
  background-position: center; /* 背景图片居中 */
  text-align: center; /* 文本水平居中 */
  text-shadow: 0px 2px 8px #000;
  cursor: pointer;
  //vertical-align: middle; /* 垂直居中对齐 */
  .title {
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    margin: 0;
    padding-top: 100px;
  }

  .subtitle {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin: 0;
    padding-top: 10px;
  }

  .append {
    position: absolute;
    right: 20px;
    bottom: 10px;
    font-size: 14px;
    color: #fff;
    text-shadow: 0px 2px 8px #000;
    b {
      padding:0 5px 1px;
      font-size: 24px;
    }
  }
}


.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
