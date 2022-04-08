import { createApp } from "vue";
import App from "./App.vue";
import "./styles/index.css";
import VueClickAway from "vue3-click-away";

createApp(App).use(VueClickAway).mount("#app");
