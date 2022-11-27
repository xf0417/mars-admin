<template>
    <el-menu 
    :uniqueOpened="true"
    default-actice="1"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-sub-menu index="1">
        <template #title>
            <i class="el-location"></i>
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
</script>

<style lang="scss" scoped>
    

</style>