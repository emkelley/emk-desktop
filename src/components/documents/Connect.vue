<script lang="ts" setup>
import DragWindow from "../global/DragWindow.vue";

const links = [
  {
    name: "GitHub",
    url: "https://github.com/emkelley",
    icon: "fa-github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ericmkelley",
    icon: "fa-linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/0NEGUYY",
    icon: "fa-twitter",
  },
  {
    name: "Behance",
    url: "http://be.net/emkelley",
    icon: "fa-behance",
  },
  {
    name: "CodePen",
    url: "https://codepen.com/emkelley",
    icon: "fa-codepen",
  },
];
</script>

<template>
  <drag-window>
    <template v-slot:header>
      <i class="fa-duotone fa-notebook mr-2" />Follow me! - Noteview
    </template>
    <template v-slot:main>
      <div
        class="flex flex-row items-center justify-center align-middle text-gray-300"
      >
        <a
          v-for="item in links"
          :key="item.name"
          :href="item.url"
          target="_blank"
          rel="noreferrer"
          :name="item.name"
          class="transition hover:text-indigo-400"
        >
          <i class="fab px-4 fa-xl rainbow" :class="item.icon" />
        </a>
      </div>
    </template>
  </drag-window>
</template>

<style lang="scss" scoped></style>
