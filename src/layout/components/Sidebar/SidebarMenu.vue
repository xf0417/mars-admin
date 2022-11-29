<template>
    <el-menu 
    :unique-opened="true"
    default-actice="1"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    menu-trigger="click"
    >
    <SideBarItem
    v-for="item in routes"
    :key="item.path"
    :route="item"
    />
    <!-- 具体菜单 -->
    
    </el-menu>
</template>

<script setup>
import {computed} from 'vue'
import { useRouter } from 'vue-router'
import {filterRouters, generateMenus} from '@/utils/route'
import SideBarItem from './SideBarItem.vue'

const router = useRouter()
const routes = computed(() => {
    const filterRoutes = filterRouters(router.getRoutes())
    return generateMenus(filterRoutes)
})
console.log(JSON.stringify(routes.value))

</script>

<style lang="scss" scoped>
    

</style>