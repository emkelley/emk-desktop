<script lang="ts" setup>
import DragWindow from "../global/DragWindow.vue";
</script>

<template>
  <drag-window>
    <template v-slot:header>
      <i class="fa-duotone fa-notebook mr-2"></i>Hello There! - Notepad
    </template>
    <template v-slot:main>
      <p class="text-sm font-bold">Hey there, I'm</p>
      <h1 class="text-4xl font-bold rainbow pb-4">Eric Kelley</h1>
      <p class="leading-relaxed tracking-wide">
        From payment processing to network management, I build powerful, elegant
        web applications that customers love to use. Currently, I’m currently
        helping software development stay human at
        <a href="https://dencap.com/" target="_blank" rel="noreferrer">
          DENCAP Dental.
        </a>
      </p>
      <br />
      <p class="leading-relaxed tracking-wide">
        In 2018, I co-founded
        <a href="https://neointeractive.dev/" target="_blank" rel="noreferrer">
          Neo Interactive
        </a>
        - an independent video game studio currently developing our debut title,
        <a href="https://samuraizero.com/" target="_blank" rel="noreferrer"
          >Samurai Zero</a
        >; a third-person arena hack-n-slash game set in the beautiful science
        fantasy world of Edo.
      </p>
    </template>
    <template v-slot:footer> Saved </template>
  </drag-window>
</template>

<style lang="scss" scoped></style>
