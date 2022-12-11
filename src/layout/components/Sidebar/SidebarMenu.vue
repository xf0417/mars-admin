<template>
    <el-menu :collapse="!$store.getters.sidebarOpened" 
    :default-active="activeMenu" 
    :unique-opened="true"
    default-active="2" 
    :background-color="$store.getters.cssVar.menuBg" 
    :text-color="$store.getters.cssVar.menuText" 
    :active-text-color="$store.getters.cssVar.menuActiveText" router>
        <SideBarItem v-for="item in routes" :key="item.path" :route="item" />
        <!-- 具体菜单 -->

    </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SideBarItem from './SideBarItem.vue'

const router = useRouter()
const routes = computed(() => {
    const filterRoutes = filterRouters(router.getRoutes())
    return generateMenus(filterRoutes)
})
console.log(JSON.stringify(routes.value))

const route = useRouter()
const activeMenu = computed(() => {
    const { path } = route
    return path
})

</script>

<style lang="scss" scoped>

</style>