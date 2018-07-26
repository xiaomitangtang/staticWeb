<template>
    <div class='web-container products'>
        <div class="web-container-center">
            <proItem v-for="(item,index) in productList" :data="item" :key="index"></proItem>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                productList:[
                    {img:'../assets/logo.png',info:"这是一个产品"},
                    {img:'../assets/logo.png',info:"这是一个产品"},
                    {img:'../assets/logo.png',info:"这是一个产品"},
                    {img:'../assets/logo.png',info:"这是一个产品"},
                    {img:'../assets/logo.png',info:"这是一个产品"},
                    {img:'../assets/logo.png',info:"这是一个产品"},
                    {img:'../assets/logo.png',info:"这是一个产品"},
                    {img:'../assets/logo.png',info:"这是一个产品"},
                    {img:'../assets/logo.png',info:"这是一个产品"},
                    {img:'../assets/logo.png',info:"这是一个产品"},
                    {img:'../assets/logo.png',info:"这是一个产品"},
                    {img:'../assets/logo.png',info:"这是一个产品"}
                ]
            }
        },
        components:{
            proItem:()=>import("./product-item.vue")
        }
    }
</script>
<style lang="less">
    .products{
        padding: 30px 0;
        .web-container-center{
            overflow: hidden;
        }
    }
</style>