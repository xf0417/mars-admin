<template>
  <el-dialog :title="$t('msg.excel.title')" :model-value="modelValue" @close="closed" width="30%">
    <el-input v-model="excelName" :placeholder="$t('msg.excel.placeholder')"></el-input>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.excel.close') }}</el-button>
        <el-button type="primary" @click="onConfirm" :loading="loading">{{ $t('msg.excel.confirm') }}</el-button>
      </div>

    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { watchSwitchLang } from '@/utils/i18n'
import { getUserManageAllList } from '@/api/user-manage'
import { USER_RELATIONS } from './Export2ExcelConstants'
import { dateFilter } from '@/filters'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
const emits = defineEmits(['update:modelValue'])

const i18n = useI18n()
let exportDefaultName = i18n.t('msg.excel.defaultName')
const excelName = ref('')
excelName.value = exportDefaultName
watchSwitchLang(() => {
  exportDefaultName = i18n.t('msg.excel.defaultName')
  excelName.value = exportDefaultName

})

const loading = ref(false)
const onConfirm = async () => {
  loading.value = true
  //数据
  const allUser = (await getUserManageAllList()).list
  //导入工具包
  const excel = await import('@/utils/Export2Excel')
  const data = formatJson(USER_RELATIONS, allUser)
  excel.export_json_to_excel({
    //表头
    header:Object.keys(USER_RELATIONS),
    //数据
    data,
    //文件名
    filename: excelName.value || exportDefaultName
  })
  closed()
}
//传递的data数据必须是二维数组
const formatJson = (headers, rows) => {
  return rows.map(item => {
    return Object.keys(headers).map(key => {
      //角色需要特殊处理
      if(headers[key] === 'role'){
        const roles = item[headers[key]]
        return JSON.stringify(roles.map(role => role.title))
      }
      //时间
      if(headers[key] === 'openTime'){
        return dateFilter(item[headers[key]])
      }
      return item[headers[key]]
    })
  })
}
//关闭
const closed = () => {
  emits('update:modelValue', false)
}
</script>

<style lang="scss" scoped>

</style>