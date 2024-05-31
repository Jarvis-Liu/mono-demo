<template>
  <div class="h-full w-full flex flex-col">
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </router-view>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style></style>
