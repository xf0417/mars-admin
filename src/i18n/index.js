import { createI18n } from 'vue-i18n'
import zhLocale from './lang/zh'
import enLocale from './lang/en'
import store from '@/store'

const messages = {
    en: {
        msg: {
            ...enLocale
        }
    },
    zh: {
        msg: {
            ...zhLocale
        }
    }
}

/**
 * 返回当前 lang
 */
 function getLanguage() {
    return store && store.getters && store.getters.language
  }

const i18n = createI18n({
    //使用composition API
    legacy: false,
    globalInjection: true,
    locale: getLanguage() || 'en',
    messages
})

export default i18n