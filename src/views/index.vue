<script setup lang="ts">
fetch('/api/get', { method: 'get' }).then((data) => {
  console.log(data, '---data');
});
</script>

<template>
  <div class="player-index">首页</div>
  <div class="box"></div>
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
