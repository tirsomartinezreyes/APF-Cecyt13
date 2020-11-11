import Vue from "nativescript-vue";
import VueDevtools from 'nativescript-vue-devtools'

import Home from "./components/Home";

Vue.use(VueDevtools)

new Vue({
    render: h => h('frame', [h(Home)]),
}).$start();

