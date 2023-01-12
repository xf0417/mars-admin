<template>
  <div class="">
    <el-card>
      <el-table 
      :data="allPermisson" 
      style="width:100%" 
      border 
      row-key="id" 
      default-expand-all 
      :tree-props="{children:'children',hasChildren: 'hasChildren'}"
      >
    <el-table-column 
    prop="permissionName" 
    :label="$t('msg.permission.name')"
    width="180">
    </el-table-column>
    <el-table-column 
    prop="permissionMark" 
    :label="$t('msg.permission.mark')"
    width="180">
    </el-table-column>
    <el-table-column 
    prop="permissionDesc" 
    :label="$t('msg.permission.desc')">
    </el-table-column>
    </el-table>
    </el-card>
  </div>
 
</template>

<script setup>
import { ref } from 'vue'
import { permissionList } from '@/api/permission'
import { watchSwitchLang } from '@/utils/i18n'

const allPermisson =ref([])
const getPermissonList = async () => {
  allPermisson.value = await permissionList()
}
getPermissonList()
watchSwitchLang(getPermissonList)
</script>

<style lang="scss" scoped>
</style>