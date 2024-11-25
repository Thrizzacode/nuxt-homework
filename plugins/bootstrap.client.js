import { Modal } from "bootstrap/dist/js/bootstrap.bundle.min.js";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("Modal", (element) => new Modal(element));
});
