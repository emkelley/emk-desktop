<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { nanoid } from "nanoid";

const emit = defineEmits(["closeWindow"]);

const props = defineProps({
  offsetLeft: {
    type: String,
    default: 0,
  },
  offsetTop: {
    type: String,
    default: 0,
  },
  src: {
    type: String,
    default: "",
  },
});

const windowID = nanoid();
let positions = reactive({
  clientX: 100,
  clientY: 100,
  movementX: 0,
  movementY: 0,
});

const dragMouseDown = (event: MouseEvent) => {
  event.preventDefault();
  positions.clientX = event.clientX;
  positions.clientY = event.clientY;
  document.onmousemove = elementDrag;
  document.onmouseup = closeDragElement;
};

const elementDrag = (event: MouseEvent) => {
  event.preventDefault();
  let curWindow = document.getElementById(windowID);
  if (!curWindow) return;

  positions.movementX = event.clientX - positions.clientX;
  positions.movementY = event.clientY - positions.clientY;
  positions.clientX = event.clientX;
  positions.clientY = event.clientY;
  curWindow.style.left = `${clamp(
    curWindow.offsetLeft + positions.movementX
  )}px`;
  curWindow.style.top = `${clamp(curWindow.offsetTop + positions.movementY)}px`;
  console.log({
    top: curWindow.offsetTop,
    left: curWindow.offsetLeft,
    bottom: curWindow.offsetTop + curWindow.offsetHeight,
    right: curWindow.offsetLeft + curWindow.offsetWidth,
  });
};

const closeDragElement = () => {
  document.onmouseup = null;
  document.onmousemove = null;
};

const setInitialPosition = () => {
  let curWindow = document.getElementById(windowID);
  if (!curWindow) return;
  curWindow.style.left = props.offsetLeft;
  curWindow.style.top = props.offsetTop;
};

const clamp = (number: number) => {
  if (number < 0) return 0;
  if (number > window.innerWidth) return window.innerWidth;
  return number;
};

onMounted(() => {
  setInitialPosition();
});
</script>
<template>
  <div :id="`${windowID}`" class="window-container">
    <div id="draggable-header" @mousedown="dragMouseDown">
      <div class="select-none">
        <slot name="header"></slot>
      </div>

      <div class="flex flex-row text-white cursor-pointer">
        <span @click="emit('closeWindow')">
          <i class="icn fa-solid fa-xmark px-2"></i>
        </span>
      </div>
    </div>
    <iframe
      class="w-full h-full"
      :src="src"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <div
      v-if="src"
      class="p-1 text-xs bg-gray-100 border-t border-gray-200 rounded-b resize"
    >
      {{ src }} -
      <a :href="src" target="_blank" rel="noreferrer">
        open in your own browser
      </a>
    </div>
  </div>
</template>

<style scoped>
.window-container {
  @apply bg-white bg-opacity-75 backdrop-blur-md text-black  w-4/5 max-w-[2000px] aspect-video min-w-['600px'] rounded shadow-lg absolute z-10;
}

#draggable-header {
  z-index: 10;
  @apply cursor-move px-2 py-1 bg-slate-800 text-white h-8 rounded-t flex flex-row justify-between items-center;
}
.icn {
  @apply hover:text-indigo-300 transition;
}
</style>
