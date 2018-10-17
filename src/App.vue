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
        }
    },
    async created() {
        let user = wx.getStorageSync('userInfo')
        // 设置登录地址
        if (!user) {
            qcloud.setLoginUrl(loginUrl);
            qcloud.login({
                success: function (userInfo) {
                    console.log('登录成功', userInfo);
                    lgTip('登陆成功')
                    wx.setStorageSync('userInfo', userInfo)
                },
                fail: function (err) {
                    console.log('登录失败', err);
                }
            });
        }

    },
}
</script>

<style>
.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 200rpx 0;
    box-sizing: border-box;
}
/* this rule will be remove */
* {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
}
</style>
