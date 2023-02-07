<template>
  <div class="markdown-container">
    <!-- 渲染区 -->
    <div id="markdown-box">
     
    </div>
    <!-- 底部按钮 -->
    <div class="button">
      <el-button type="primary" @click="onSubmitClick">{{ $t('msg.article.commit') }}</el-button>
    </div>
  </div>
</template>

<script setup>
import { onMounted,defineProps,defineEmits } from 'vue'
import Editor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/i18n/zh-cn'
import { useStore } from 'vuex'
import { watchSwitchLang } from '@/utils/i18n'
import { commitArticle } from './commit'


const props = defineProps({
  title:{
    required: true,
    type: String
  }
})

const emits = defineEmits(['onSuccess'])
let mkEditor
let el

onMounted(() => {
  el = document.querySelector('#markdown-box')
  initEditor()
})

const store = useStore()
const initEditor = () => {
  mkEditor = new Editor({
    el,
    height: '500px',
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    language: store.getters.language === 'zh' ? 'zh-CN' : 'en'
  })
  mkEditor.getMarkdown()
}

watchSwitchLang(() => {
  if(!el) return
  const htmlStr = mkEditor.getHtml()
  mkEditor.destroy()
  initEditor()
  mkEditor.setHTML(htmlStr)
})

const onSubmitClick = async() => {
  await commitArticle({
    title: props.title,
    content:mkEditor.getHTML()
  })
  mkEditor.reset()
  emits('onSuccess')
}
</script>

<style lang="scss" scoped>
.markdown-container {
  .button {
    margin-top: 20px;
    text-align: right;
  }
}
</style>