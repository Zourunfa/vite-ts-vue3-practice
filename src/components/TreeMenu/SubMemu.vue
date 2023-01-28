<script setup lang="ts" name="SubMenu">
import { ref } from 'vue';
const isSubDisplay = ref(false);
const showSubmenu = () => {
  isSubDisplay.value = true;
};

const offSubmenu = () => {
  isSubDisplay.value = false;
};
</script>
<template>
  <div class="sub-menu" @mouseenter="showSubmenu" @mouseleave="offSubmenu">
    <div class="title">
      <slot name="title"></slot>
      <span class="icon">&gt;</span>
    </div>
    <div class="sub-item" v-show="isSubDisplay">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sub-menu {
  position: relative;

  .title {
    position: relative;
    height: 50px;
    line-height: 50px;
    text-align: center;

    .icon {
      position: absolute;
      top: 0;
      right: 15px;
    }
  }

  .sub-item {
    position: absolute;
    left: 100%;
    top: 0;
    width: 100%;
    background-color: #333;
  }
}
</style>
