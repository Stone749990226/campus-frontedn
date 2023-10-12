<template>
  <div class="top">
    热门目的地
  </div>
  <div class="list">
    <div class="item">
      <div>北京</div>
      <div><a href="#">清华大学</a> <a href="#">北京大学</a> <a href="#">中国人民大学</a> <a href="#">北京航空航天大学</a></div>
    </div>
    <div class="item">
      <div>上海</div>
      <div><a href="#">复旦大学</a> <a href="#">上海交通大学</a> <a href="#">同济大学</a> <a href="#">华东师范大学</a></div>
    </div>
    <div class="item">
      <div>广东</div>
      <div><a href="#">中山大学</a> <a href="#">华南理工大学</a> <a href="#">深圳大学</a><a href="#">哈尔滨工业大学（深圳）</a>
      </div>
    </div>
    <div class="item">
      <div>湖北</div>
      <div><a href="#">武汉大学</a> <a href="#">华中科技大学</a> <a href="#">武汉理工大学</a>
      </div>
    </div>
    <div class="item">
      <div>湖南</div>
      <div><a href="#">湖南大学</a> <a href="#">中南大学</a>
      </div>
    </div>
    <div class="item">
      <div>天津</div>
      <div><a href="#">天津大学</a> <a href="#">南开大学</a>
      </div>
    </div>
    <div class="item">
      <div>河北</div>
      <div><a href="#">华北电力大学</a>
      </div>
    </div>
    <div class="item">
      <div>河南</div>
      <div><a href="#">郑州大学</a>
      </div>
    </div>
    <div class="item">
      <div>四川</div>
      <div><a href="#">四川大学</a><a href="#">电子科技大学</a>
      </div>
    </div>
    <div class="item">
      <div>浙江</div>
      <div><a href="#">浙江大学</a> <a href="#">杭州电子科技大学</a>
      </div>
    </div>
    <div class="item">
      <div>福建</div>
      <div><a href="#">厦门大学</a>
      </div>
    </div>
    <div class="item">
      <div>重庆</div>
      <div><a href="#">重庆大学</a>
      </div>
    </div>
    <div class="item">
      <div>安徽</div>
      <div><a href="#">中国科学技术大学</a>
      </div>
    </div>
    <div class="item">
      <div>江苏</div>
      <div><a href="#">南京大学</a> <a href="#">东南大学</a>
      </div>
    </div>
    <div class="item">
      <div>吉林</div>
      <div><a href="#">吉林大学</a>
      </div>
    </div>
    <div class="item">
      <div>辽宁</div>
      <div><a href="#">大连理工大学</a><a href="#">东北大学</a>
      </div>
    </div>
    <div class="item">
      <div>山东</div>
      <div><a href="#">山东大学</a><a href="#">中国海洋大学</a>
      </div>
    </div>
    <div class="item">
      <div>陕西</div>
      <div><a href="#">西安交通大学</a><a href="#">西北工业大学</a><a href="#">西安电子科技大学</a>
      </div>
    </div>
    <div class="item">
      <div>山西</div>
      <div><a href="#">山西大学</a>
      </div>
    </div>
    <div class="item">
      <div>甘肃</div>
      <div><a href="#">兰州大学</a>
      </div>
    </div>
    <div class="item">
      <div>江西</div>
      <div><a href="#">南昌大学</a>
      </div>
    </div>
    <div class="item">
      <div>海南</div>
      <div><a href="#">海南大学</a>
      </div>
    </div>
    <div class="item">
      <div>黑龙江</div>
      <div><a href="#">哈尔滨工业大学</a>
      </div>
    </div>
    <div class="item">
      <div>内蒙古</div>
      <div><a href="#">内蒙古大学</a>
      </div>
    </div>
  </div>
  <!--    <ul>-->
  <!--      <li>-->
  <!--        <div>-->
  <!--          <div class="left">北京</div>-->
  <!--          <ul>-->
  <!--            <li>-->
  <!--              清华大学-->
  <!--            </li>-->
  <!--            <li>-->
  <!--              北京大学-->
  <!--            </li>-->
  <!--            <li>-->
  <!--              中国人民大学-->
  <!--            </li>-->
  <!--          </ul>-->
  <!--        </div>-->
  <!--      </li>-->
  <!--      <li>上海-->
  <!--        <ul>-->
  <!--          <li>-->
  <!--            复旦大学-->
  <!--          </li>-->
  <!--          <li>-->
  <!--            上海交通大学-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--      </li>-->
  <!--      <li>天津-->
  <!--        <ul>-->
  <!--          <li>-->
  <!--            天津大学-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--      </li>-->
  <!--      <li>深圳</li>-->
  <!--    </ul>-->
</template>
<style scoped lang="scss">
.top {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: normal;
  color: #333;
  line-height: 26px;
}

.list {
  //display: flex;
  font-size: 18px;
  margin-left: 200px;

  .item {
    display: flex;
    margin-bottom: 10px;

    a {
      margin-right: 15px;
      color: #666;
    }

    a:hover {
      color: $xtxColor;
      text-decoration: underline;
    }
  }

  .item div:first-child {
    margin-right: 30px;

  }
}

//.left{
//  float:left;
//}
</style>