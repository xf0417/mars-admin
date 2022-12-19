<template>
    <div @click="onToggle">
        <svg-icon id="guide-full" :icon="isFullScreen ? 'exit-fullscreen' : 'fullscreen'"></svg-icon>
    </div>
  </template>
  
  <script setup>
  import { ref,onMounted,onUnmounted } from 'vue'
  import screenfull from 'screenfull'
  
  //是否全屏
  const isFullScreen = ref(false)

  const onToggle = () => {
    screenfull.toggle()
  }

  //监听screenfull变化
const change = () => {
    isFullScreen.value=screenfull.isFullscreen
}
onMounted(() => {
    screenfull.on('change',change)
})
onUnmounted(() => {
    screenfull.off('change',change)
})
  </script>
  
  <style lang="scss" scoped>
  </style>