<template>
    <div class="header-search" :class="{show: isShow}" @click.stop="onShowClick" >
        <svg-icon class-name="search-icon" icon="search" />
        <el-select 
        ref="headerSearchSelectRef" 
        class="header-search-select" 
        v-modle="search"
        filterable
        default-first-option
        remote
        :remote-method="querySearch"
        placeholder="search"
        @change="onSelectChange"
        >
        <el-option v-for="option in 5"
        :key="option"
        :label="option"
        :value="option"
        ></el-option>
    </el-select>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
//控制search展示
const isShow = ref(false)
const onShowClick = () => {
    isShow.value = !isShow.value
}
const search = ref('')

const querySearch = () => {
    console.log('querySearch')
}

const onSelectChange = () => {
    console.log('onSelectChange')
}
  </script>
  
  <style lang="scss" scoped>
  .header-search {
  font-size: 0 !important;
  :deep .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    :deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
  </style>