<template>
    <div class="right-a">
        <div class="right-s">
            <i class="iconfont icon-liebiaofenlei"></i>
            <span @click="go" style="color: rgba(153, 153, 153, 1);">讲师/<span style="color:black;">添加讲师</span></span>
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
            <span style="color: rgba(153, 153, 153, 1);">请输入相关的信息</span>
            <!-- 课程名称 -->
            <div class="say">
                <span>讲师名称</span>
                <input type="text" v-model="ini" style="margin-left: 20px;height: 30px;" placeholder="请输入讲师名称">
            </div>
            <!-- 上传图片 -->
            <div class="say-a">
                <span>讲师头像</span>
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
            <!-- <div class="say-u">
                <span>商品限制</span>
                <div>
                    <el-radio-group v-model="radio">
                        <el-radio radio="上架状态" label="上架状态">上架状态</el-radio>
                        <el-radio radio="下架状态" label="下架状态">下架状态</el-radio>
                    </el-radio-group>
                </div>
            </div> -->
            <!-- 课程价格 -->
            <!-- <div class="say-o">
                <span>课程价格</span>
                <div style="
                border-radius: 10px;
                background-color: #fff;
                border: 1px solid rgba(184, 196, 209, 1);
                width: 300px;
                height: 40px;
                display: flex;
                justify-content: center;
                overflow: hidden;
                color: rgba(204, 204, 204, 1);
                align-items: center;">
                    <input v-model="price" type="text" style="border: none;
                    outline: none;
                    height: 40px;
                    width: 260px;"><span>元</span>
                </div>
            </div> -->
            <!-- 课程介绍 -->
            <!-- <div class="say-n">
                <span>课程介绍</span>
                <textarea style="
                    width: 500px;
                    height: 80px;
                    margin-left: 20px;
                " name="" id="" cols="30" rows="10" placeholder="请输入内容" v-model="referral"></textarea>
            </div> -->
             <!-- 讲师简介-->
             <div>
                <span>讲师简介</span>
                <input v-model="catalog" style="width: 500px;margin-left: 20px;height: 30px;" type="text"
                    placeholder="请输入简单介绍内容">
            </div>
            <!-- 详细介绍 -->
            <div class="say-n">
                <span>详细介绍</span>
                <textarea style="
                    width: 500px;
                    height: 250px;
                    margin-left: 20px;
                " name="" id="" cols="30" rows="10" v-model="lecturer" placeholder="请输入内容"></textarea>
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
            // radio: radio.value,
            // price: price.value,
            // referral: referral.value,    
            lecturer: lecturer.value,
            catalog: catalog.value
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
        height: 87vh;
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