<template>
    <div class="right-a">
        <div class="right-s">
            <i class="iconfont icon-liebiaofenlei"></i>
            <span @click="go" style="color: rgba(153, 153, 153, 1);">秒杀活动/秒杀活动列表/
                <span style="color:black;">课程设置</span></span>
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
        <!-- 表格 -->
        <div class="tab">
            <!-- 跳转 -->
            <div class="tab-a">
                <div class="tab-c">
                    <span>秒杀时段列表</span>
                    <div>
                        <i class="iconfont icon-tianjiawenjian"></i>
                        <!-- <RouterLink to="/course2"></RouterLink> -->
                        <span>添加时段</span>
                    </div>
                </div>
            </div>
            <!-- 表格 -->
            <div class="tab-q">
                <div class="tab-y">
                    <div>
                        <el-table ref="multipleTableRef" :data="tableData" style="width: 100%"
                            @selection-change="handleSelectionChange">
                            <!-- <el-table-column type="selection" width="66" /> -->
                            <el-table-column label="场次编号" width="180">
                                <template #default="scope">{{ scope.row.date }}</template>
                            </el-table-column>
                            <el-table-column property="name" label="场次名称" width="180" />
                            <!-- <el-table-column property="address" label="手机号" width="160" /> -->
                            <el-table-column property="state" label="每日开始时间" width="180" />
                            <el-table-column property="price" label="每日结束时间" width="180" />
                            <el-table-column property="sales" label="课程数量" width="180" />
                            <el-table-column property="state" label="提交时间" width="200" />
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
// const toggleSelectionn = (tableData) => {
//     multipleTableRef.value!.clearSelection()
// }
// const handleSelectionChange = (val) => {
//     multipleSelection.value = val
// }
const tableData = [
    {
        date: '88888',//编号
        name: '上午一场',//名称
        // address: "15911239707",//图片
        state: '08:00:00',//是否上线
        price: '08:00:00',//价格
        sales: '8',//销量
    }
]
// 返回上一页
function go() {
    window.history.go(-1)
}
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
    height: 85vh;

    // background-color: red;
    .tab-a {
        background-color: #fff;
        padding: 10px;
        border-radius: 6px 6px 0 0;
        overflow: hidden;
        // height: 10vh;

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
        height: 85vh;
        // background-color: red;

        .tab-y {
            width: 1130px;
            height: 600px;
            // background-color: #fff;
            border: 1px solid rgba(220, 235, 228, 1);

            img {
                width: 60px;
                height: 30px;
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