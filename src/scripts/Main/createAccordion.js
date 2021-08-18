export const createAccordion = (root) => {
  const accordions = document.createElement("section");
  root.append(accordions);
  accordions.classList.add("accordion");
  accordions.innerHTML = `
  <div class="accordion_item" data-collapse="#wedo_1">
  <div class="accordion_header">
      <span class="accordion_icon">
          <svg class="warranty">
              <use xlink:href="./src/assets/sprite.svg#warranty"></use>
          </svg>
      </span>
      <button class="accordion_title">

          Гарантия</button>
  </div>
  <div class="accordion_content" id="wedo_1">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in</p>
  </div>
</div>
<div class="accordion_item " data-collapse="#wedo_2">
  <div class="accordion_header">
      <span class="accordion_icon">
          <svg class="warranty">
              <use xlink:href="./src/assets/sprite.svg#deliveryTerms"></use>
          </svg>

      </span>
      <button class="accordion_title">


          Условия доставки</button>
  </div>
  <div class="accordion_content" id="wedo_2">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in</p>
  </div>
</div>
<div class="accordion_item" data-collapse="#wedo_3">
  <div class="accordion_header">
      <span class="accordion_icon">
          <svg class="warranty">
              <use xlink:href="./src/assets/sprite.svg#terms-of-payment"></use>
          </svg>
      </span>
      <button class="accordion_title">

          Условия оплаты</button>
  </div>
  <div class="accordion_content" id="wedo_3">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in</p>
  </div>
            `;
};
