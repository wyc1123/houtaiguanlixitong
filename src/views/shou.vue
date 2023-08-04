<template>
    <div class="right-a">
        <div class="right-s">
            <i class="iconfont icon-liebiaofenlei"></i>
            <span>首页</span>
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
        <!-- 4个卡片 -->
        <div class="stuck">
            <div class="stuk-a" style="background: linear-gradient(130.24deg, rgba(112, 232, 201, 1) 0%, rgba(57, 206, 199, 1) 100%);
">
                <div class="stuk-s">
                    <i class="iconfont icon-qianbao"></i>
                </div>
                <div class="stuk-l">
                    <span class="zi-a">今日订单收入</span>
                    <span class="zi">￥6666.88</span>
                    <span class="zi-a">+1.2% 同昨天对比</span>
                </div>
            </div>
            <div class="stuk-a" style="background: linear-gradient(130.24deg, rgba(208, 103, 203, 1) 0%, rgba(217, 102, 211, 1) 100%);
">
                <div class="stuk-s">
                    <i class="iconfont icon-quanbudingdan"></i>
                </div>
                <div class="stuk-l">
                    <span class="zi-a">今日订单数量</span>
                    <span class="zi">259</span>
                    <span class="zi-a">+1.2% 同昨天对比</span>
                </div>

            </div>
            <div class="stuk-a" style="background: linear-gradient(130.24deg, rgba(255, 174, 96, 1) 0%, rgba(251, 146, 79, 1) 100%);
">
                <div class="stuk-s">
                    <i class="iconfont icon-tubiaozhizuomoban-02"></i>
                </div>
                <div class="stuk-l">
                    <span class="zi-a">今日访客数</span>
                    <span class="zi">259</span>
                    <span class="zi-a">+1.2% 同昨天对比</span>
                </div>

            </div>
            <div class="stuk-a" style="background: linear-gradient(130.24deg, rgba(254, 136, 108, 1) 0%, rgba(253, 83, 88, 1) 100%);
">
                <div class="stuk-s">
                    <i class="iconfont icon-percentage-full"></i>
                </div>
                <div class="stuk-l">
                    <span class="zi-a">支付转化率</span>
                    <span class="zi">10.00%</span>
                    <span class="zi-a">+1.2% 同昨天对比</span>
                </div>

            </div>
        </div>
        <!-- 二个统计图 -->
        <div class="mde">
            <!-- 这个是统计图线条的 -->
            <div class="mde-a" ref="mde"></div>
            <!-- 这个是统计图方框的 -->
            <div class="mde-s" ref="mdea"></div>
        </div>
        <!-- 学员 情况 -->
        <div class="student">

            <div class="student-a">
                <div class="dynamic">
                    <span>活跃学员</span>
                    <div class="dynamic-a">
                        <span>日期</span>
                        <div>
                            <div class="block">
                                <!-- <span class="demonstration">Dates</span> -->
                                <el-date-picker v-model="value4" type="dates" placeholder="2023-7-28" />
                            </div>
                            <i class="iconfont icon-24gf-calendar"></i>
                        </div>
                    </div>
                </div>
                <div class="raw">
                    <div class="raw-a">
                        <div class="raw-s">
                            <div class="raw-d">
                                <img src="../image/于文慧.png" alt="">
                            </div>
                            <div class="raw-f">
                                <span class="w-a">小仓鼠的老房子</span>
                                <span class="w">学号:207HHM6</span>
                            </div>
                            <div class="raw-g">
                                <span>95%</span>
                                <div class="raw-h">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div class="raw-s">
                            <div class="raw-d">
                                <img src="../image/于文慧.png" alt="">
                            </div>
                            <div class="raw-f">
                                <span class="w-a">是个勇士</span>
                                <span class="w">学号:207HHM6</span>
                            </div>
                            <div class="raw-g">
                                <span>88%</span>
                                <div class="raw-h">
                                    <div style=" 
                                    background-color: rgba(254, 105, 106, 1);
                            width: 150px;
                            height: 10px;
                            border-radius: 20px;
                            display: flex;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="raw-s">
                            <div class="raw-d">
                                <img src="../image/于文慧.png" alt="">
                            </div>
                            <div class="raw-f">
                                <span class="w-a">金金小张</span>
                                <span class="w">学号:207HHM6</span>
                            </div>
                            <div class="raw-g">
                                <span>60%</span>
                                <div class="raw-h">
                                    <div style=" 
                                    background-color: rgba(254, 105, 106, 1);
                            width: 120px;
                            height: 10px;
                            border-radius: 20px;
                            display: flex;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="raw-a">
                        <div class="raw-s">
                            <div class="raw-d">
                                <img src="../image/于文慧.png" alt="">
                            </div>
                            <div class="raw-f">
                                <span class="w-a">松狸奶芙</span>
                                <span class="w">学号:207HHM6</span>
                            </div>
                            <div class="raw-g">
                                <span>50%</span>
                                <div class="raw-h">
                                    <div style=" background-color: rgba(254, 105, 106, 1);
                            width: 110px;
                            height: 10px;
                            border-radius: 20px;
                            display: flex;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="raw-s">
                            <div class="raw-d">
                                <img src="../image/于文慧.png" alt="">
                            </div>
                            <div class="raw-f">
                                <span class="w-a">南方有佳木</span>
                                <span class="w">学号:207HHM6</span>
                            </div>
                            <div class="raw-g">
                                <span>45%</span>
                                <div class="raw-h">
                                    <div style=" 
                                    background-color: rgba(254, 105, 106, 1);
                            width: 80px;
                            height: 10px;
                            border-radius: 20px;
                            display: flex;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="raw-s">
                            <div class="raw-d">
                                <img src="../image/于文慧.png" alt="">
                            </div>
                            <div class="raw-f">
                                <span class="w-a">咖喱酱</span>
                                <span class="w">学号:207HHM6</span>
                            </div>
                            <div class="raw-g">
                                <span>25%</span>
                                <div class="raw-h">
                                    <div style=" 
                                    background-color: rgba(254, 105, 106, 1);
                            width: 60px;
                            height: 10px;
                            border-radius: 20px;
                            display: flex;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="student-b">
                <div class="dynamic">
                    <span>活跃学员</span>
                    <div class="dynamic-a">
                        <span>日期</span>
                        <div>
                            <div class="block">
                                <!-- <span class="demonstration">Dates</span> -->
                                <el-date-picker v-model="value4" type="dates" placeholder="2023-7-28" />
                            </div>
                            <i class="iconfont icon-24gf-calendar"></i>
                        </div>
                    </div>
                </div>
                <div class="pp">
                    <div class="case">
                        <div class="case-a">
                            <div class="case-n">
                                <div class="case-o">
                                    <i class="iconfont icon-tongxunlu"></i>
                                </div>
                                <div class="case-g">
                                    <span>学员数</span>
                                    <span class="case-h">84</span>
                                </div>
                            </div>

                            <div class="case-i">
                                <span>同昨天对比+12%</span>
                                <span>昨日78</span>
                            </div>
                        </div>
                        <div class="case-a">
                            <div class="case-n">
                                <div class="case-o" style="background-color: rgba(3, 187, 42, 1);">
                                    <i class="iconfont icon-qiuzhirenyuan"></i>
                                </div>
                                <div class="case-g">
                                    <span>学员数</span>
                                    <span class="case-h">84</span>
                                </div>
                            </div>

                            <div class="case-i">
                                <span>同昨天对比+12%</span>
                                <span>昨日78</span>
                            </div>
                        </div>
                    </div>
                    <div class="case">
                        <div class="case-a">
                            <div class="case-n">
                                <div class="case-o" style="background-color: rgba(243, 208, 38, 1);">
                                    <i class="iconfont icon-shexiangtou"></i>
                                </div>
                                <div class="case-g">
                                    <span>学员数</span>
                                    <span class="case-h">84</span>
                                </div>
                            </div>

                            <div class="case-i">
                                <span>同昨天对比+12%</span>
                                <span>昨日78</span>
                            </div>
                        </div>
                        <div class="case-a">
                            <div class="case-n">
                                <div class="case-o" style="background-color: rgba(3, 180, 253, 1);">
                                    <i class="iconfont icon-quanbudingdan"></i>
                                </div>
                                <div class="case-g">
                                    <span>学员数</span>
                                    <span class="case-h">84</span>
                                </div>
                            </div>

                            <div class="case-i">
                                <span>同昨天对比+12%</span>
                                <span>昨日78</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
const value4 = ref('')
import * as echarts from 'echarts';
import { ref, onMounted } from "vue"
import { RouterLink } from 'vue-router';
let mde = ref()
let mdea = ref()

onMounted(() => {
    // 第二个
    var myChart = echarts.init(mdea.value);
    var option;
    option = {
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['product', '2015', '2016', '2017'],
                ['Matcha Latte', 43.3, 85.8, 93.7],
                ['Milk Tea', 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 86.4, 65.2, 82.5],
                ['Walnut Brownie', 72.4, 53.9, 39.1]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    };

    option && myChart.setOption(option);
    // 第一个
    var myChart = echarts.init(mde.value);
    var option;
    option = {
        title: {
            text: 'Stacked Line'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    option && myChart.setOption(option);
})


</script>

<style scoped lang="less">
a{
    text-decoration: none;
}
.demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
}

.demo-date-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
}

.demo-date-picker .block:last-child {
    border-right: none;
}

.demo-date-picker .container {
    flex: 1;
    border-right: solid 1px var(--el-border-color);
}

.demo-date-picker .container .block {
    border-right: none;
}

.demo-date-picker .container .block:last-child {
    border-top: solid 1px var(--el-border-color);
}

.demo-date-picker .container:last-child {
    border-right: none;
}

.demo-date-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
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

.header {

    // 学员的下面的布局
    .raw {
        // background-color: lawngreen;
        display: flex;
        justify-content: space-between;
        padding: 0 10px;

        .raw-a {
            width: 335px;
            height: 250px;
            // background-color: rgb(199, 46, 184);
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .raw-s {
                height: 50px;
                // border: 2px solid;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .raw-d {
                    width: 50px;
                    height: 50px;
                    border-radius: 5px;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .raw-f {
                    display: flex;
                    flex-direction: column;
                    height: 50px;
                    justify-content: space-around;

                    .w-a {
                        font-size: 14px;
                        font-weight: 400;
                    }

                    .w {
                        font-size: 11px;
                        color: rgba(153, 153, 153, 1);
                    }
                }

                .raw-g {
                    display: flex;
                    flex-direction: column;
                    width: 160px;
                    height: 50px;
                    align-items: flex-end;
                    justify-content: space-around;

                    // background-color: aqua;
                    span {
                        font-size: 12px;
                        color: #ccc;
                    }

                    .raw-h {
                        background-color: #ccc;
                        width: 160px;
                        height: 8px;
                        border-radius: 20px;
                        display: flex;
                        justify-content: end;

                        div {
                            background-color: rgba(254, 105, 106, 1);
                            width: 150px;
                            height: 8px;
                            border-radius: 20px;
                            display: flex;
                        }
                    }
                }
            }
        }
    }

    .stuck {
        width: 100%;
        padding: 15px 0px;
        // background-color: antiquewhite;
        display: flex;
        justify-content: space-around;

        .stuk-a {
            width: 280px;
            height: 120px;
            // background-color: bisque;
            display: flex;
            border-radius: 10px;

            .stuk-s {
                width: 250px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                i {
                    font-size: 60px;
                    color: #fff;
                }
            }

            .stuk-l {
                display: flex;
                flex-direction: column;
                width: 100%;
                // background-color: hotpink;
                justify-content: space-evenly;
                align-items: flex-end;
                color: #fff;
                padding: 0 15px 0 0;

                .zi {
                    font-size: 20px;
                }

                .zi-a {
                    font-size: 13px;
                }
            }
        }
    }

    .mde {
        display: flex;
        align-content: center;
        // padding:0 18px;
        justify-content: space-around;

        .mde-a {
            width: 700px;
            height: 260px;
            // background-color: gold;
            background-color: #fff;
            overflow: hidden;
            border-radius: 10px;
            padding: 10px;
        }

        .mde-s {
            width: 450px;
            height: 280px;
            // background-color: hotpink;
            border-radius: 10px;
            overflow: hidden;
            background-color: #fff;
        }
    }

    // 学员 情况的通用的头部
    .student {
        display: flex;
        // background-color: aqua;
        justify-content: space-between;
        // padding:0 20px;
        padding: 15px 0 10px 0;

        .student-a {
            width: 720px;
            height: 300px;
            // background-color: hotpink;
            margin-left: 12px;
            border-radius: 10px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            background-color: #fff;


        }

        .dynamic {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 64px;
            padding: 0 10px;

            .dynamic-a {
                display: flex;
                align-items: center;

                span {
                    margin-right: 10px;
                    color: rgba(102, 102, 102, 1);
                    font-size: 12px;
                }

                div {
                    width: 200px;
                    // height: 28px;
                    font-size: 11px;
                    display: flex;
                    align-items: center;
                    // border: 2px solid rgb(219, 212, 212);
                    justify-content: space-between;
                    border-radius: 8px;
                    overflow: hidden;
                    padding: 0 12px;

                    i {
                        color: rgb(219, 212, 212);
                    }
                }
            }
        }
    }

    // 情况下面的布局
    .student-b {
        width: 450px;
        height: 300px;
        // background-color: khaki;
        background-color: #fff;
        margin-right: 12px;
        border-radius: 10px;
        overflow: hidden;

        .pp {
            display: flex;
            flex-direction: column;
            height: 200px;
            justify-content: space-between;
            padding: 0 10px;

            .case {
                display: flex;
                width: 430px;
                justify-content: space-between;

                .case-a {
                    width: 144px;
                    height: 81px;
                    // background-color: aqua;

                    .case-n {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        .case-o {
                            width: 55px;
                            height: 55px;
                            background-color: rgba(253, 124, 38, 1);
                            border-radius: 50%;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            i {
                                font-size: 26px;
                                color: #fff;
                            }
                        }

                        .case-g {
                            display: flex;
                            flex-direction: column;
                            // align-items: center;
                            justify-content: space-around;
                            width: 70px;
                            height: 50px;

                            .case-h {
                                font-size: 18px;
                                font-weight: 400;
                            }
                        }
                    }

                    .case-i {
                        display: flex;
                        font-size: 11px;
                        color: rgba(102, 102, 102, 1);
                        height: 21px;
                        // background-color: hotpink;
                        align-items: center;
                        justify-content: space-between;
                    }

                }

            }
        }

    }
}
</style>