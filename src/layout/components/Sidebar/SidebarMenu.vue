<template>
    <el-menu 
    :uniqueOpened="true"
    default-actice="1"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-sub-menu index="1">
        <template #title>
            <el-icon><User /></el-icon>
            <span>导航</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
    </el-sub-menu>
    <!-- 具体菜单 -->
    <el-menu-item index="4">
        <i class="el-location"></i>
            <template #title>导航4</template>
    </el-menu-item>
    </el-menu>
</template>

<script setup>
import {computed} from 'vue'
import { useRouter } from 'vue-router'
import {filterRouters, generateMenus} from '@/utils/route'

const router = useRouter()
const routes = computed(() => {
    const filterRoutes = filterRouters(router.getRoutes())
    return generateMenus(filterRoutes)
})
console.log(JSON.stringify(routes.value))

</script>

<style lang="scss" scoped>
    

</style>