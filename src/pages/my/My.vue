<template>
    <div class="my-wrap">
        <div class="user-info">
            <img :src="user.avatarUrl" alt="">
            <p>{{user.nickName}}</p>
        </div>
        <button @click="code">扫码</button>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            user: {}
        }
    },
    created() {
        this.user = wx.getStorageSync('userInfo')
        console.log(this.user)
    },
    methods: {
        code() {
            wx.scanCode({
                success: (res) => {
                    console.log(res)
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-wrap {
        padding-top: 50rpx;
        .user-info {
            text-align: center;
            img {
                width: 128rpx;
                height: 128rpx;
                border-radius: 50%;
                overflow: hidden;
            }
            p {
                color: #999;
                margin-bottom: 20rpx;
            }
        }
    }
</style>

