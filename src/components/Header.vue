<script setup>
import { ref } from 'vue'

const activeIndex = ref('home')
import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
</script>

<template>
  <header class='app-header'>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :router="true"
    >

      <div class="head-logo">
        LOGO
      </div>

      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="map">地图</el-menu-item>
      <el-menu-item index="campusList">大学列表</el-menu-item>
      <el-menu-item index="travelNotes">游记</el-menu-item>
      <div class="blank" ></div>
      <div class="search-input">
        <el-input
            v-model="input1"
            class="w-50 m-2"
            size="default"
            placeholder="搜索"
            :suffix-icon="Search"
        />
      </div>
      <div class="login">
        <el-link type="primary">登录</el-link>
        <el-divider direction="vertical" />
      </div>
      <div class="register">
        <el-link type="primary">注册</el-link>
      </div>

    </el-menu>
  </header>
</template>


<style scoped>
.head-logo{
  display: flex;
  padding-left: 20px;
  padding-right: 10px;
  align-items: center;/*垂直居中*/
}
.blank {
  margin-left: 300px;
}
.search-input {
  margin-top: 13px;
  width: 180px;
}
.login{
  display: flex;
  padding-left: 15px;
  align-items: center;/*垂直居中*/
}
.register{
  display: flex;
  padding-right: 10px;
  align-items: center;/*垂直居中*/
}

/*.mfw-logo{*/
/*  display: block;*/
/*  background: url(/src/assets/images/header-small-sprites3.png) no-repeat 0 -25px;*/
/*}*/

</style>