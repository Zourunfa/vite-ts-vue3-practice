<script setup lang="ts">
import { ref } from 'vue';
import Discover from './discover/index.vue';
// fetch('/api/get', { method: 'get' }).then((data) => {
//   console.log(data, '---data');
// });
const format = (percentage: number) =>
  percentage === 100 ? 'Full' : `${percentage}%`;
</script>

<template>
  <div class="box">
    <!-- <TreeMenu>
      <template v-for="item of MenuData" :key="item.id">
        <menu-item v-if="!item.children">{{ item.title }}</menu-item>
        <ReSubMenu :data="item" v-else></ReSubMenu>
      </template>
    </TreeMenu> -->
    <!-- 分页 -->
    <Discover />
  </div>
</template>

<style scoped lang="scss">
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}

// :deep(.el-progress-bar) {
//   // color: #999999;
//   width: 100px;
// }
</style>
