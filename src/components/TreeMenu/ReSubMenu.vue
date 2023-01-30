<script setup lang="ts" name="ReSubMenu">
import SubMenu from './SubMemu.vue';
import MenuItem from './MenuItem.vue';
import { defineProps } from 'vue';
import { MenuContext } from './data';

export interface Props {
  data: MenuContext;
}

const props = defineProps<Props>();
console.log(props);
</script>

<template>
  <!-- {{ props.data.title }} -->
  <SubMenu>
    <template #title>
      {{ props.data.title }}
    </template>
    <template v-for="child of props.data.children" :key="child.id">
      <menu-item v-if="!child.children">
        {{ child.title }}
      </menu-item>
      <ReSubMenu v-else :key="child.id" :data="child"></ReSubMenu>
    </template>
  </SubMenu>
</template>

<style lang="scss" scoped></style>
