<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getCurrentTime, getCurrentDate } from "./utils/datetime";

import StartMenu from "./components/global/StartMenu.vue";
import Taskbar from "./components/global/Taskbar.vue";

import Welcome from "./components/documents/Welcome.vue";
import AboutMe from "./components/documents/AboutMe.vue";
import Connect from "./components/documents/Connect.vue";
import MusicPlayer from "./components/apps/MusicPlayer.vue";
import SamuraiZero from "./components/webpage/SamuraiZero.vue";
import Rick from "./components/webpage/Rick.vue";

let currentTime = ref(getCurrentTime());
let currentDate = getCurrentDate();
let startVisible = ref(false);
let win = ref<string[]>(["welcome", "connect", "about"]);

onMounted(() => {
  setInterval(() => {
    currentTime.value = getCurrentTime();
  }, 1000);
});

const closeWindow = (name: string) => {
  win.value = win.value.filter((item) => item !== name);
};
</script>

<template>
  <main class="flex flex-col h-screen overflow-hidden">
    <section id="desktop" class="grow bg-slate-900 p-4 overflow-hidden">
      <aside class="flex flex-col w-28 select-none text-center">
        <article @dblclick="win.push('welcome')" class="desktop-icon">
          <i class="fa-solid fa-2x fa-file-lines pb-2"></i>
          <p class="text-sm">Welcome.txt</p>
        </article>
        <article @dblclick="win.push('about')" class="desktop-icon">
          <i class="fa-solid fa-2x fa-file-lines pb-2"></i>
          <p class="text-sm">AboutMe.txt</p>
        </article>
        <article @dblclick="win.push('connect')" class="desktop-icon">
          <i class="fa-solid fa-2x fa-file-lines pb-2"></i>
          <p class="text-sm">FollowMe.txt</p>
        </article>
        <article @dblclick="win.push('music')" class="desktop-icon">
          <i class="fa-solid fa-2x fa-album-collection pb-2"></i>
          <p class="text-sm">Music Player</p>
        </article>
        <article @dblclick="win.push('samurai')" class="desktop-icon">
          <i class="fak fa-3x fa-flower pb-2 text-red-400"></i>
          <p class="text-sm">Samurai Zero Website</p>
        </article>
        <article @dblclick="win.push('rick')" class="desktop-icon">
          <i class="fab fa-3x fa-youtube pb-2 text-red-400"></i>
          <p class="text-sm">dQw4w9WgXcQ</p>
        </article>
      </aside>
    </section>
    <transition name="fade" mode="out-in">
      <music-player
        v-if="win.includes('music')"
        offset-left="1000px"
        offset-top="100px"
        @close-window="closeWindow('music')"
      />
    </transition>
    <transition name="fade" mode="out-in">
      <welcome
        v-if="win.includes('welcome')"
        offset-left="200px"
        offset-top="100px"
        @close-window="closeWindow('welcome')"
      />
    </transition>
    <transition name="fade" mode="out-in">
      <about-me
        v-if="win.includes('about')"
        offset-left="600px"
        offset-top="100px"
        @close-window="closeWindow('about')"
      />
    </transition>
    <transition name="fade" mode="out-in">
      <connect
        v-if="win.includes('connect')"
        offset-left="200px"
        offset-top="525px"
        @close-window="closeWindow('connect')"
      />
    </transition>
    <transition name="fade" mode="out-in">
      <samurai-zero
        v-if="win.includes('samurai')"
        offset-left="100px"
        offset-top="50px"
        @close-window="closeWindow('samurai')"
      />
    </transition>
    <transition name="fade" mode="out-in">
      <rick
        v-if="win.includes('rick')"
        offset-left="100px"
        offset-top="50px"
        @close-window="closeWindow('rick')"
      />
    </transition>
    <transition name="slide" mode="out-in">
      <start-menu v-if="startVisible" />
    </transition>
    <taskbar
      @click-start="startVisible = !startVisible"
      :current-date="currentDate"
      :current-time="currentTime"
    />
  </main>
</template>

<style scoped>
#desktop {
  background: url("https://cdn.emk.dev/7%20-%207ZH2ify.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}
#taskbar {
  @apply text-white text-xs bg-gray-900 bg-opacity-75 backdrop-blur-md px-3 flex items-center justify-between bottom-0 absolute w-full z-10;
  overflow: hidden;
}
.desktop-icon {
  @apply flex flex-col items-center text-white mb-2 p-2  cursor-pointer hover:bg-indigo-300 hover:bg-opacity-10 border border-transparent hover:border-indigo-200 transition;
  text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.4), 0px 4px 6px rgba(0, 0, 0, 0.1),
    0px 9px 11px rgba(0, 0, 0, 0.1);
}
</style>
