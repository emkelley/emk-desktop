<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getCurrentTime, getCurrentDate } from "./utils/datetime";
import HelloThere from "./components/HelloThere.vue";
import Connect from "./components/Connect.vue";
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
    <section id="desktop" class="grow bg-slate-900 p-4">
      <div class="flex flex-col w-24 select-none">
        <article
          @dblclick="win.push('hello')"
          class="flex flex-col items-center text-white mb-8"
        >
          <img
            src="https://via.placeholder.com/150"
            class="aspect-square w-16"
          />
          <p class="pt-1">HelloWorld.txt</p>
        </article>
        <article
          @dblclick="win.push('connect')"
          class="flex flex-col items-center text-white mb-8"
        >
          <img
            src="https://via.placeholder.com/150"
            class="aspect-square w-16"
          />
          <p class="pt-1">Contact.txt</p>
        </article>
      </div>
    </section>

    <hello-there
      v-if="win.includes('hello')"
      :initX="640"
      :initY="200"
      @close-window="closeWindow('hello')"
    />
    <connect
      v-if="win.includes('connect')"
      :initX="50"
      :initY="50"
      @close-window="closeWindow('connect')"
    />
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
}
#taskbar {
  @apply text-white text-xs bg-gray-900 px-3 flex items-center justify-between;
}
</style>
