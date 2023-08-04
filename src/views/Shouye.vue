<template>
    <div class="all">
        <!-- 左边的 -->
        <div class="menu">
            <div class="menu-a">
                <i class="iconfont icon-shuben"></i>
                <span>教育系统管理</span>
            </div>
            <el-row class="tac">
                <el-col :span="4">
                    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
                        default-active="1" text-color="#fff" @open="handleOpen" @close="handleClose" >
                        <RouterLink to="shou">
                            <el-menu-item  index="1">
                                <el-icon><i class="iconfont icon-shouye"></i></el-icon>
                                <span>首页</span>
                            </el-menu-item>
                        </RouterLink>
                        <RouterLink to="course">
                            <el-menu-item index="2">
                                <el-icon><i class="iconfont icon-xinrenkecheng"></i></el-icon>
                                <span>课程管理</span>
                            </el-menu-item>
                        </RouterLink>
                        <el-sub-menu index="3">
                            <template #title>
                                <el-icon>
                                    <i class="iconfont icon-quanbudingdan"></i>
                                </el-icon>
                                <span>订单管理</span>
                            </template>
                            <RouterLink to="Order">
                                <el-menu-item index="1-1">订单</el-menu-item>
                            </RouterLink>
                            <RouterLink to="refund">
                                <el-menu-item index="1-2">退款</el-menu-item>
                            </RouterLink>
                        </el-sub-menu>
                        <el-sub-menu index="4">
                            <template #title>
                                <el-icon>
                                    <i class="iconfont icon-yonghuguanli"></i>
                                </el-icon>
                                <span>用户管理</span>
                            </template>
                            <RouterLink to="student">
                                <el-menu-item index="2-1">学员</el-menu-item>
                            </RouterLink>
                            <RouterLink to="lecturer">
                                <el-menu-item index="2-2">讲师</el-menu-item>
                            </RouterLink>
                        </el-sub-menu>
                        <el-sub-menu index="5">
                            <template #title>
                                <el-icon>
                                    <i class="iconfont icon-shebeiguanli"></i>
                                </el-icon>
                                <span>资讯管理</span>
                            </template>
                            <RouterLink to="slideshow">
                                <el-menu-item index="3-1">轮播图</el-menu-item>
                            </RouterLink>
                            <RouterLink to="article">
                                <el-menu-item index="3-2">文章</el-menu-item>
                            </RouterLink>
                        </el-sub-menu>
                        <el-sub-menu index="6">
                            <template #title>
                                <el-icon>
                                    <i class="iconfont icon-huiyuanlibao"></i>
                                </el-icon>
                                <span>促销管理</span>
                            </template>
                            <RouterLink to="seckill">
                                <el-menu-item index="4-1">秒杀活动</el-menu-item>
                            </RouterLink>
                            <RouterLink to="coupon">
                                <el-menu-item index="4-2">优惠券</el-menu-item>
                            </RouterLink>
                        </el-sub-menu>
                        <!-- <RouterLink to="system"> -->
                            <el-menu-item index="7">
                                <el-icon><i class="iconfont icon-xitong"></i></el-icon>
                                <span>系统设置</span>
                            </el-menu-item>
                        <!-- </RouterLink> -->

                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <!-- 右边的 -->
        <div class="right">
            <div>
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import {useRouter} from "vue-router"
const router=useRouter()
onMounted(()=>{
    router.push('shou')
})

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped lang="less">
.all {
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 99vh;
    overflow: hidden;

    a {
        text-decoration: none;
    }

    // 左边的
    .menu::-webkit-scrollbar {
        display: none;
    }

    .menu {
        overflow: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        // background-color: rgba(32, 39, 65, 1);
        background-color: #545c64;

        color: #fff;

        .menu-a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 208px;
            color: #fff;
            height: 60px;

            i {
                font-size: 27px;
            }

            span {
                font-size: 23px;
            }
        }

        li {
            // background-color: aqua;
            width: 208px;
        }

        .el-menu-item {
            background-color: #545c64;
            text-align: center;
            // width: 200px;
        }

        .el-col-4 {
            max-width: 79.666667%;
            background: transparent;
        }
    }

    // 右边的
    .right {
        background-color: rgba(245, 249, 250, 1);
        display: flex;
        flex-direction: column;
        width: 1230px;



    }
}
</style>