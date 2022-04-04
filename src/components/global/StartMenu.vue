<script lang="ts" setup></script>

<template>
  <section
    id="start"
    class="absolute bottom-[40px] min-w-96 bg-slate-300 bg-opacity-90 z-99 rounded-tr-lg shadow-xl flex flex-row"
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

    <section class="p-4">
      <p class="text-sm pb-2">Documents</p>
      <ul>
        <li class="font-bold border-l-4 pl-2 border-indigo-400">
          Recent Projects
        </li>
        <li>Who I've Done Work For</li>
        <li>Samurai Zero</li>
        <li>Games</li>
        <li>Welcome.txt</li>
        <li>AboutMe.txt</li>
        <li>FollowMe.txt</li>
      </ul>
    </section>

    <section class="p-4">
      <p class="text-sm pb-2">Recent Projects</p>
      <ul>
        <li>Healthy Michigan Dental</li>
        <li>VIZOR Scoreboards</li>
        <li>Samurai Zero</li>
        <li>Midnight Synth</li>
      </ul>
    </section>
  </section>
</template>
<style lang="scss" scoped></style>
