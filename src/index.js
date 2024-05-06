import { initialize } from "./initialize";
import { createNav } from "./initialize";
import "./css/style.css";
import { renderPage } from "./renderPage";

createNav();
initialize();

renderPage();
