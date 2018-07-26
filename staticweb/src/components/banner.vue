<template>
    <div class='web-container web-banner'>
        <!--<div class="web-container-center">-->
            <div class="web-banner-main">
                <!--<el-carousel height="500px" type="card"  class="web-banner-main-carousel">-->
                <el-carousel height="500px"   class="web-banner-main-carousel">
                    <el-carousel-item v-for="(item,index) in bannerList" :key="index">
                        <img class="web-banner-main-carousel-img" :src="item.src" >
                    </el-carousel-item>
                </el-carousel>
            </div>
        <!--</div>-->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                bannerList:[
                    {src:require("@/assets/banner.jpg")},
                    {src:require("@/assets/banner.jpg")},
                    {src:require("@/assets/banner.jpg")},
                    {src:require("@/assets/banner.jpg")},
                    {src:require("@/assets/banner.jpg")},

                ]
            }
        }
    }
</script>
<style lang="less">
    .web-banner{
        background-color: #1f1f1f;
    }
    .web-banner-main{
    }
    .web-banner-main-carousel{
        .el-carousel__item{
        }
    }
    .web-banner-main-carousel-img{
        width: 100%;
        height: 100%;
    }
    
</style>