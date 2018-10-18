<template>
    <div class="my-wrap">
        <div class="user-info">
            <img class="user-avatar" :src="user.avatarUrl" alt="">
            <p class="user-name">{{user.nickName}}</p>
        </div>
        <div v-if="!user.gender" class="user-login">
            <button class="lg-btn lg-btn-primary" open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGetUserInfo">点击登录</button>
        </div>
        <button class="lg-btn lg-btn-primary" v-if="user.gender" @click="scanBook">扫码添加图书</button>
    </div>
</template>

<script>
import qcloud from "wafer2-client-sdk"
import { get } from "@/utils/httpSvc"
import { lgTip } from "@/utils/modalSvc"
import { loginUrl } from "@/config/urlConfig"
export default {

    components: {
    },
    data() {
        return {
            user: {
                avatarUrl: "/static/imgs/un-login.png",
                nickName: "未登录"
            }
        }
    },
    created() {
        // this.login()
        if (wx.getStorageSync('userInfo')) {
            this.user = wx.getStorageSync('userInfo')
        }
    },
    mounted() {
    },
    methods: {
        onGetUserInfo(e) {
            const self = this
            lgTip('登录成功')
            self.user = e.mp.detail.userInfo
            wx.setStorageSync('userInfo', e.mp.detail.userInfo)
        },
        scanBook() {
            wx.scanCode({
                success: (res) => {
                    console.log(res)
                }
            })
        },
        addBook(isbn) {

        }
    },

}
</script>

<style lang="scss" scoped>
.my-wrap {
    padding-top: 50rpx;
    background: red;
    .user-info {
        text-align: center;
        .user-avatar {
            width: 128rpx;
            height: 128rpx;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto;
        }
        .user-name {
            color: #999;
            margin-bottom: 20rpx;
        }
    }
}
</style>

