import { MAIN_COLOR } from '@/constant'
import { getItem } from '@/utils/storage'
import { generateColors } from '@/utils/theme'
//快捷访问

const getters = {
    token: state => state.user.token,
    hasUserInfo:state => {
        return JSON.stringify(state.user.userInfo) !== '{}'
    },
    userInfo: state => state.user.userInfo,
    cssVar: (state) => {
        return {
          ...state.theme.variables,
          ...generateColors(getItem(MAIN_COLOR))
        }
      },
    sidebarOpened: state => state.app.sidebarOpened,
    language: (state) => state.app.language,
    mainColor: (state) => state.theme.mainColor,
    tagsViewList: (state) => state.app.tagsViewList
}
export default getters