<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
</script>

<template>
  <div class="container">
    <Header></Header>
    <!--二级路由出口-->
    <RouterView></RouterView>
  </div>
  <Footer></Footer>

</template>

<style>
.container{
  width: 960px;
  margin: 0 auto;
}
</style>