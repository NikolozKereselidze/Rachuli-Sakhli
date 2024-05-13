import { initialize, removeHome } from "./initialize";
import { initializeMenu, removeMenu } from "./menu";
import { initializeReserve, removeReserve } from "./reserve";

export function renderPage() {
  const buttons = document.querySelectorAll(".nav-button");
  buttons.forEach((el) => {
    el.addEventListener("click", (page) => {
      if (page.target.textContent === "Home") {
        removeMenu();
        removeReserve();
        initialize();
      } else if (page.target.textContent === "Menu") {
        removeHome();
        removeReserve();
        initializeMenu();
      } else if (page.target.textContent === "Reserve") {
        removeHome();
        removeMenu();
        initializeReserve();
      }
      renderPage();
    });
  });
}
