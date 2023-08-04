<template>
    <div class="right-a">
        <div class="right-s">
            <i class="iconfont icon-liebiaofenlei"></i>
            <span @click="go" style="color: rgba(153, 153, 153, 1);">秒杀活动/
                <span style="color:black;">添加秒杀活动</span></span>
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
            <span style="color: rgba(153, 153, 153, 1);">请输入秒杀活动相关信息</span>
            <!-- 课程名称 -->
            <div class="say">
                <span>活动编号</span>
                <input type="text" v-model="ini" style="margin-left: 20px;height: 30px;" placeholder="请输入课程名称">
            </div>
            <!-- 上传图片 -->
            <div class="say-a">
                <span>活动封面</span>
                <!-- <div class="say-c">
                    <el-upload  action="#" list-type="picture-card" :auto-upload="false">
                        <div class="abc">
                            <el-icon>
                                +
                            </el-icon>
                            <span  style="font-size: 14px;font-weight: 400;">上传图片</span>
                        </div>
                    </el-upload>
                    <el-dialog v-model="dialogVisible">
                        <img w-full :src="dialogImageUrl" />
                    </el-dialog>
                    <span class="zi">只能上传jpg/png文件，且不超过500kb</span>
                </div> -->
                <div class="say-c">
                    <el-upload action="#" list-type="picture-card" :auto-upload="false">
                        <div class="abc">
                            <el-icon>
                                +
                            </el-icon>
                            <span style="font-size: 14px;font-weight: 400;">上传图片</span>
                        </div>

                        <template #file="{ file }">
                            <div>
                                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                                <span class="el-upload-list__item-actions">
                                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                        <el-icon></el-icon>
                                    </span>
                                    <span v-if="!disabled" class="el-upload-list__item-delete"
                                        @click="handleDownload(file)">
                                        <el-icon>
                                            <!-- <Download /> -->
                                        </el-icon>
                                    </span>
                                    <span v-if="!disabled" class="el-upload-list__item-delete">
                                        <el-icon>
                                            <!-- <Delete /> -->
                                        </el-icon>
                                    </span>
                                </span>
                            </div>
                        </template>
                    </el-upload>

                    <el-dialog v-model="dialogVisible">
                        <img w-full :src="dialogImageUrl" alt="Preview Image" />
                    </el-dialog>
                </div>
            </div>
            <!-- 商品限制 -->
            <div class="say-u">
                <div>
                    <span style="margin-right: 20px;">活动状态</span>
                    <el-radio-group v-model="radio">
                        <el-radio radio="上线状态" label="上线状态">上线状态</el-radio>
                        <el-radio radio="下线状态" label="下线状态">下线状态</el-radio>
                    </el-radio-group>
                </div>
            </div>
            <!-- 日期 -->
            <div>
                <div class="block">
                    <el-date-picker v-model="value2" type="daterange" unlink-panels range-separator="至"
                        start-placeholder="开始时间" end-placeholder="结束时间"  :size="size" />
                </div>
            </div>
            <!-- 按钮 -->
            <div class="fight-n">
                <button @click="btn" style="background-color: rgba(43, 193, 123, 1);">确认</button>
                <button
                    style="background-color: #fff;color: rgba(43, 193, 123, 1);border: 1px solid rgba(43, 193, 123, 1);">取消</button>
            </div>
        </div>
    </div>
</template>

<script setup >
import { ref } from 'vue'
import { useRouter, useRoute } from "vue-router";
const radio = ref()//是否上架
let router = useRouter()
const dialogImageUrl = ref('')//图片
const dialogVisible = ref(false)
const disabled = ref(false)

// const handleRemove = (file) => {
//     console.log(file)
// }
const size = ref('default')

const value1 = ref('')
const value2 = ref('')

const handlePictureCardPreview = (file) => {
    dialogImageUrl.value = file.url
    dialogVisible.value = true
}

const handleDownload = (file) => {
    // console.log(file.url)
    img.value = file.url
    console.log(img.value);
}
let img = ref()
let ini = ref()//名称
let price = ref()//价格
let referral = ref()//介绍
let lecturer = ref()//讲师
let catalog = ref()//目录
let arr = ref([])
let n = 0//个数
// 点击跳转传值
function btn() {
    // arr.value.push()
    // console.log(arr.value)
    // return
    router.push({
        path: 'lecturer',
        query: {
            // n: n++,
            name: ini.value,
            img: img.value,
            radio: radio.value,
            // price: price.value,
            // referral: referral.value,    
            // lecturer: lecturer.value,
            // catalog: catalog.value
        }
    })
    // console.log(router);
}


// 返回上一页
function go() {
    window.history.go(-1)
}
</script>

<style scoped lang="less">
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

//我们大盒子
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;

    .header-a {
        width: 80vw;
        // background-color: hotpink;
        background-color: #fff;
        height: 85vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 10px 0 0 30px;

        // 按钮
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
                font-size: 14px;
                font-weight: 400;
                color: #fff;
                border-radius: 8px;
                border: none;
            }
        }

        .say-n {
            // background-color: antiquewhite;
            display: flex;
        }

        .say-o {
            display: flex;
            align-items: center;

            div {
                margin-left: 20px;
            }
        }

        .say-a {
            display: flex;

            .say-c {
                margin-left: 20px;

                .zi {
                    font-size: 12px;
                    font-weight: 400;
                    color: rgba(102, 102, 102, 1);
                }
            }

            .abc {
                // background-color: antiquewhite;
                flex-direction: column;
                width: 100px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: rgba(153, 153, 153, 1);
            }
        }
    }

}
</style>