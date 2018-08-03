<template>
    <div class='web-container products'>
        <div class="web-container-center">
            <proItem v-for="(item,index) in productList" :data="item" :key="index" @click.native="proClick(item)"></proItem>
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
        methods:{
            proClick(pro){
               if(pro.url){
                  location.href=pro.url
               }else{
                   this.$alert(pro.showInfo,pro.infoTitle,{confirmButtonText:'确定',dangerouslyUseHTMLString:true});
               }
            }
        },
        components:{
            proItem:()=>import("./product-item.vue")
        },
        mounted(){
          let  appname=window.appname
          this.$http.get("/"+appname+"/proList.json").then(res=>{
              this.productList=res.data.productList.map(item=>{
                  if(!item.img.startsWith('http://')&&!item.img.startsWith('https://')){
                      item.img="/"+appname+item.img
                  }
                  return item;
              })
          },err=>{
              console.log(err);
              this.$http.get("/proList.json").then(res=>{
                  this.productList=res.data.productList
              })
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