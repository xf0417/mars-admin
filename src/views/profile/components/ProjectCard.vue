<template>

  <el-card class="user-container">
    <template #header>
      <div class="header">
        <span>{{ $t('msg.profile.introduce') }}</span>
      </div>
    </template>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb :src="rightLogo" height="100px" width="100px">
          <div>Hello</div>
          {{ $store.getters.userInfo.title }}
        </pan-thumb>
      </div>

      <div class="box-center">
        <div class="user-name text-center">
          {{ $store.getters.userInfo.username }}
        </div>
        <div class="user-role text-center text-muted">
          {{ $store.getters.userInfo.title }}
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { } from 'vue'
import PanThumb from '@/components/PanThumb/index.vue'
import rightLogo from '@/assets/rightLogo.png'
</script>

<style lang="scss" scoped>

</style>