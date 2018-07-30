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
                   /* {img:require('../assets/gogs.png'),info:"Gogs代码仓库",url:"http://192.168.1.253:10080"},
                    // {img:"/dist/static/img/chandao.png",info:"Gogs代码仓库",url:"http://192.168.1.253:10080"},
                    {img:"/img/chandao.png",info:"Gogs代码仓库",url:"http://192.168.1.253:10080"},
                    {img:require('../assets/chandao.png'),info:"禅道项目管理",url:"http://192.168.1.253"}*/
                ]
            }
        },
        components:{
            proItem:()=>import("./product-item.vue")
        },
        mounted(){
          this.$http.get("/dist/proList.json").then(res=>{
              this.productList=res.data.productList
          })
        },
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