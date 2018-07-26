<template>
    <div class='web-container web-header-nav'>
        <div class="web-container-center">
            <ul class="nav-menu">
                <li class="nav-menu-item" v-for="(item,index) in navMenu" :key="item.title+index"
                     @mouseenter="item.active=true"
                    @mouseleave="item.active=false"
                >
                    <div class="nav-menu-item-title">{{item.title}}</div>
                    <ul class="nav-menu-sub" :class="{'inactive':!item.active}">
                        <li v-for="(submenu,subindex) in item.submenu" :key="item.title+submenu.title+''+subindex">{{submenu.title}}</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header-nav",
        data() {
            return {
                navMenu: [
                    {
                        title: '首页', uri: '/',active:false,
                        submenu: [{title: '子菜单', uri: '/'}, {title: '子菜单', uri: '/'}, {title: '子菜单', uri: '/'}, {title: '子菜单', uri: '/'}
                        ]
                    },
                    {
                        title: '页面2', uri: '/',active:false,
                        submenu: [{title: '子菜单', uri: '/'}, {title: '子菜单', uri: '/'}, {title: '子菜单', uri: '/'}, {title: '子菜单', uri: '/'}
                        ]
                    },
                    {
                        title: '页面3', uri: '/',active:false,
                        submenu: [{title: '子菜单', uri: '/'}, {title: '子菜单', uri: '/'}, {title: '子菜单', uri: '/'}, {title: '子菜单', uri: '/'}
                        ]
                    },
                    {
                        title: '页面4', uri: '/',active:false,
                        submenu: [{title: '子菜单', uri: '/'}, {title: '子菜单', uri: '/'}, {title: '子菜单', uri: '/'}, {title: '子菜单', uri: '/'}
                        ]
                    },
                    {
                        title: '页面4', uri: '/',active:false,
                        submenu: [{title: '子菜单', uri: '/'}, {title: '子菜单', uri: '/'}, {title: '子菜单', uri: '/'}, {title: '子菜单', uri: '/'}
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="less">
    .web-header-nav {
        height: 50px;
        line-height: 50px;
        color: #fff;
        background-color: #424242;
        .nav-menu-item {
            float: left;
            cursor: pointer;
            position: relative;
            z-index: 3;
            width: 20%;
            background-color: #404040;
        }
        .nav-menu-item:hover{
            background-color: #6e6e6e;
        }
        .nav-menu-item-title{
            text-align: center;
        }
        .nav-menu-sub {
            position: absolute;
            width: 100%;
            text-align: center;
            &>li{
                height: 45px;
                background-color: #989898;
                transition: height .3s,opacity .4s;
                overflow: hidden;

            }
            &>li:hover{
                background-color: #373737;
            }
        }

        .inactive  li{
            height: 0;
            opacity: 0;
        }

    }
</style>