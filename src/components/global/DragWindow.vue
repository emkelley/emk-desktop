<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
import { nanoid } from "nanoid";

const props = defineProps({
  offsetLeft: {
    type: String,
    default: 0,
  },
  offsetTop: {
    type: String,
    default: 0,
  },
  footer: {
    type: Boolean,
    default: false,
    required: false,
  },
});
const emit = defineEmits(["closeWindow"]);

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
  curWindow.style.left = `${clampToWindowBounds(
    curWindow.offsetLeft + positions.movementX
  )}px`;
  curWindow.style.top = `${clampToWindowBounds(
    curWindow.offsetTop + positions.movementY
  )}px`;
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
onMounted(() => {
  setInitialPosition();
});

const clampToWindowBounds = (number: number) => {
  if (number < 0) return 0;
  if (number > window.innerWidth) return window.innerWidth;
  return number;
};

let maximized = ref(false);
let minimized = ref(false);
</script>
<template>
  <div
    :id="`${windowID}`"
    class="window-container"
    :class="{ 'w-full h-full': maximized }"
  >
    <div id="draggable-header" @mousedown="dragMouseDown">
      <div class="select-none">
        <slot name="header">{{ maximized }}</slot>
      </div>

      <div
        class="flex flex-row text-white cursor-pointer"
        @click="maximized == true"
      >
        <span v-if="minimized" @click="minimized = false">
          <i class="icn fa-solid fa-expand-wide px-2" />
        </span>
        <span v-if="!minimized" @click="minimized = true">
          <i class="icn fa-solid fa-compress px-2" />
        </span>
        <span @click="emit('closeWindow')">
          <i class="icn fa-solid fa-xmark px-2"></i>
        </span>
      </div>
    </div>
    <div v-if="!minimized" class="p-3">
      <slot name="main" class="p-3"></slot>
    </div>
    <div
      v-if="footer"
      class="p-1 text-xs bg-gray-100 border-t border-gray-200 rounded-b resize"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.window-container {
  @apply bg-white bg-opacity-75 backdrop-blur-md text-slate-700 w-96 rounded shadow-lg absolute z-10;
}
#draggable-header {
  z-index: 10;
  @apply cursor-move px-2 py-1 bg-slate-800 text-white h-8 rounded-t flex flex-row justify-between items-center;
}
.icn {
  @apply hover:text-indigo-300 transition;
}
</style>
