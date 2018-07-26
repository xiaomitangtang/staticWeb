<template>
    <div class='product-item'>
        <div class="product-item-img-box">
            <img class="product-item-img" src="../assets/logo.png" alt="">
        </div>
        <div class="product-item-info">
            产品介绍
        </div>
        <div class="product-item-mask"></div>
    </div>
</template>
<script>
    export default {
        props:['data'],
        data() {
            return {}
        },

    }
</script>
<style lang="less">
    .product-item{
        position: relative;
        float: left;
        margin-top: 20px;
        width: 25%;
        box-shadow: 0px 0px 2px rgba(0,0,0,.1);
        .product-item-mask{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.06);
            display: none;
        }
    }
    .product-item-img-box{
        position: relative;
        height:280px;
        overflow: hidden;
        img{
            width: 80%;
            position: absolute;
            left: 50%;
            top: 0;
            transition: all .6s;
            transform: translate(-50%);
        }
    }
    .product-item-info{
        text-align: center;
        height: 70px;
        line-height:70px;
        background-color: #fff;
        box-shadow: 0px -2px 2px rgba(0,0,0,.1) ;
    }
    .product-item:hover{
        .product-item-img{
            width: 100%;
        }
        .product-item-mask{
            display: block;
        }
    }
</style>