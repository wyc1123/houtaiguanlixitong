<template>
    <div class="right-a">
        <div class="right-s">
            <i class="iconfont icon-liebiaofenlei"></i>
            <span>文章</span>
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
    <div class="hader">
        <!-- 日期上传搜索重置 -->
        <div class="header-a">
            <div class="fight">
                <!-- 上传时间/状态/r -->
                <div class="fight-a">
                    <div class="demo-date-picker">
                        <div class="block">
                            <span class="demonstration">上传时间：</span>
                            <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始时间"
                                end-placeholder="结束时间" :size="size" />
                        </div>
                    </div>
                    <div class="fight-i">
                        上传人：
                        <select name="" id="">
                            <option value="">牛牛</option>
                            <option value="">牛魔王</option>
                            <option value="">牛夫人</option>
                            <option value="">勇敢牛牛</option>
                        </select>
                    </div>
                </div>
                <!-- 搜索 /重置/搜索 -->
                <div class="fight-b">
                    <div class="fight-l">
                        手动搜索：<input type="text" placeholder="请输入课程标题或者关键词">
                    </div>
                    <div class="fight-n">
                        <button style="background-color: rgba(43, 193, 123, 1);">搜索</button>
                        <button
                            style="background-color: #fff;color: rgba(43, 193, 123, 1);border: 1px solid rgba(43, 193, 123, 1);">重置</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 表格 -->
        <div class="tab">
            <!-- 跳转 -->
            <div class="tab-a">
                <div class="tab-c">
                    <span>文章列表</span>
                    <div>
                        <i class="iconfont icon-tianjiawenjian"></i>
                        <RouterLink to="/article2"><span>添加文章</span></RouterLink>
                    </div>
                </div>
            </div>
            <!-- 表格 -->
            <div class="tab-q">
                <div class="tab-y">
                    <div>
                        <el-table ref="multipleTableRef" :data="tableData" style="width: 100%"
                            @selection-change="handleSelectionChange">
                            <el-table-column type="selection" width="66" />
                            <el-table-column label="标题" width="200">
                                <template #default="scope">{{ scope.row.date }}</template>
                            </el-table-column>
                            <el-table-column label="封面" width="200">
                                <template #default="scope"><img :src="scope.row.name" alt=""></template>
                            </el-table-column>
                            <el-table-column label="描述" width="220">
                                <template #default="scope">
                                    <div style="height: 50px;">
                                        {{ scope.row.address }}
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column property="state" label="上传人" width="200" />
                            <!-- <el-table-column property="price" label="订单金额" width="130" />
                            <el-table-column property="sales" label="订单状态" width="130" /> -->
                            <el-table-column property="sales" label="提交时间" width="200" />
                            <!-- <el-table-column property="state" label="操作" width="200" /> -->
                            <el-table-column fixed="right" label="操作" width="200">
                                <template #default>
                                    <el-button link type="primary" size="small">编辑</el-button>
                                    <el-button link type="primary" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <!-- <div style="margin-top: 20px">
                            <el-button @click="toggleSelection([tableData[1], tableData[2]])">全选</el-button>
                            <el-button @click="toggleSelection()">取消</el-button>
                        </div> -->
                    </div>
                </div>
                <!-- 分页 -->
                <div class="tab-k">
                    <div style="margin-top: 20px">
                        <el-button @click="toggleSelection(tableData)">全选</el-button>
                        <el-button @click="toggleSelectionn(tableData)">取消</el-button>
                    </div>
                    <div class="tab-m">
                        <span>共10页，100条数据</span>
                        <el-pagination small background layout="prev, pager, next" :total="50" class="mt-4" />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { RouterLink } from 'vue-router';
// import headder from '../components/headder.vue'
import { ref } from 'vue'
let flage = ref(true)
function abc() {
    flage.value = !flage.value
    console.log(flage.value);

}
const size = ref('default')

const value1 = ref('')
// import { ref } from "vue"
// 表格
const multipleTableRef = ref()
const multipleSelection = ref()
// 全选
const toggleSelection = (tableData) => {
    console.log(tableData);
    if (tableData) {
        tableData.forEach((row) => {
            multipleTableRef.value!.toggleRowSelection(row, tableData)
        })
    }
    // else {
    //     multipleTableRef.value!.clearSelection()
    // }
}
// 反选
const toggleSelectionn = (tableData) => {
    multipleTableRef.value!.clearSelection()
}
const handleSelectionChange = (val) => {
    multipleSelection.value = val
}
const tableData = [
    {
        date: '牛魔王',//编号
        name: "https://img.js.design/assets/img/6180ac4e7e06ae1cf4581e18.png",//名称
        address: "这里是文章简单的文字描述，最多显示两行折行显示，超出两行宽度显示… ",//图片
        state: '牛夫人',//是否上线
        // price: '555',//价格
        sales: '2023/8/1',//销量
    }
]
</script>

<style scoped lang="less">
a {
    text-decoration: none;
}

// 底部
.tab-k {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    height: 37px;
    // background-color: antiquewhite  ;
    width: 1120px;

    .tab-m {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 400;

        span {
            margin-right: 12px;
        }
    }
}

// 表格
.tab {
    padding: 20px;
    // background-color: ;

    .tab-a {
        background-color: #fff;
        padding: 10px;
        border-radius: 6px 6px 0 0;
        overflow: hidden;

        // 跳转
        .tab-c {
            display: flex;
            justify-content: space-between;

            div {
                display: flex;
                align-items: center;

                span {
                    color: rgba(43, 193, 123, 1);
                    margin-left: 10px;
                }

                i {
                    color: rgba(43, 193, 123, 1);
                }
            }
        }
    }

    // 表格
    .tab-q {
        border: 1px solid rgba(244, 245, 249, 1);
        width: 1189px;
        // height: 760px;
        // background-color: aqua;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0 0 6px 6px;
        overflow: hidden;
        background-color: #fff;
        flex-direction: column;

        .tab-y {
            width: 1130px;
            height: 410px;
            // background-color: #fff;
            border: 1px solid rgba(220, 235, 228, 1);

            img {
                width: 81px;
                height: 54px;
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

// 搜索
.header-a {
    padding: 20px 24px;
    // background-color: #ccc;

    .fight {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        width: 1184px;
        // background-color: aqua;
        height: 135px;
        justify-content: space-around;
        padding: 20px 0;

        .fight-a {
            display: flex;
            justify-content: space-between;
            padding: 20px;
            height: 60px;
            align-items: center;
            // background-color: aqua;
            width: 835px;

            .fight-i {
                border-radius: 5px;
                overflow: hidden;

                select {
                    width: 232px;
                    height: 30px;
                    color: rgba(204, 204, 204, 1);
                    border: 1px solid rgba(184, 196, 209, 1);
                    outline: none;
                }
            }

        }

        .fight-b {
            display: flex;
            width: 700px;
            // background-color: aqua;
            padding: 20px;
            height: 60px;
            align-items: center;
            justify-content: space-between;

            .fight-l {
                input {
                    width: 360px;
                    height: 28px;
                    outline: none;
                    border: 2px solid rgba(244, 245, 249, 1);
                    border-radius: 5px;
                    font-size: 12px;
                }
            }

            .fight-n {
                width: 180px;
                // background-color: aqua;
                height: 35px;
                align-items: center;
                display: flex;
                justify-content: space-between;

                button {
                    width: 74px;
                    height: 40px;
                    color: #fff;
                    border-radius: 10px;
                    border: none;
                }
            }

        }
    }
}
</style>