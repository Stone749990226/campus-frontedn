<script setup>
const props = defineProps(['item'])
</script>

<template>
  <div class="item">
    <img :src="item.pic">
    <div class="item-right">
      <a href="#" class="title" >
        {{ item.title }}
      </a>
      <div class="subtitle">
        {{ item.subtitle }}
      </div>
      <div class="item-bottom">
        <div class="location">
          <IEpLocation style="vertical-align: -2px;"/>
          {{ item.location }}
        </div>
        <div class="uploader">
          <IEpUser style="vertical-align: -2px;"/>
          {{ item.uploader }}
        </div>
        <div class="watch">
          <IEpView style="vertical-align: -2px;"/>
          {{ item.watch }}
        </div>
        <div class="like">
          <IEpStar style="vertical-align: -2px;"/>
          {{ item.like }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item {
  display: flex;
  justify-content:space-between;
  padding:20px;
  img {
    width: 250px;
    height: 170px;
    cursor: pointer;
  }
  .item-right {
    width: 650px;
    position: relative;
    a.title {
      font-size:22px;
      line-height:30px;
    }
    a.title:hover {
      color: $xtxColor; /* 悬停时文本颜色（绿色） */
    }
    .subtitle {
      line-height: 20px;
      font-size: 16px;
      margin-top:10px;
      color: #666;
    }
    .item-bottom {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      position:absolute;
      left:300px;
      bottom:2px;
      .uploader {
        position:absolute;
        left:100px;
        width: 90px;
      }
      .watch {
         position:absolute;
         left:200px;
         width: 90px;
      }
      .like {
        position:absolute;
        left:300px;
        width: 50px;
      }
    }
  }
}

</style>