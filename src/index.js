import "./styles/index.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/main.scss";
import "./styles/navbar.scss";
import "./styles/searchbar.scss";
import "./styles/accordion.scss";
import "./styles/reviews.scss";
import "./styles/buyField.scss";
import "./styles/phoneField.scss";
import "./styles/productList.scss";
import "./styles/slider.scss";
import "./styles/characteristic.scss";
import "./styles/basketBox.scss";
import "./styles/headerTopMenu.scss";
import "./styles/sprite.scss";
import { createHeader } from "./scripts/Header/Header.js";
import { createFooter } from "./scripts/Footer/Footer.js";
import { createMain } from "./scripts/Main/Main.js";

const header = document.createElement("header");
document.body.appendChild(header);
header.classList.add("global-header");
createHeader(header);

const main = document.createElement("main");
document.body.appendChild(main);
main.classList.add("global-main");
createMain(main);

const footer = document.createElement("footer");
document.body.appendChild(footer);
footer.classList.add("global-footer");
createFooter(footer);
