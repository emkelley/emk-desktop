<script lang="ts" setup>
import DragWindow from "../global/DragWindowBrowser.vue";
</script>

<template>
  <drag-window src="https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1">
    <template v-slot:header>
      <i class="fab fa-youtube mr-2"></i>
      Rick Astley - Never Gonna Give You Up (Official Music Video) - youtube.com
    </template>
  </drag-window>
</template>

<style lang="scss" scoped></style>
