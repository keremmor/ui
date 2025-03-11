import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";

// ✅ Soho Light Teması (Modern ve şık)
import Aura from "@primevue/themes/aura";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount("#app");
