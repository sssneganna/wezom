export const createHeaderInfo = (root) => {
  const headerInfo = document.createElement("div");
  root.append(headerInfo);
  headerInfo.classList.add("header-top-menu");
  headerInfo.innerHTML = `
  <div class="menu">
  <div class="menu_icon">
      <svg class="wezom_logo">
          <use xlink:href="./src/assets/sprite.svg#wezom_logo"></use>
      </svg>
  </div>

  <ul class="menu_list" id="menu">
      <li class="menu_item">
          <a class="menu_link" href="#">О Компании</a>
      </li>
      <li class="menu_item">
          <a class="menu_link" href="#">Доставка и оплата</a>
      </li>
      <li class="menu_item">
          <a class="menu_link" href="#">Гарантия</a>
      </li>
  </ul>
</div>

<div class="info">
  <ul class="info_list">
      <li class="info_item">
          <a class="info_phone" href="tel: +38 068 000 00 00">
              <span>+38 068 000 00 00</span>
          </a>
      </li>
      <li class="info_item" id="lan">
          <button class="info_btn"><a class="info_btn-language" href="#">Ua</a></button>
          <button class="info_btn"><a class="info_btn-language" href="#">Ru</a></button>
      </li>
      <li class="info_item">
          <button class="info_btn-logIn">
              Войти
              <svg class="logIn">
                  <use xlink:href="./src/assets/sprite.svg#logIn"></use>
              </svg>
          </button>
      </li>
  </ul>
</div>
  `;
};
