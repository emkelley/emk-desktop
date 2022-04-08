<script lang="ts" setup>
import DragWindow from "../global/DragWindowBrowser.vue";
</script>

<template>
  <drag-window src="https://github.dev/emkelley/emk-desktop">
    <template v-slot:header>
      <i class="fak fa-vscode mr-2"></i>[Preview] README.md - emk-desktop
      [GitHub] - Visual Studio Code - GitHub
    </template>
  </drag-window>
</template>

<style lang="scss" scoped></style>
