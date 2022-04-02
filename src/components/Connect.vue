<script lang="ts" setup>
import DragWindow from "./global/DragWindow.vue";
</script>

<template>
  <drag-window>
    <template v-slot:header>
      <i class="fa-duotone fa-notebook mr-2"></i>Connect with me - Notepad
    </template>
    <template v-slot:main>
      <div
        class="flex flex-row items-center justify-center align-middle text-gray-300"
      >
        <a
          href="https://github.com/emkelley"
          target="_blank"
          rel="noreferrer"
          name="GitHub"
          class="transition hover:text-indigo-400"
        >
          <i class="fab px-4 fa-xl rainbow fa-github"></i>
        </a>
        <a
          href="https://codepen.com/emkelley"
          target="_blank"
          rel="noreferrer"
          name="Codepen"
          class="transition hover:text-indigo-400"
        >
          <i class="fab px-4 fa-xl rainbow fa-codepen"></i>
        </a>
        <a
          href="http://be.net/emkelley"
          target="_blank"
          rel="noreferrer"
          name="Behance"
          class="transition hover:text-indigo-400"
        >
          <i class="fab px-4 fa-xl rainbow fa-behance"></i>
        </a>
        <a
          href="https://linkedin.com/in/ericmkelley"
          target="_blank"
          rel="noreferrer"
          name="LinkedIn"
          class="transition hover:text-indigo-400"
        >
          <i class="fab px-4 fa-xl rainbow fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/0NEGUYY"
          target="_blank"
          rel="noreferrer"
          name="Twitter"
          class="transition hover:text-indigo-400"
        >
          <i class="fab px-4 fa-xl rainbow fa-twitter"></i>
        </a>
      </div>
    </template>
  </drag-window>
</template>

<style lang="scss" scoped></style>
