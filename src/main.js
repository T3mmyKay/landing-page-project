import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MotionPlugin } from "@vueuse/motion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {faTwitter,faFacebookSquare} from "@fortawesome/free-brands-svg-icons";

library.add(faBars, faChevronDown,faTwitter,faFacebookSquare)

createApp(App).use(MotionPlugin).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
