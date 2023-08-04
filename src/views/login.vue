<template>
    <div id="box">
        <div class="box">
            <h2>用户注册</h2>
            <!-- <form autocomplete="off"> -->
            <div class="a">
                <div class="left">
                    <!-- 姓氏 -->
                    <div class="input1">
                        <label for="familyName">姓氏:</label>
                        <input type="text" name="familyName" v-model="familyName">
                    </div>
                    <!-- 名称 -->
                    <div class="input1">
                        <label for="name">名称:</label>
                        <input type="text" v-model="name">
                    </div>
                    <!-- 全名 -->
                    <div class="input1">
                        <label for="fullName">全名:</label>
                        <input type="text" v-model="fullName">

                    </div>
                    <span class="red" v-show="nameif">The name is 2-4 Chinese characters</span>
                    <!-- 邮箱地址 -->
                    <div class="input1">
                        <label for="email">邮箱地址</label>
                        <input type="email" v-model="email">
                    </div>
                    <!-- 电话 -->
                    <div class="input1">
                        <label for="tel">电话:</label>
                        <input type="tel" v-model="tel">
                    </div>
                    <span class="red" v-show="telif">Please fill in the correct mobile phone number
                    </span>
                    <!-- 地址 -->
                    <div class="input1">
                        <label for="address">地址:</label>
                        <input type="text" v-model="address">
                    </div>
                    <!-- 年龄 -->
                    <div class="input1">
                        <label for="age">年龄:</label>
                        <input type="text" v-model="age">
                    </div>


                </div>
                <div class="right">

                    <!-- 英文名字 -->
                    <div class="input1">
                        <label for="EnglishName">英文名:</label>
                        <input type="text" v-model="EnglishName">
                    </div>
                    <!-- 角色 -->
                    <div class="input1">
                        <label for="role">请选择角色</label>
                        <select id="role" v-model="role">
                            <option value="" selected="true">请选择</option>
                            <!-- 管理员 -->
                            <option value="Administrator">管理员</option>
                            <!-- 设计师 -->
                            <option value="stylist">设计师</option>
                            <!-- 库管 -->
                            <option value="InventoryKeeper">库管</option>
                            <!-- 工程师 -->
                            <option value="Engineer">工程师</option>
                        </select>
                    </div>
                    <!-- 简历 -->
                    <div class="input1">
                        <label for="desc">简介:</label>
                        <textarea name="" id="desc" cols="30" rows="10" v-model="desc"></textarea>
                    </div>
                    <!-- 密码 -->
                    <div class="input1">
                        <label for="password">密码:</label>
                        <input type="password" v-model="password">
                    </div>
                </div>
            </div>
            <button type="submit" @click="submitForm">提交</button>
            <!-- </form> -->
        </div>
    </div>
</template>
<style scoped lang="less">
#box {
    width: 100vw;
    height: 100vh;
    // background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    background-color: salmon;
    // display: flex;

    .box {
        width: 1200px;
        height: 98vh;
        display: flex;
        flex-direction: column;
        // min-height: 80vh;
        // background-color: red;
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;

        .red {
            width: 300px;
            color: red;
            font-size: 10px;
            display: block;
            text-align: center;
            margin-left: 180px;
            height: 10px;
        }

        h2 {
            width: 1200px;
            text-align: center;

        }

        .a {
            display: flex;
        }

        .left,
        .right {
            width: 600px;
            height: 66vh;

        }

        label {
            display: block;
            width: 200px;
            text-align: right;
            margin-right: 20px;
            height: 40px;
            line-height: 40px;


        }

        .input1 {
            display: flex;
            margin-top: 30px;
        }

        input {
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        select {
            padding: 8px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: #fff;
            color: #333;
            width: 200px;
            outline: none;
            /* 移除默认的选中时外边框 */
        }

        select:hover {
            border-color: #3b82f6;
            /* 鼠标悬停时边框颜色 */
        }

        select:focus {
            border-color: #1d4ed8;
            /* 获取焦点时边框颜色 */
        }

        textarea {
            padding: 10px;
            font-size: 16px;
            border: 2px solid #ccc;
            border-radius: 6px;
            background-color: #f9f9f9;
            color: #333;
            width: 300px;
            resize: none;
            /* 禁止调整大小 */
            outline: none;
            /* 移除默认的选中时外边框 */
        }

        textarea:hover {
            border-color: #3b82f6;
            /* 鼠标悬停时边框颜色 */
        }

        textarea:focus {
            border-color: #1d4ed8;
            /* 获取焦点时边框颜色 */
            background-color: #fff;
            /* 获取焦点时改变背景色 */
        }

        input:hover {
            border-color: #3b82f6;
            /* 鼠标悬停时边框颜色 */
        }

        input:focus {
            border-color: #1d4ed8;
            /* 获取焦点时边框颜色 */
        }

        button[type="submit"] {
            background-color: #3b82f6;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 80%;
            font-size: 16px;
            margin: auto;
            display: block;
            text-align: center;
        }

        button[type="submit"]:hover {
            background-color: #1d4ed8;
        }

        button[type="submit"]:focus {
            outline: none;
            /* 移除默认的选中时外边框 */
        }

        button[type="submit"]:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
    }
}
</style>
<script setup>
import axios from 'axios';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { register } from '../util/http';
let router = useRouter()
let familyName = ref()
let name = ref()
let fullName = ref()
let email = ref()
let tel = ref()
let address = ref()
let age = ref()
let EnglishName = ref()
let role = ref()
let desc = ref()
let password = ref()
let nameif = ref(false)
let telif = ref(false)
function submitForm() {
    let parms = {
        firstName: familyName.value,
        lastName: name.value,
        fullName: fullName.value,
        nameif: nameif.value,
        email: email.value,
        phone: tel.value,
        address: address.value,
        age: age.value,
        englishName: EnglishName.value,
        role: role.value,
        desc: desc.value,
        password: password.value
    }
    register(parms).then(res => {
        console.log(res);
        if (res.status == 200) {
            router.push({
                path: '/',
                query: {
                    phone: res.data.data.phone,
                    password: parms.password
                }
            })
        }

    })
}
</script>