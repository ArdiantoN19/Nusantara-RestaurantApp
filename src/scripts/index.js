import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import App from "./views/app";
import swRegister from "./utils/sw-register";
import arrowUp from "./utils/arrowup";

// component
import "./views/components/app-bar";
import "./views/components/foot-bar";

const app = new App({
  button: document.querySelector(".toggle-menu"),
  drawer: document.querySelector(".drawer"),
  content: document.querySelector("#content"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});

document.addEventListener("DOMContentLoaded", async () => {
  arrowUp();
});
