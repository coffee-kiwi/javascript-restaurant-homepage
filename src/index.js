import "./styles.css";
import { createHomepage } from "./homepage.js";
import { createMenuPage } from "./menu.js";
import { createAboutContact } from "./aboutcontact.js";

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

homeBtn.addEventListener("click", createHomepage);
menuBtn.addEventListener("click", createMenuPage);
aboutBtn.addEventListener("click", createAboutContact);

createHomepage();