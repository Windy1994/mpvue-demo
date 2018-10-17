<template>
    <div class="home-wrap">
        <!-- <button v-if="!this.user" open-type="getUserInfo">获取用户信息</button> -->
        <div class="user-avatar"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {}
            }
        },
        created() {
            this.user = wx.getStorageSync('userInfo')

        },
    }
</script>
