<template>
    <div class="navbar">
        <!-- 汉堡按钮 -->
        <div class="hamburger-container" >
            <hamburger/>
        </div>
            <Breadcrumb id="guide-breadcrumb" class="breadcrumb-container" />
        <div class="right-menu">
            <Guide class="right-menu-item hover-effect"/>
            <Headersearch class="right-menu-item hover-effect"/>
            <Screenfull class="right-menu-item hover-effect" />
            <ThemePicker class="right-menu-item hover-effect" />
            <lang-select class="right-menu-item hover-effect" />
            <!-- 头像 -->
            <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                    <el-avatar shape="square" :size="40" :src="rightLogo">
                    </el-avatar>
                    <el-icon>
                        <Tools />
                    </el-icon>
                </div>
                <template #dropdown>
                    <el-dropdown-menu class="user-dropdown">
                        <router-link to="/">
                            <el-dropdown-item>{{ $t('msg.navBar.home') }}</el-dropdown-item>
                        </router-link>
                        <a target="_blank" href="#">
                            <el-dropdown-item>{{ $t('msg.navBar.course') }}
                            </el-dropdown-item>
                        </a>
                        <el-dropdown-item divided @click="logout">{{ $t('msg.navBar.logout') }}</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { } from 'vue'
import rightLogo from '@/assets/rightLogo.png'
import { useStore } from 'vuex'
import Hamburger from '@/components/Hamburger/index.vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import LangSelect from '@/components/LangSelect/index.vue'
import ThemePicker from '@/components/ThemeSelect/index.vue'
import Screenfull from '@/components/Screenfull/index.vue'
import Headersearch from '@/components/Headersearch/index.vue'
import Guide from '@/components/Guide/index.vue'

const store = useStore()
const logout = () => {
    store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .hamburger-container {
        line-height: 46px;
        height: 100%;
        float: left;
        cursor: pointer;
        transition: background 0.5s;

        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
    }

    .breadcrumb-container {
        float: left;
    }

    .right-menu {
        display: flex;
        align-items: center;
        float: right;
        padding-right: 16px;

        :deep .right-menu-item {
            display: inline-block;
            padding: 0 18px 0 0;
            font-size: 24px;
            color: #5a5e66;
            vertical-align: text-bottom;

            &.hover-effect {
                cursor: pointer;
            }
        }

        :deep .avatar-container {
            cursor: pointer;

            .avatar-wrapper {
                margin-top: 5px;
                position: relative;

                .el-avatar {
                    --el--avatar-background-color: none;
                    margin-right: 12px;

                    .el-tools {
                        background-image: url(@/assets/tools.png) center no-repeat;
                        background-size: cover;

                    }
                }
            }
        }
    }
}
</style>
