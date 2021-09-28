let cat = require("./menu.json");
console.log(cat);
const objCat = JSON.stringify(cat);

export const createNavigationItem = (root) => {
  for (let i = 0; i < cat.length; i++) {
    const navigationItem = document.createElement("li");
    navigationItem.classList.add("global-nav__item");
    navigationItem.innerHTML = `
      <a href="#" class="global-nav__link">
      <span class="global-nav__icon-category">
      <svg class="category">
      <use xlink:href="./src/assets/sprite.svg#category-${cat[i].icon}"></use>
    </svg>
      </span>${cat[i].category}</a>
      `;
    root.append(navigationItem);
  }
};
