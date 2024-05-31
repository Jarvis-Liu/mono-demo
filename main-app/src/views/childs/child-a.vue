<template>
  <micro-app
    class="h-full"
    name="appname-a"
    :url="url"
    :data="microAppData"
    @created="handleCreate"
    @beforemount="handleBeforeMount"
    @mounted="handleMount"
    @unmount="handleUnmount"
    @error="handleError"
    @datachange="handleDataChange"
    iframe
    clear-data
  ></micro-app>
</template>

<script lang="ts" setup>
import { EventCenterForMicroApp } from '@micro-zoe/micro-app'
import { ref, reactive } from 'vue'

// @ts-ignore 因为vite子应用关闭了沙箱，我们需要为子应用appname-vite创建EventCenterForMicroApp对象来实现数据通信
window.eventCenterForA = new EventCenterForMicroApp('appname-a')

const url = `http://localhost:8810/child/a/`
const microAppData = ref({})

const handleCreate = () => {
  console.log('child-a 创建了')
}

const handleBeforeMount = () => {
  console.log('child-a 即将被渲染')
}

const handleMount = () => {
  console.log('child-a 已经渲染完成')
}

const handleUnmount = () => {
  console.log('child-a 卸载了')
}

const handleError = () => {
  console.log('child-a 加载出错了')
}

const handleDataChange = (e: CustomEvent) => {
  console.log('来自子应用 child-a 的数据:', e.detail.data)
}
</script>

<style></style>
