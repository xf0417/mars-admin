<template>
    <div class="app-wrapper">
        <!--左侧menu-->
        <sidebar class="sidebar-container" :style="{backgroundcolor: variable.menuBg}"></sidebar>
        <div class="main-sontainer">
            <div class="fix-header">
                <!--顶部navbar-->
                <navbar />
            </div>
        </div>
        <!--内容-->
        <app-main></app-main>
    </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain.vue'
import variables from '@/styles/variables.scss'
import {} from 'vue'

console.log(variables)


</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
}
.fix-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
}

</style>