<template>
  <div class="my-container">
    <el-row>
      <el-col :span="6">
          <project-card class="project-card" :feature="featureData"></project-card>
      </el-col>
      <el-col :span="18">
        <el-card>
          <el-tabs v-model="activeName">
            <el-tab-pane :label="$t('msg.profile.feature')" name="feature">
              <Feature></Feature>
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.chapter')" name="chapter">
              <Chapter></Chapter>
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.author')" name="author">
              <Author></Author>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from './components/ProjectCard.vue'
import Feature from './components/Feature.vue'
import Chapter from './components/Chapter.vue'
import Author from './components/Author.vue'
import {feature} from '@/api/user.js'

const activeName = ref('feature')

const featureData = ref([])
const getFeatureData = async() => {
  featureData.value = await feature()
}
getFeatureData()
</script>

<style lang="scss" scoped>
.project-card {
  margin-right: 20px;
}
</style>