import openGraph from './config/open-graph'

import "./sass/style.scss";

import Flare from "@lkmx/flare";

import DefaultLayout from "~/layouts/DefaultLayout.vue";

import AlertBar from "~/components/AlertBar.vue";
import NewHeader from "~/components/NewHeader.vue";

export default function(Vue, { router, head, isClient }) {
    openGraph.forEach(item => head.meta.push(item))

    // Set default layout as a global component
    Vue.component("DefaultLayout", DefaultLayout);
    Vue.component("AlertBar", AlertBar);
    Vue.component("NewHeader", NewHeader);

    Vue.use(Flare);
}