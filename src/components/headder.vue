<template>
    <div class="hader">
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
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let flage = ref(true)
function abc() {
    flage.value = !flage.value
    console.log(flage.value);

}
const size = ref('default')

const value1 = ref('')



</script>

<style scoped lang="less">
// 搜索
.header-a {
    padding: 20px 24px;
    // background-color: #ccc;

    .fight {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        width: 1184px;
        height: 135px;
        justify-content: space-around;
        padding: 20px 0;

        .fight-a {
            display: flex;
            justify-content: space-between;
            padding: 20px;
            height: 60px;
            align-items: center;

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