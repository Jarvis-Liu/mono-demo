<template>
  <div class="flex h-full">
    <div class="w-[300px] bg-slate-300">
      <h1>HOME</h1>
      <div
        class="cursor-pointer inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        @click="handleOpen"
      >
        打开非微前端的child-a
      </div>
    </div>
    <div class="flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
const handleOpen = () => {
  window.open('http://localhost:8810/child/a/')
}
</script>

<style lang="less" scoped>
#main {
  height: 100vh;
}
</style>
