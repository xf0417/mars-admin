<template>
    <div class="">
        <div class="logo-container">
            <el-avatar size="large" shape="square" :src="rightLogo">
            </el-avatar>
            <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
                mars-admin</h1>
        </div>
        <el-scrollbar>
            <SidebarMenu />
        </el-scrollbar>
    </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue'
import rightLogo from '@/assets/rightLogo.png'
import { } from 'vue'
</script>

<style lang="scss" scoped>
.logo-container {
    height: 44px;
    padding: 10px 0 22px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo-title {
        margin-left: 10px;
        color: #fff;
        font-weight: 600;
        line-height: 50px;
        font-size: 16px;
        white-space: nowrap;
    }
}
</style>
