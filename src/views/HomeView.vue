<template>
  <div class="box">
    <div class="box-a">
      <!-- 左边的 -->
      <div class="left">
        <div class="left-a">
          <i class="iconfont icon-shuben"></i>
          <span>教育管理系统</span>
        </div>
        <div class="left-s">
          <span class="face">欢 迎 回 来</span>
          <span class="face-a">水静流深，涂歌巷舞</span>
        </div>
        <RouterLink to="/login">
          <div class="btn">
            <span>
              没账号，去注册
            </span>
          </div>
        </RouterLink>
      </div>
      <!-- 右边的 -->
      <div class="right">
        <div class="right-a">
          <p>后台登录</p>
          <div>
            <i class="iconfont icon-wode"></i>
            <input type="text" v-model="phone" placeholder="请输入用户名">
          </div>
          <div>
            <i class="iconfont icon-suo"></i>
            <input type="password" v-model="password" placeholder="请输入密码">
          </div>
          <div>
            <i class="iconfont icon-anquan"></i>
            <input type="password" placeholder="验证码">
          </div>
          <!-- <RouterLink to="Shouye"> -->
          <button class="btn" @click="btn">现在登录</button>
          <!-- </RouterLink> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useRouter, useRoute } from 'vue-router'
// import {red}
import { login } from '../util/http.js'
import axios from "axios";
let router = useRouter()
let route = useRoute()
let phone = route.query.phone
let password = route.query.password

console.log(route.query);
function btn() {
  let parms = {
    phone: phone,
    password: password
  }
  login(parms).then(res => {
    console.log(res);
    // let res =res
    if (res.status == 200) {
      router.push('/Shouye')
    }
  }).catch(err => {
    console.log(err);
    alert('用户名或密码错误')
  })
}
</script>

<style scoped lang="less">
a {
  text-decoration: none;
}

.box {
  // width: 370px;
  height: 99vh;
  // background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(240, 244, 245, 1);


  .box-a {
    width: 1000px;
    height: 500px;
    background-color: #322f8a;
    border-radius: 2px;
    display: flex;
    box-shadow: 0px 0px 4px rgba(240, 244, 245, 1);
    border-radius: 10px;
    overflow: hidden;

    // 左边的
    .left {
      background: linear-gradient(180.83deg, rgba(60, 176, 158, 1) 0%, rgba(43, 193, 123, 1) 100%);
      width: 450px;
      height: 100%;

      .left-a {
        display: flex;
        // justify-content: center;
        padding: 5px 0 0 5px;
        align-items: center;

        i {
          color: #fff;
          font-size: 20px;
        }

        span {
          color: #fff;
          font-size: 12px;

        }
      }

      .left-s {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 100%;
        height: 150px;
        margin-top: 100px;
        align-items: center;
        justify-content: space-around;

        .face {
          color: #fff;
          font-size: 30px;
        }

        .face-a {
          color: #fff;
          font-size: 20px;
        }
      }

      .btn {
        // border-radius: 8px;
        font-size: 15px;
        // border: 0.5px solid #fff;
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          border-radius: 50px;
          border: 2px solid #fff;
          padding: 15px 20px;
          color: #fff;

        }
      }
    }

    //右边的
    .right {
      background-color: #fff;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .right-a {
        // background-color: antiquewhite;
        width: 100%;
        height: 400px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;

        p {
          color: rgba(43, 193, 123, 1);
          font-size: 35px;
        }

        div {
          i {
            font-size: 15px;
            position: relative;
            left: 20px;
            top: 0.5px;
            color: #ccc;
          }

          input {
            width: 270px;
            height: 40px;
            border-radius: 2px;
            border: 0px solid;
            background-color: rgba(245, 249, 250, 1);
            outline: 0px solid;
            text-indent: 20px;

          }
        }

        input::-webkit-input-placeholder {
          color: #ccc;
          font-size: 13px;
        }

        .btn {
          background-color: rgba(43, 193, 123, 1);
          color: #fff;
          width: 200px;
          height: 40px;
          border-radius: 50px;
          border: 0px solid;
          padding: 5px 20px;
        }
      }
    }
  }
}
</style>