<script lang="ts" setup>
import { ref } from "vue";
const menuItems = [
  {
    name: "Recent Projects",
    type: "folder",
    icon: "fa-folder",
    items: [
      {
        name: "Samurai Zero",
        type: "webpage",
        icon: "fak fa-flower",
        url: "https://samurai-zero.netlify.app/",
      },
      {
        name: "Rick",
        type: "webpage",
        icon: "fab fa-youtube",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    ],
  },
  {
    name: "Open Source",
    type: "folder",
    icon: "fa-folder",
  },
  {
    name: "Blog Posts",
    type: "folder",
    icon: "fa-folder",
  },
  {
    name: "Samurai Zero",
    type: "folder",
    icon: "fa-folder",
  },
  {
    name: "Games",
    type: "folder",
    icon: "fa-folder",
  },
  {
    name: "Welcome.txt",
    type: "file",
    icon: "fa-file-text",
  },
  {
    name: "AboutMe.txt",
    type: "file",
    icon: "fa-file-text",
  },
  {
    name: "FollowMe.txt",
    type: "file",
    icon: "fa-file-text",
  },
];
const startItemActive = ref(0);
const startItemClick = (item: number) => {
  startItemActive.value = item;
};
</script>

<template>
  <section
    id="start"
    class="absolute bottom-[40px] min-w-96 bg-slate-300 bg-opacity-95 backdrop-blur-sm z-[998] rounded-tr-lg shadow-xl flex flex-row"
  >
    <section class="flex flex-col p-4">
      <div class="flex-grow"></div>
      <div class="h-24 flex flex-col justify-end items-center">
        <div
          class="bg-slate-500 w-6 h-6 text-white shadow-md rounded-full text-center select-none"
        >
          E
        </div>
        <i class="fa-regular fa-lg fa-gear py-4"></i>
        <i class="fa-regular fa-lg fa-power-off"></i>
      </div>
    </section>

    <section class="p-4 flex flex-col w-64">
      <p class="text-sm pb-2 font-bold">All Files</p>
      <article
        v-for="(item, index) in menuItems"
        :key="item.name"
        class="flex flex-row items-center p-2 shadow hover:bg-slate-300 transition mb-2 cursor-pointer"
        :class="{
          'bg-slate-500 text-white hover:bg-slate-500':
            startItemActive === index,
        }"
        @click="startItemClick(index)"
      >
        <i class="fa-solid mr-2" :class="item.icon" />
        <p class="text-sm select-none">{{ item.name }}</p>
      </article>
    </section>

    <section class="p-4 w-64">
      <p class="text-sm pb-2 font-bold">
        {{ menuItems[startItemActive].name }}
      </p>
      <article
        v-for="(item, index) in menuItems[startItemActive].items"
        :key="index"
        class="flex flex-row items-center p-2 shadow hover:bg-slate-300 transition mb-2"
      >
        <i class="fa-solid mr-2" :class="item.icon" />
        <p class="text-sm select-none">{{ item.name }}</p>
      </article>
    </section>
  </section>
</template>
<style lang="scss" scoped></style>
