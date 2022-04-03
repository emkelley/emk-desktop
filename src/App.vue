<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getCurrentTime, getCurrentDate } from "./utils/datetime";
import HelloThere from "./components/documents/HelloThere.vue";
import Connect from "./components/documents/Connect.vue";
import SamuraiZero from "./components/webpage/SamuraiZero.vue";
let currentTime = ref(getCurrentTime());
let currentDate = getCurrentDate();

onMounted(() => {
  setInterval(() => {
    currentTime.value = getCurrentTime();
  }, 1000);
});

let win = ref<string[]>([]);

const closeWindow = (name: string) => {
  console.log("closing window", name);

  win.value = win.value.filter((item) => item !== name);
  console.log(win.value);
};
</script>

<template>
  <main class="flex flex-col h-screen overflow-hidden">
    <section id="desktop" class="grow bg-slate-900 p-4 overflow-hidden">
      <div class="flex flex-col w-28 select-none text-center">
        <article @dblclick="win.push('hello')" class="desktop-icon">
          <i class="fa-solid fa-2x fa-file-lines pb-2"></i>
          <p class="text-sm">HelloWorld.txt</p>
        </article>
        <article @dblclick="win.push('connect')" class="desktop-icon">
          <i class="fa-solid fa-2x fa-file-lines pb-2"></i>
          <p class="text-sm">FollowMe.txt</p>
        </article>
        <article @dblclick="win.push('samurai')" class="desktop-icon">
          <i class="fak fa-3x fa-flower pb-2"></i>
          <p class="text-sm">Samurai Zero Website</p>
        </article>
      </div>
    </section>
    <transition name="fade" mode="out-in">
      <hello-there
        v-if="win.includes('hello')"
        offset-left="250px"
        offset-top="200px"
        @close-window="closeWindow('hello')"
      />
    </transition>
    <transition name="fade" mode="out-in">
      <connect
        v-if="win.includes('connect')"
        offset-left="675px"
        offset-top="200px"
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

    <footer id="taskbar">
      <nav class="flex flex-col items-center justify-middle text-xl">
        <div
          class="flex items-center align-middle hover:bg-indigo-400 text-center p-4 transition cursor-pointer"
          @click="win.push('start')"
        >
          <i class="fak fa-ek"></i>
        </div>
      </nav>

      <p>
        Made with ♥ and ☕ by
        <a href="https://emk.dev" class="text-indigo-200">Eric Kelley</a> -
        MMXXII
      </p>
      <div id="clock" class="flex flex-col text-center p-1">
        <p>{{ currentTime }}</p>
        <p>{{ currentDate }}</p>
      </div>
    </footer>
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
  @apply text-white text-xs bg-gray-900 bg-opacity-75 backdrop-blur-md px-3 flex items-center justify-between rounded-t-lg bottom-0 absolute w-full z-10;
  overflow: hidden;
}
.desktop-icon {
  @apply flex flex-col items-center text-white mb-2 p-2  cursor-pointer hover:bg-indigo-300 hover:bg-opacity-10 border border-transparent hover:border-indigo-200 transition;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 350ms;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
