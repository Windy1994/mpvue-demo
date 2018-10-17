// 弹框、提示类工具封装
export const lgTip = (text, type = '') => {
    wx.showToast({
        title: text,
        icon: type || 'success'
    })
}
