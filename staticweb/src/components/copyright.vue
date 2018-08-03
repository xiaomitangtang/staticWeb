<template>
    <div class='web-container web-copyright'>
        <div class="web-container-center" style="height: 100%;">
            <div class="web-copyright-main">
                <div style="position: absolute;right: 0;bottom: 30px;">本服务由同方赛威讯 基础研发中心 提供</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>
<style lang="less">
    .web-copyright{
        height: 150px;
        background-color: rgba(0,0,0,.8);
        color: #fff;
        .web-copyright-main{
            position: relative;
            height: 100%;
            width: 100%;
            padding: 20px 0;
        }
    }
</style>