<script lang="ts" setup>
import DragWindow from "../global/DragWindow.vue";
</script>

<template>
  <drag-window>
    <template v-slot:header>
      <i class="fa-duotone fa-notebook mr-2"></i>Welcome - Notepad
    </template>
    <template v-slot:main>
      <p class="font-bold text-xl">Welcome to my virtual desktop!</p>
      <p class="leading-relaxed tracking-wide">
        After seeing a number of sites, and more particularly
        <a
          target="_blank"
          rel="noreferrer"
          href="https://simone.computer/#/webdesktops"
          >this list</a
        >
        showing sites that resemble desktop operating systems, I decided to
        throw my hat in the ring and try to create my new portfolio website
        using the same ideas.
      </p>
      <br />
      <p class="leading-relaxed tracking-wide">
        This project was built using Vue 3, Typescript, TailwindCSS, and is
        hosted on
        <a target="_blank" rel="noreferrer" href="https://render.com">Render</a
        >. Still under development so come back later for new features!
      </p>
      <br />
      <p class="leading-relaxed tracking-wide">
        View the source code
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/emkelley/emk-desktop"
          >on GitHub</a
        >.
      </p>
    </template>
    <template v-slot:footer> Saved </template>
  </drag-window>
</template>

<style lang="scss" scoped></style>
