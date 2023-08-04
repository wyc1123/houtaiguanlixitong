<template>
    <div class="right-a">
        <div class="right-s">
            <i class="iconfont icon-liebiaofenlei"></i>
            <span>课程管理</span>
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
    <div class="hedaer">
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
                        上架时间：
                        <select @change="abc" :style="{ 'color': flage ? 'rgba(204, 204, 204, 1)' : 'black' }" name=""
                            id="">
                            <option value="fasle">为上架</option>
                            <option value="true">已上架</option>
                        </select>
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
                    <span>课程列表</span>
                    <div>
                        <i class="iconfont icon-tianjiawenjian"></i>
                        <RouterLink to="/course2"><span>添加课程</span></RouterLink>
                    </div>
                </div>
            </div>
            <!-- 表格 -->
            <div class="tab-q">
                <div class="tab-y">
                    <div>
                        <el-table ref="multipleTableRef" :data="tableData" style="width: 100%"
                            @selection-change="handleSelectionChange">
                            <el-table-column type="selection" width="55" />
                            <el-table-column label="编号" width="120">
                                <template #default="scope">{{ scope.row.date }}</template>
                            </el-table-column>
                            <el-table-column property="name" label="名称" width="120" />
                            <el-table-column label="封面" width="140">
                                <template #default="scope"><img :src="scope.row.address" alt=""></template>
                            </el-table-column>
                            <el-table-column property="state" label="状态" width="120" />
                            <el-table-column property="price" label="价格" width="120" />
                            <el-table-column property="sales" label="销量" width="120" />
                            <el-table-column property="state" label="上传人" width="120" />
                            <el-table-column property="state" label="上传时间" width="160" />
                            <!-- <el-table-column property="state" label="操作" width="200" /> -->
                            <el-table-column fixed="right" label="操作" width="200">
                                <template #default>
                                    <el-button link type="primary" size="small" @click="handleClick">编辑</el-button>
                                    <el-button link type="primary" size="small">下架</el-button>
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
import { ref } from 'vue'
import { useRouter, useRoute } from "vue-router";
let route = useRoute()
console.log(route.query);
// let tableData=route.query
let flage = ref(true)
function abc() {
    flage.value = !flage.value
    console.log(flage.value);

}
const size = ref('default')

const value1 = ref('')
// 表格
const handleClick = () => {
    // console.log('click')
}

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
        date: '666',//编号
        name: 'Tom',//名称
        address: "https://img.js.design/assets/img/625646bb3231bdd2a6f79ee7.png",//图片
        state: '已上线',//是否上线
        price: '555',//价格
        sales: '777',//销量
    }
]
// let tableData=route.query

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

.hedaer {

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
                    width: 60px;
                    height: 30px;
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
            // width: 835px;

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
}
</style>