<script setup lang="ts" name="MenuItem"></script>

<template>
  <div class="menu-item">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.menu-item {
  height: 50px;
  text-align: center;
  line-height: 50px;
}
</style>
