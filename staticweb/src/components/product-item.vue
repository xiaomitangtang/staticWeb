<template>
    <div class='product-item'>
        <div class="product-item-img-box">
            <img class="product-item-img" :src="data.img" alt="">
        </div>
        <div class="product-item-info">
           {{data.info}}
        </div>
        <a class="product-item-mask" :href="data.url"></a>
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
        width: 33.33%;
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
        height:380px;
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
        height: 100px;
        line-height:100px;
        background-color: #fff;
        font-size: 24px;
        font-weight: 700;
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