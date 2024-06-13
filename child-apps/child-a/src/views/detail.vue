<template>
  <div>
    这里是child-a的app，下方应该会有一个doc文档
    <div class="h-full" ref="$docx"></div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { renderAsync } from '@/plugins/docx-preview-custom.min.mjs'
const $docx = ref()
const fileUrl =
  'https://501351981.github.io/vue-office/examples/dist/static/test-files/test.docx'

onMounted(() => {
  axios.get(fileUrl, { responseType: 'arraybuffer' }).then((res) => {
    renderAsync(res.data, $docx.value).then(() => console.log('docx: finished'))
  })
})
</script>

<style scoped></style>
