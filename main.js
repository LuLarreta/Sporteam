import { createApp } from "vue";
import App from "./src/App.vue";
import router from "./src/router/router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUser, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faSignInAlt);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
