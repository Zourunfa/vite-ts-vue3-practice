<script setup lang="ts" name="Discover">
import axios from 'axios';
import { ref } from 'vue';

const tableData = ref<Array<any>>();
const currentPage = ref<number>(1);
const pageSize = ref(10);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);
const handleSizeChange = (val: number) => {
  // console.log(`${val} items per page`);
  pageSize.value = val;
  currentPage.value = 1;
};
const handleCurrentChange = (val: number) => {
  // console.log(`current page: ${val}`);
  currentPage.value = val;
};

axios
  .get('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    console.log(res);
    tableData.value = [...res.data];
  })
  .catch((err) => {
    console.log(err);
  });
</script>

<template>
  <div class="page-discover">
    <el-table
      :data="
        tableData?.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      "
      border
      style="width: 100%"
    >
      <el-table-column prop="userId" label="userId" width="180" />
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="title" label="title" />
    </el-table>

    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 50]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style scoped lang="scss"></style>
