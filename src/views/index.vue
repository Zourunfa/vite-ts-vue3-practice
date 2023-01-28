<script setup lang="ts">
import TreeMenu from './../components/TreeMenu/index.vue';
import MenuItem from '../components/TreeMenu/MenuItem.vue';
import SubMenu from '../components/TreeMenu/SubMemu.vue';
// fetch('/api/get', { method: 'get' }).then((data) => {
//   console.log(data, '---data');
// });

interface MenuContext {
  id: string;
  title: string;
  children?: Array<MenuContext>;
}
const MenuData: MenuContext[] = [
  {
    id: '1',
    title: '菜單1',
  },
  {
    id: '2',
    title: '菜單2',
  },
  {
    id: '3',
    title: '菜單3',
    children: [
      {
        id: '3-1',
        title: '菜單1',
        children: [
          {
            id: '3-1-1',
            title: '菜單1',
          },
          {
            id: '3-1-2',
            title: '菜單1',
          },
          {
            id: '3-1-3',
            title: '菜單1',
          },
        ],
      },
      {
        id: '3-1',
        title: '菜單2',
      },
    ],
  },
  {
    id: '4',
    title: '菜單4',
  },
  {
    id: '5',
    title: '菜單5',
  },
];
</script>

<template>
  <div class="box">
    <TreeMenu>
      <template v-for="item of MenuData">
        <menu-item v-if="!item.children" :key="item.id">{{
          item.title
        }}</menu-item>

        <SubMenu v-else :key="`sub-${item.id}`">
          <template #title>
            {{ item.title }}
          </template>
          <template v-for="child of item.children" :key="child.id">
            <menu-item>
              {{ child.title }}
            </menu-item>
          </template>
        </SubMenu>
      </template>
    </TreeMenu>
  </div>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
