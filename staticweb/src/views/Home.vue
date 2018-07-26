<template>
  <div class="main">
    <webheader></webheader>
    <webheadernav></webheadernav>
    <banner></banner>
    <products></products>
    <copyright></copyright>
  </div>
</template>

<script>

export default {
  name: "home",
    components:{
      webheader:()=>import('@/components/header.vue'),
      webheadernav:()=>import('@/components/header-nav.vue'),
      products:()=>import('@/components/products.vue'),
      copyright:()=>import('@/components/copyright.vue'),
      banner:()=>import('@/components/banner.vue'),
    }

};
</script>
<style lang="less">
  .main{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .web-container{
    width: 100%;
  }
  .web-container-center{
    width: 1024px;
    margin: 0 auto;
  }
  div{
    box-sizing: border-box;
  }
  ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
</style>
