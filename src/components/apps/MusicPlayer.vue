<script lang="ts" setup>
import DragWindow from "../global/DragWindow.vue";
import { ref } from "vue";
import songs from "../../data/songs";

const randomIndex = () => {
  return Math.floor(Math.random() * songs.length);
};
const setCurrentSong = (index: number) => {
  currentSongIndex.value = index;
};
let currentSongIndex = ref(randomIndex());
</script>

<template>
  <drag-window>
    <template v-slot:header>
      <i class="fa-duotone fa-album-collection mr-2"></i>Music Player
    </template>
    <template v-slot:main>
      <iframe
        class="w-full aspect-video rounded-md overflow-hidden shadow-lg border-2 border-slate-600"
        :src="songs[currentSongIndex].url"
        frameborder="0"
        allow="autoplay;"
        allowfullscreen
      />
      <section>
        <div class="flex flex-row my-4">
          <div class="flex-1">
            <div class="flex flex-row items-center px-14">
              <div class="flex-1">
                <div class="text-sm font-bold">
                  {{ songs[currentSongIndex].name }}
                </div>
                <div class="text-xs text-gray-600">
                  {{ songs[currentSongIndex].artist }}
                </div>
              </div>
              <div
                class="flex-shrink-0 cursor-pointer"
                @click="currentSongIndex++"
              >
                <i class="fa-duotone fa-step-forward text-2xl" />
              </div>
            </div>
          </div>
        </div>

        <h3 class="font-bold pt-4">Song List</h3>
        <div
          v-for="(song, index) in songs"
          :key="index"
          class="flex flex-col mt-3 shadow px-2 py-1 bg-gray-100 rounded-md divide-yellow-400"
        >
          <div class="flex flex-row">
            <div class="flex-1">
              <div class="text-sm font-bold">
                {{ song.name }}
              </div>
              <div class="text-xs text-gray-600">
                {{ song.artist }}
              </div>
            </div>
            <div
              class="flex-shrink-0 cursor-pointer hover:text-indigo-600 flex items-center"
              @click="setCurrentSong(index)"
            >
              <i class="fa-duotone fa-circle-play" />
            </div>
          </div>
        </div>
      </section>
    </template>
    <template v-slot:footer> Saved </template>
  </drag-window>
</template>

<style lang="scss" scoped></style>
