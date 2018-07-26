<template>
    <div class='web-container web-header'>
        <div class="web-container-center">
            <div class="header-l">
                <img class="header-l-logo-img" src="../assets/logo.png" alt="">
            </div>
            <div class="header-c">
                <div>资源管理解决方案</div>
            </div>
            <div class="header-r">
                <div>联系人：123123</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'web-header',
        data() {
            return {}
        }
    }
</script>
<style lang="less">
    .web-header{
        .web-container-center{
            height:160px;
        }
        .header-l{
            float: left;
            width: 20%;
            height: 100%;
        }
        .header-l-logo-img{
            display: block;
            height: 50%;
            margin: 25px 0;
        }
        .header-c{
            float: left;
            width:50%;
            height: 100%;
            padding-top: 30px;
        }
        .header-r{
            float: left;
            width: 30%;
            height: 100%;
            padding-top: 30px;
        }
    }
</style>