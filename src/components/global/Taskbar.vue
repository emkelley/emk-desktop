<template>
  <footer id="taskbar" class="z-[999]">
    <nav class="flex flex-col items-center justify-middle text-xl">
      <div
        class="flex items-center align-middle hover:bg-indigo-400 text-center p-2 transition cursor-pointer"
        @click="emits('clickStart')"
      >
        <i class="fak fa-ek"></i>
      </div>
    </nav>

    <p class="select-none">
      Made with ♥ and ☕ by
      <a href="https://emk.dev" class="text-indigo-200">Eric Kelley</a> - MMXXII
    </p>
    <div id="clock" class="flex flex-col text-center p-1">
      <p>{{ props.currentTime }}</p>
      <p>{{ props.currentDate }}</p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const props = defineProps({
  currentTime: {
    type: String,
    default: "---",
  },
  currentDate: {
    type: String,
    default: "---",
  },
});

const emits = defineEmits(["clickStart"]);
</script>

<style lang="scss" scoped></style>
