<template>
    <el-sub-menu v-if="Array.isArray(route.children) && route.children.length > 0" :index="route.path">
        <template #title>
            <MenuItem :title="route.meta.title" :icon="route.meta.icon" />
        </template>
        <el-menu-item v-for="item in route.children" :key="item.path" :route="item" >
            
            <MenuItem :title="item.meta.title" :icon="item.meta.icon" />
        </el-menu-item>
        <!-- 循环渲染 -->
    </el-sub-menu>
    <el-menu-item v-else :index="route.path">
        <MenuItem :title="route.meta.title" :icon="route.meta.icon" />
    </el-menu-item>

</template>

<script setup>
import { defineProps } from 'vue'
import MenuItem from './MenuItem.vue'
defineProps({
    route: {
        type: Object,
        required: true
    }
})

</script>

<style lang="scss" scoped>

</style>