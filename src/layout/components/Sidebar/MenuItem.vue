<template>
    <!-- element icon -->
    
    <i v-if="(icon==null || icon==undefined)" class="sub-el-icon" :icon="icon">
    </i>
    <!-- 非element icon -->
    <svg-icon v-else :icon="icon"></svg-icon>
    <!-- 文本 -->
    <span>{{generateTitle(title)}}</span>
</template>

<script setup>
import { defineProps} from 'vue'
import { generateTitle } from '@/utils/i18n'
defineProps({
    title:{
        type: String,
        required:true
    },
    icon:{
        type: String,
        required:false
    }
})
</script>

<style lang="scss" scoped>
</style>