import { createAddPostForm } from "./SearchBar.js";
import { createHeaderInfo } from "./createHeaderInfo.js";
import { createNavigationMenu } from "./createNavigationMenu.js";
import { createBasketBox } from "./createBasketBox.js";

export const createHeader = (root) => {
  const headerContent = document.createElement("div");
  root.append(headerContent);
  headerContent.classList.add("header-content");
  const headerTopMenu = document.createElement("div");
  headerContent.append(headerTopMenu);
  headerTopMenu.classList.add("header-top");
  createHeaderInfo(headerTopMenu);
  const headerMenu = document.createElement("div");
  headerContent.append(headerMenu);
  headerMenu.classList.add("header-menu");
  createNavigationMenu(headerMenu);
  createAddPostForm(headerMenu);
  createBasketBox(headerMenu);
};
