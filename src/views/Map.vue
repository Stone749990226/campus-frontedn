<script setup>
import AMapLoader from '@amap/amap-jsapi-loader';
import {onUnmounted, onMounted, ref} from 'vue'
let map = null;
let contents = [];
let infoText = ref("请选择你想参观的大学")
let inputCardShow = ref(false)
const locationList = {
  "北京大学":[116.310547, 39.992828],
  "清华大学":[116.33337, 40.0096],
  "复旦大学":[121.503971,31.29686],
  "哈尔滨工业大学":[126.632492,45.747639],
  "哈尔滨工业大学（深圳）":[113.970387,22.586699],
}
const data = [
  {
    id:1,
    school:"北京大学",
    pic:'https://p1-q.mafengwo.net/s16/M00/08/86/CoUBUl9BLw-AEXQ4AAeuvWLUr0g17.jpeg?imageView2%2F2%2Fw%2F420%2Fh%2F300%2Fq%2F90',
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
    pic:'https://p1-q.mafengwo.net/s15/M00/BC/24/CoUBGV4fxkyALbXnABIvT6LxEDc575.jpg?imageView2%2F2%2Fw%2F420%2Fh%2F300%2Fq%2F90',
    title:"水木清华，未来之期——清华大学半日游",
    subtitle:"前两天带两个娃去了古代的最高学府——国子监，今天带他们去现在 中国 最高学府之一的清华大学。清华大学和 北京 大学都是可以免费参观的，但为了不影响莘莘学子们学习，只限于周末、节假日或寒暑假。微信关注参观清华、参观北大就可以预约了。",
    location:"北京",
    uploader:"Chalffy",
    watch:"827",
    like:"74",
  },
  {
    id:3,
    school:"哈尔滨工业大学",
    pic:'https://p1-q.mafengwo.net/s15/M00/BB/FA/CoUBGV24HOSASGDwAAk7C-ITKDc137.jpg?imageView2%2F2%2Fw%2F420%2Fh%2F300%2Fq%2F90',
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
    pic:'https://p1-q.mafengwo.net/s15/M00/80/E7/CoUBGV472tOAfxqZAAmMMr7mvpo053.jpg?imageView2%2F2%2Fw%2F420%2Fh%2F300%2Fq%2F90',
    title:"国内最美大学游系列之三~复旦大学，上海交通大学，浙江大学",
    subtitle:"前言江浙沪是古时人文荟萃之地，也是近代文化教育发展繁盛之地，美丽的校园实在太多。我将 江苏 南京 和 苏州 的大学划分到一个系列，本篇介绍的是江浙沪中的浙沪校园。复旦大学一提到上海大学，大家脑海中蹦出的第一个学校应该就是复旦大学了，其次是同济大学。无奈同济大学校园和他的专业一样都是钢铁直男，实在没什么好说的。",
    location:"哈尔滨",
    uploader:"日匀",
    watch:"386",
    like:"19"
  },
  {
    id:5,
    school: "哈尔滨工业大学（深圳）",
    pic:'https://pic1.zhimg.com/50/v2-a004f3f37b1f584911319171deab5494_hd.jpg?source=1940ef5c',
    title:"哈工深开学plog｜每天都在探秘深圳大学城",
    subtitle:"接下来将由ENFP快乐小狗为您介绍每天都在探秘校园里的隐秘角落发现了好多好棒的地方！！在HITSZ那栋最高的楼19楼，拥有绝美夜景的露台，很适合好朋友一起！如果喝点小酒或许会更妙（bushi",
    location:"深圳",
    uploader:"小红薯",
    watch:"999",
    like:"88"
  }
]
const travelRoutes = [
  {
    id: 1,
    schoolId: 1,//1为哈工大深圳
    name: "游览路线1",
    waypoints:[
        [113.968268,22.586219],//西南门
        [113.971663,22.585467],//四食堂
        // [113.972663,22.589743],//北大汇丰商学院
        // [113.972539,22.591474],//大学城图书馆
        // [113.968874,22.591402],//清华伯克利
        // [113.967868,22.591112],//清华大学体育场
        // [113.96782,22.592942],//清华荷园一食堂
        // [113.971592,22.592255],//清华海洋楼
        [113.979454,22.592114],//北大燕园1食堂
    ],
  }
]
// console.log(data[1]);
for(let i = 0; i <data.length;i++) {
  contents.push(`
   <div style="opacity: 0; /* 初始时透明度为0 */
            transition: opacity 1s ease-in-out;animation: fadeIn 1.2s ${i/2+0.5}s forwards;">
    <div style="width: 180px; height: 60px; background-color: #ccc; display: flex;border-radius: 10px;transform: translate(-80px,-70px);">
        <div style="width: 50%; background-image: url(${data[i].pic}); background-size: cover; border-bottom-left-radius: 10px; border-top-left-radius: 10px;"></div>
        <div style="width: 50%; display: flex; flex-direction: column; justify-content: space-between; padding: 5px;background: #fff; border-top-right-radius: 10px;border-bottom-right-radius: 10px;">
            <div style="text-align: center;font-size: 12px;font-family: Pingfang SC; font-weight: bold;font-size: 13px;">${data[i].school}</div>
            <div style="text-align: center; position: relative"><img src="data:image/png;base64,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" width="10px" style="position: absolute; left:15px; top: 4px;"/>${data[i].watch}</div>
        </div>
    </div>
    <!--底部三角形-->
    <div style="border-top: 10px solid white;
          border-bottom: 10px solid transparent;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          position: absolute;bottom: 51px; left:-7px">
    </div>
    <style>
    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
</style>
   </div>

    `)
}

onMounted(() => {
  AMapLoader.load({
    key: "7ad8e8a4ce22a418db938bf71e7ede1e", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.Marker","AMap.Walking","AMap.LngLat"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
  .then((AMap) => {
    map = new AMap.Map("container", {
      // 设置地图容器id
      viewMode: "2D", // 是否为3D地图模式
      zoom: 4.5, // 初始化地图级别
      center: [116.397428, 39.90923], // 初始化地图中心点位置
    });
    let schools = []
    for(let i = 0; i < data.length; i++){
      let school = new AMap.Marker({
        position: locationList[data[i].school],
        content: contents[i],
      });
      school.on("click",function (e){
        map.setZoomAndCenter(17,locationList[data[i].school]);
        map.remove(schools);
        infoText.value = "您正在浏览的是:" + data[i].school;
        inputCardShow.value = true;
      })
      schools.push(school);
    }
    map.add(schools);
  })
  .catch((e) => {
    console.log(e);
  });
});

onUnmounted(() => {
  map?.destroy();
});

let startWalkingSearch = function(){
  var walkOption = {
    map: map,
    hideMarkers: true,
    isOutline:false,
  };

  let results = [];
  let walkings = [];
  for(let i = 0; i < travelRoutes[0].waypoints.length-1; i++) {
    let walking = new AMap.Walking(walkOption);
    walkings.push(walking);
    walking.search(travelRoutes[0].waypoints[i], travelRoutes[0].waypoints[i+1], function (status, result) {
      // result即是对应的不行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_RidingResult
      if (status === "complete") {
        console.log(i+":步行路线数据查询成功");
        results.push(result.routes[0]);
      } else {
        console.log("步行路线数据查询失败" + result);
      }
    });
  }
  // walking.clear();
  console.log("--------------------");
  console.log(results);
  console.log("--------------------");

}
</script>

<template>
  <div class="map">
    <div id="container">
    </div>
    <div class="info">{{ infoText }}</div>
    <div class="input-card" v-show="inputCardShow">
      <h4>推荐路线</h4>
      <div class="input-item" >
        <button class="btn" @click="startWalkingSearch()">游览路线1</button>
        <button class="btn" @click="startWalkingSearch()">游览路线2</button>
        <button class="btn" @click="test()">游览路线3</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
#container{
  position:relative;
  padding:0px;
  margin: 0px;
  width: 100%;
  height: 600px;
}
.map {
  position:relative;
  .info {
    position:absolute;
    right: 10px;
    top:5px;
    padding: 7px 7px;
    border-radius: .25rem;
    background-color: white;
    border-width: 0;
    box-shadow: 0 2px 6px 0 rgba(114, 124, 245, .5);
    font-size:12px;
    text-align:center;
  }
  .input-card {
    position:absolute;
    right: 10px;
    bottom: 10px;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: .25rem;
    width: 80px;
    border-width: 0;
    box-shadow: 0 2px 6px 0 rgba(114, 124, 245, .5);
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 5px 5px;
    text-align: center;
    font-size: 14px;
    button {
      display: inline-block;
      margin-top: 5px;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
      background-color: transparent;
      background-image: none;
      color: #25A5F7;
      border: 1px solid #25A5F7;
      padding: 1px 5px;
      border-radius: 1rem;
      cursor: pointer;
    }
    button:hover {
      color: white;
      background-color: #25A5F7;
    }
  }
}
</style>