<template>
  <div class="">
    {{$t('msg.test')}}
    <el-pagination
      :page-size="100"
      :small="small"
      layout="total, prev, pager, next"
      :total="1000"
    />
   <svg-icon icon="user"></svg-icon>
  </div>
</template>

<script setup>
import { } from 'vue'


</script>

<style lang="scss" scoped>
</style>