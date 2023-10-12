<script setup>
import { ref } from 'vue'
import ListItem from '@/components/ListItem.vue'
const activeIndex = ref("1");
const data = [
  {
    id:1,
    school:"北京大学",
    pic:"https://p1-q.mafengwo.net/s16/M00/08/86/CoUBUl9BLw-AEXQ4AAeuvWLUr0g17.jpeg?imageView2%2F2%2Fw%2F420%2Fh%2F300%2Fq%2F90",
    title:"北京大学6个必打卡景点，领略燕园之美",
    subtitle:"想要深度游览北京大学，可以东侧门进去西门出，由知名的“一塔湖图”景观开始。沿途的景点既有北方园林的宏伟，也有江南水域的秀气，还有亭台楼阁等古典建筑，风景十分怡人。下面将沿着这条路线盘点其中最受欢迎的6个景点，带大家领略燕园之美。",
    location:"北京",
    uploader:"白杨",
    watch:"192",
    like:"74",
  },
  {
    id:2,
    school:"清华大学",
    pic:"https://p1-q.mafengwo.net/s15/M00/BC/24/CoUBGV4fxkyALbXnABIvT6LxEDc575.jpg?imageView2%2F2%2Fw%2F420%2Fh%2F300%2Fq%2F90",
    title:"水木清华，未来之期——清华大学半日游",
    subtitle:"前两天带两个娃去了古代的最高学府——国子监，今天带他们去现在 中国 最高学府之一的清华大学。清华大学和 北京 大学都是可以免费参观的，但为了不影响莘莘学子们学习，只限于周末、节假日或寒暑假。微信关注参观清华、参观北大就可以预约了。",
    location:"北京",
    uploader:"Chalffy",
    watch:"827",
    like:"74",
  },
  {
    id:3,
    school:"哈工大",
    pic:"https://p1-q.mafengwo.net/s15/M00/BB/FA/CoUBGV24HOSASGDwAAk7C-ITKDc137.jpg?imageView2%2F2%2Fw%2F420%2Fh%2F300%2Fq%2F90",
    title:"探访名校—哈工大、哈工程",
    subtitle:"怀着崇敬的心情走进 哈尔滨 最为出名的两所大学： 哈尔滨 工业大学（简称哈工大）、 哈尔滨 工程大学（简称哈工程或哈军工）。\n" +
        "哈工大一直排名全国前十，名气如雷贯耳，从小就经常听父亲念叨这个学校，在我小时候的映像中，她比北大清华都还出名。然而其老校区的硬件建设却有点名不副实，或许略微的破旧更显学术氛围的浓郁吧，其他新建校区可能会好很多",
    location:"哈尔滨",
    uploader:"Drizzle细雨",
    watch:"1083",
    like:"95",
  },
  {
    id:4,
    school:"复旦大学",
    pic:"https://p1-q.mafengwo.net/s15/M00/80/E7/CoUBGV472tOAfxqZAAmMMr7mvpo053.jpg?imageView2%2F2%2Fw%2F420%2Fh%2F300%2Fq%2F90",
    title:"国内最美大学游系列之三~复旦大学，上海交通大学，浙江大学",
    subtitle:"前言江浙沪是古时人文荟萃之地，也是近代文化教育发展繁盛之地，美丽的校园实在太多。我将 江苏 南京 和 苏州 的大学划分到一个系列，本篇介绍的是江浙沪中的浙沪校园。复旦大学一提到上海大学，大家脑海中蹦出的第一个学校应该就是复旦大学了，其次是同济大学。无奈同济大学校园和他的专业一样都是钢铁直男，实在没什么好说的。",
    location:"哈尔滨",
    uploader:"日匀",
    watch:"386",
    like:"19"
  }
]
</script>

<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
  >
    <el-sub-menu index="1">
      <template #title>热门游记</template>
      <el-sub-menu index="1-1">
        <template #title>北京</template>
        <el-menu-item index="1-1-1">清华大学</el-menu-item>
        <el-menu-item index="1-1-2">北京大学</el-menu-item>
        <el-menu-item index="1-1-3">中国人民大学</el-menu-item>
        <el-menu-item index="1-1-4">北京航空航天大学</el-menu-item>
        <el-menu-item index="1-1-5">北京邮电大学</el-menu-item>
        <el-menu-item index="1-1-6">北京师范大学</el-menu-item>
        <el-menu-item index="1-1-7">北京理工大学</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="1-2">
        <template #title>上海</template>
        <el-menu-item index="1-2-1">复旦大学</el-menu-item>
        <el-menu-item index="1-2-2">上海交通大学</el-menu-item>
        <el-menu-item index="1-2-3">同济大学</el-menu-item>
        <el-menu-item index="1-2-4">华东师范大学</el-menu-item>
        <el-menu-item index="1-2-5">上海财经大学</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="1-3">
        <template #title>广东</template>
        <el-menu-item index="1-3-1">哈尔滨工业大学（深圳）</el-menu-item>
        <el-menu-item index="1-3-2">中山大学</el-menu-item>
        <el-menu-item index="1-3-3">华南理工大学</el-menu-item>
        <el-menu-item index="1-3-4">南方科技大学</el-menu-item>
        <el-menu-item index="1-3-5">香港中文大学（深圳）</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">最新发表</el-menu-item>
    <a href="#" class="btn-add"><IEpEditPen style="vertical-align: -2px;"/>&nbsp;&nbsp;写游记</a>
  </el-menu>
  <div class="content">
    <ul>
      <li v-for="item in data" :key="item.id">
        <ListItem :item="item"></ListItem>
      </li>
    </ul>
  </div>
  <div class="pages">
    <el-pagination background layout="prev, pager, next" :total="1000" />
  </div>


</template>

<style lang="scss" scoped>
.btn-add {
  margin-left: 600px;
  margin-top: 10px;
  height: 36px;
  width: 140px;
  line-height: 36px;
  color:#fff;
  background-color: $writeColor1;
  text-align: center;
  font-size: 14px;
  vertical-align: middle;
  border-radius: 4px;
}
a:hover {
  color: #fff; /* 悬停时文本颜色（白色） */
  background-color: $writeColor2;
  /* 可选：添加其他悬停效果，如背景颜色或文本阴影等 */
}
.pages{
  display: flex;
  justify-content: center;
}

</style>