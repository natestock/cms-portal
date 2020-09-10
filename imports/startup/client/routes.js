import VueRouter from "vue-router";

import RootNavigation from '../../ui/layouts/RootNavigation.vue';
import JobsList from '../../ui/pages/JobsList.vue';
import JobDashboard from '../../ui/pages/JobDashboard.vue';

const routes = [
    { path: '/', component: RootNavigation, children: [
        { path: '/', redirect: 'jobs' },
        { path: 'jobs', name: 'Jobs', component: JobsList },
        { path: 'jobs/:jobNumber', component: JobDashboard }
    ]}
]

const router = new VueRouter({ mode: 'history', routes });

export default router;