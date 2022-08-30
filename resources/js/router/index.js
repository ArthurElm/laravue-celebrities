import { createRouter, createWebHistory } from "vue-router";
import StarIndex from "../components/StarIndex.vue";

const routes = [
    {
        path: "/",
        name: "welcome",
        component: StarIndex,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
