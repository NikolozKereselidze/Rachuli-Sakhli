import { initialize, removeHome } from "./initialize";
import { initializeMenu, removeMenu } from "./menu";

export function renderPage() {
  const buttons = document.querySelectorAll(".nav-button");
  buttons.forEach((el) => {
    el.addEventListener("click", (page) => {
      if (page.target.textContent === "Home") {
        removeMenu();
        initialize();
      } else if (page.target.textContent === "Menu") {
        removeHome();
        initializeMenu();
      }
      renderPage();
    });
  });
}
