require("./bootstrap");

import { createApp } from "vue";
import router from "./router";
import StarIndex from "./components/StarIndex.vue";
createApp({ components: { StarIndex } }).use(router).mount("#app");
