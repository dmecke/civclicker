import Vue from 'vue';
import VueRouter from 'vue-router';

import Landingpage from './page/Landingpage.vue';
import Game from './page/Game.vue';

Vue.use(VueRouter);

let routes = [
    { path: '/', component: Landingpage },
    { path: '/game', component: Game },
];

let router = new VueRouter({ routes });

export default router;
