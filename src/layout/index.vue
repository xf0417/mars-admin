<template>
    <div class="app-wrapper" :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']">
        <!--左侧menu-->
        <Sidebar id="guide-sidebar" class="sidebar-container"
        :style="{backgroundColor: $store.getters.cssVar.menuBg}"/>
        <div class="main-container">
            <div class="fixed-header">
                <!--顶部navbar-->
                <navbar />
                <!-- tags -->
                <tags-view id="guide-tags"></tags-view>
            </div>
            <!--内容-->
            <app-main />
        </div>
    </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'
import TagsView from '@/components/TagsView/index.vue'
import variables from '@/styles/variables.module.scss'
import {} from 'vue'


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
    transition: width 0.28s;

}
.hideSidebar .fixed-header {
    width:calc(100% - #{$hideSideBarWidth}) ;
}

</style>