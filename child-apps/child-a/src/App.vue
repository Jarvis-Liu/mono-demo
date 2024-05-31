<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import VueOfficeDocx from '@vue-office/docx'
// import { renderAsync } from 'docx-preview'
// import axios from 'axios'

const $docx = ref()
const fileUrl =
  'https://501351981.github.io/vue-office/examples/dist/static/test-files/test.docx'

// onMounted(() => {
//   axios.get(fileUrl, { responseType: 'arraybuffer' }).then((res) => {
//     renderAsync(res.data, $docx.value).then(() => console.log('docx: finished'))
//   })
// })
</script>

<template>
  这里是child-a的app，下方应该会有一个doc文档
  <!-- <div class="h-full" ref="$docx"></div> -->
  <vue-office-docx class="h-full" :src="fileUrl" />
</template>

<style lang="less"></style>
