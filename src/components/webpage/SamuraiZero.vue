<script lang="ts" setup>
import DragWindow from "../global/DragWindowBrowser.vue";
</script>

<template>
  <drag-window src="https://samuraizero.com">
    <template v-slot:header>
      <i class="fa-duotone fa-notebook mr-2"></i>Samurai Zero - samuraizero.com
    </template>
  </drag-window>
</template>

<style lang="scss" scoped></style>
