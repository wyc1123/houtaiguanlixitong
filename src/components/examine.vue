<template>
    <div class="right-a">
        <div class="right-s">
            <i class="iconfont icon-liebiaofenlei"></i>
            <span @click="go" style="color: rgba(153, 153, 153, 1);">订单/
                <span style="color:black;">订单详情</span></span>
        </div>
        <div class="right-t">
            <i class="iconfont icon-24gl-questionCircle"></i>
            <i class="iconfont icon-lingdang"></i>
            <div>
                <img src="../image/5.png" alt="">
            </div>
            <span>管理员:112300</span>
            <span>|</span>
            <i class="iconfont icon-tuichu"></i>
            <RouterLink to="/">
                <span>退出</span>
            </RouterLink>
        </div>
    </div>
    <div class="header">
        <div class="header-a">
            <div class="order-a">
                <span>订单状态：已完成</span>
            </div>
            <div class="order-b">
                <div class="order-c">
                    <div style="height: 50px;line-height: 50px;" class="zi">基础信息</div>
                    <div class="order-k">
                        <div class="left">
                            <div class="left-a">订单编号</div>
                            <div class="left-b">{{a.date}}</div>
                        </div>
                        <div class="right">
                            <div class="right-a">订单创建时间</div>
                            <div class="right-b">{{ri}}</div>
                        </div>
                    </div>
                    <div class="order-k">
                        <div class="left">
                            <div class="left-a">付款方式</div>
                            <div class="left-b">支付宝</div>
                        </div>
                        <div class="right">
                            <div class="right-a">订单金额</div>
                            <div class="right-b">{{a.price}}</div>
                        </div>
                    </div>
                    <div class="order-k">
                        <div class="left">
                            <div class="left-a">多余/长字段</div>
                            <!-- <div class="left-b">长字段信息内容样式</div> -->
                            <div class="left-b">{{a.state}}</div>
                        </div>
                    </div>
                </div>
                <div class="order-c">
                    <div style="height: 50px;line-height: 50px;" class="zi">用户信息</div>
                    <div class="order-k">
                        <div class="left">
                            <div class="left-a">用户ID</div>
                            <div class="left-b">1123445678</div>
                        </div>
                        <div class="right">
                            <div class="right-a">用户昵称</div>
                            <div class="right-b">{{a.name}}</div>
                        </div>
                    </div>
                    <div class="order-k">
                        <div class="left">
                            <div class="left-a">手机号</div>
                            <div class="left-b">{{a.address}}</div>
                        </div>
                        <div class="right">
                            <div class="right-a">订单数量</div>
                            <div class="right-b">1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
// 查看传过来的数据
let route=useRoute()
let a=route.query
console.log(a);
// 时间
let data=new Date()
console.log(data);
let c= data.getFullYear()//年
let d=data.getMonth()+1//月
let o=data.getDate()//日期
let ri=c+"-"+d+"-"+o
console.log(ri);
// 返回上一页
function go() {
    window.history.go(-1)
}
</script>

<style scoped lang="less">
//我们大盒子
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;

    .header-a {
        background: #fff;
        height: 700px;
        width: 1184px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .order-a {
            width: 1068px;
            height: 50px;
            background-color: rgba(240, 246, 246, 1);
            margin-top: 50px;
            display: flex;
            justify-content: center;
            align-items: center;

            span {
                color: rgba(43, 193, 123, 1);
                font-size: 18px;
                font-weight: 400;
            }
        }

        .order-b {
            // background-color: salmon;
            margin-top: 30px;
            width: 1064px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 430px;
            .order-c {
                width: 1064px;
                height: 180px;

                // background-color: rgb(17, 176, 208);
                

                .order-k {
                    display: flex;
                    // background-color: red;
                    border: 1px solid rgba(220, 235, 228, 1);
                    justify-content: space-between;

                    .left {
                        display: flex;
                        align-items: center;
                        // width: 500px;
                        // background-color: red;

                        .left-a {
                            background-color: rgba(240, 246, 246, 1);
                            width: 150px;
                            height: 60px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }

                        .left-b {
                            width: 350px;
                            display: flex;
                            // justify-content: center;
                            padding: 0 0 0 20px;
                            align-items: center;
                        }
                    }

                    .right {
                        display: flex;

                        .right-a {
                            width: 150px;
                            height: 60px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }

                        .right-b {
                            width: 360px;
                            display: flex;
                            align-items: center;
                            padding: 0 0 0 20px;
                        }
                    }
                }
            }
        }
    }
}

// 这个是头部
.right-a {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    background-color: #fff;
    height: 60px;

    .right-s {
        display: flex;
        align-items: center;

        i {
            font-size: 20px;
            color: rgba(169, 171, 179, 1);
        }

        span {
            font-size: 16px;
            font-weight: 400;
            margin-left: 6px;
        }
    }

    .right-t {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 300px;

        // background-color: aqua;
        i {
            font-size: 16px;
        }

        span {
            font-size: 14px;
            color: rgba(169, 171, 179, 1);
        }

        div {
            width: 30px;
            height: 30px;
            overflow: hidden;
            border-radius: 50%;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>