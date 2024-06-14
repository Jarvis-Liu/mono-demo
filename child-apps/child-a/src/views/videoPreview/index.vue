<template>
  <div class="h-[500px] w-[500px]">
    下方会有一个视频
    <div id="video-player"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, readonly } from 'vue'
import Player from 'xgplayer'
import 'xgplayer/dist/index.min.css'

const videoOptions = readonly({
  id: 'video-player',
  url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4',
  height: '100%',
  width: '100%',
  lang: 'zh'
})

onMounted(() => {
  const player = new Player(videoOptions)
})
</script>

<style></style>
