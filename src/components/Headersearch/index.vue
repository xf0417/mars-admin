<template>
  <div class="header-search" :class="{ show: isShow }" @click.stop="onShowClick">
    <svg-icon id="guide-search" class-name="search-icon" icon="search" />
    <el-select ref="headerSearchSelectRef" class="header-search-select" v-model="search" filterable default-first-option
      remote :remote-method="querySearch" placeholder="search" @change="onSelectChange">
      <el-option v-for="option in searchOptions" :key="option.item.path" :label="option.item.title.join('>')" :value="option.item"></el-option>
    </el-select>
  </div>
</template>
  
<script setup>
import { ref, computed,watch } from 'vue'
import { filterRouters } from '@/utils/route'
import { useRouter } from 'vue-router'
import Fuse from 'fuse.js'
import { generateRoutes } from './FuseData'
import { watchSwitchLang } from '@/utils/i18n'

//数据源
const router = useRouter()
let searchPool = computed(() => {
  const routes = filterRouters(router.getRoutes());
  return generateRoutes(routes)
})


//搜索库相关
let fuse
const initFuse = searchPool => {
  fuse = new Fuse(searchPool, {
  //优先级
  shouldSort: true,
  //匹配长度
  minMatchCharLength: 1,
  //列表
  keys: [
    {
      name: 'title',
      weight: 0.7
    },
    {
      name: 'path',
      weight: 0.3

    }
  ]
})
}
initFuse(searchPool.value)


//控制search展示
const isShow = ref(false)
const onShowClick = () => {
  isShow.value = !isShow.value
}

watch(isShow, val => {
  if(val){
    headerSearchSelectRef.value.focus()
    document.body.addEventListener('click',onClose)
  }else{
    document.body.removeEventListener('click',onClose)
  }
})
//关闭时间
const headerSearchSelectRef = ref(null)
const onClose = () =>{
  headerSearchSelectRef.value.blur()
  isShow.value = false
  searchOptions.value = []
}

//search相关
const search = ref('')

const searchOptions = ref([])
const querySearch = query => {
  if(query !== ''){
    searchOptions.value = fuse.search(query)
  }else{
    searchOptions.value = []
  }
}

const onSelectChange = (val) => {
  router.push(val.path)
}

watchSwitchLang(() => {
  searchPool = computed(() => {
  const routes = filterRouters(router.getRoutes());
  return generateRoutes(routes)
})
initFuse(searchPool.value)
})

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