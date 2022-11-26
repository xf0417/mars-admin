<template>
    <div class="app-wrapper">
        <!--左侧menu-->
        <Sidebar class="sidebar-container"></Sidebar>
        <div class="main-container">
            <div class="fixed-header">
                <!--顶部navbar-->
                <navbar />
            </div>
            <!--内容-->
            <app-main></app-main>
        </div>
    </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import variables from '@/styles/variables.module.scss'
import {} from 'vue'

console.log(variables)

</script>

<style lang="scss" scoped>
// @import '@/styles/mixin.module.scss';
@import '@/styles/variables.module.scss';
@import '@/styles/sidebar.module.scss';

.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
}
.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
}

</style>