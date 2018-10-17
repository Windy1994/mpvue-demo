// 请求工具封装
import { apiUrl } from '@/config/urlConfig'

export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: apiUrl + url,
            success: res => {
                if (res.data.code === 0) {
                    resolve(res.data.data)
                } else {
                    reject(res.data)
                }
            }
        })
    })
}
