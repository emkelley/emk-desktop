<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
import { nanoid } from "nanoid";

const props = defineProps({
  initX: {
    type: Number,
    default: 0,
  },
  initY: {
    type: Number,
    default: 0,
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
  curWindow.style.left = `${curWindow.offsetLeft + positions.movementX}px`;
  curWindow.style.top = `${curWindow.offsetTop + positions.movementY}px`;
};
const closeDragElement = () => {
  document.onmouseup = null;
  document.onmousemove = null;
};
const setInitialPosition = () => {
  let curWindow = document.getElementById(windowID);
  if (!curWindow) return;
  curWindow.style.left = `${props.initX}px`;
  curWindow.style.top = `${props.initY}px`;
};
onMounted(() => {
  setInitialPosition();
});

let maximized = ref(false);
</script>
<template>
  <div
    :id="`${windowID}`"
    class="bg-white bg-opacity-75 backdrop-blur-md text-black min-w-72 w-96 rounded shadow-lg absolute z-10"
    :class="{ 'w-full h-full': maximized }"
  >
    <div
      id="draggable-header"
      class="bg-black text-white h-8 rounded-t flex flex-row justify-between items-center"
      @mousedown="dragMouseDown"
    >
      <div class="select-none">
        <slot name="header">{{ maximized }}</slot>
      </div>

      <div class="flex flex-row text-white" @click="maximized == true">
        <span>
          <i class="icn fa-solid fa-window-minimize px-2"></i>
        </span>
        <span v-if="maximized">
          <i @click="maximized = false" class="icn fa-solid fa-compress px-2" />
        </span>
        <span v-else>
          <i
            @click="maximized = true"
            class="icn fa-solid fa-expand-wide px-2"
          />
        </span>
        <span @click="emit('closeWindow')">
          <i class="icn fa-solid fa-xmark px-2"></i>
        </span>
      </div>
    </div>
    <div class="p-3">
      <slot name="main" class="p-3"></slot>
    </div>
    <!-- <div
      class="p-1 text-xs bg-gray-100 border-t border-gray-200 rounded-b resize"
    >
      <slot name="footer"></slot>
    </div> -->
  </div>
</template>

<style scoped>
#draggable-header {
  z-index: 10;
  @apply cursor-pointer px-2 py-1;
}
.icn {
  @apply hover:text-indigo-300 transition;
}
</style>
