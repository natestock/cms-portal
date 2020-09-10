import VueRouter from "vue-router";

import RootNavigation from '../../ui/layouts/RootNavigation.vue'

const routes = [
    { path: '/', component: RootNavigation }
]

const router = new VueRouter({ mode: 'history', routes });

export default router;