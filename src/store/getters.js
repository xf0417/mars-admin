
//快捷访问

const getters = {
    token: state => state.user.token,
    hasUserInfo:state => {
        return JSON.stringify(state.user.userInfo) !== '{}'
    },
    userInfo: state => state.user.userInfo,
    sidebarOpened: state => state.app.sidebarOpened,
    language: (state) => state.app.language
}
export default getters