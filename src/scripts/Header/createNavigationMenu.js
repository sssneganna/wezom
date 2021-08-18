const menu = [
  {
    icon: "1",
    category: "Категория 1",
  },
  {
    icon: "2",
    category: "Категория 2",
  },
  {
    icon: "3",
    category: "Категория 3",
  },
  {
    icon: "4",
    category: "Категория 4",
  },
  {
    icon: "5",
    category: "Категория 5",
  },
  {
    icon: "6",
    category: "Категория 6",
  },
  {
    icon: "7",
    category: "Категория 7",
  },
  {
    icon: "8",
    category: "Категория 8",
  },
  {
    icon: "9",
    category: "Категория 9",
  },
  {
    icon: "10",
    category: "Категория 10",
  },
];

const createNavigationItem = (root, cat) => {
  for (let i = 0; i < menu.length; i++) {
    const navigationItem = document.createElement("li");
    navigationItem.classList.add("global-nav_item");
    navigationItem.innerHTML = `
    <a href="#" class="global-nav_link">
    <span class="global-nav_icon">
    <svg class="category">
    <use xlink:href="./src/assets/sprite.svg#category-${cat[i].icon}"></use>
  </svg>
    </span>${cat[i].category}</a>
    `;
    root.append(navigationItem);
  }
};

export const createNavigationMenu = (root) => {
  const navigationMenu = document.createElement("div");
  root.append(navigationMenu);
  navigationMenu.classList.add("navigation");
  navigationMenu.innerHTML = `
  <nav class="global-nav">
        <ul class="global-nav_list" id="nav">
        </ul>
        <button class="global-nav_toggle">
            <svg class="menuIcon">
                <use xlink:href="./src/assets/sprite.svg#menuIcon"></use>
            </svg>
            <span class="global-nav_title">каталог</span>
        </button>
        <a class="global-nav_category-link" href="#">Все категории
        </a>
    </nav>`;
  const nav = document.querySelector("#nav");
  createNavigationItem(nav, menu);
};
