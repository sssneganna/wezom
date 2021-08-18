export const createBuyField = (root) => {
  const buyfield = document.createElement("section");
  root.append(buyfield);
  buyfield.classList.add("buy-section");
  buyfield.innerHTML = `
  <div class="bue-info">
        <div class="bue-info_flex">
            <div class="bue-info_in-stock">
                <svg class="inStock">
                    <use xlink:href="./src/assets/sprite.svg#inStock"></use>
                </svg>В наличии
            </div>
            <div class="bue-info_stars">
                <svg class="fourStars-">
                    <use xlink:href="./src/assets/sprite.svg#fourStars-"></use>
                </svg>
                <svg class="oneStar">
                    <use xlink:href="./src/assets/sprite.svg#oneStar"></use>
                </svg>

            </div>
            <span class="bue-info_number">12</span>
        </div>
        <div class="bue-info_vendor-code">Артикул: <span class="bue-info_vendor-code-bold">100500</span></div>
    </div>
  `;

  const buyFieldCard = document.createElement("div");
  buyfield.append(buyFieldCard);
  buyFieldCard.classList.add("buy-card");
  buyFieldCard.innerHTML = `
  <div class="buy-card__info">
  <div class="buy-card__sale">Акция</div>
  <div class="buy-card__discount">До 30 июля скидка — 20% на все тестовые товары</div>
</div>
<div class="buy-card__price">
  <div class="buy-card__new-price">3 799 ₴</div>
  <div class="buy-card__old-price"><s>4 200 ₴</s></div>
</div>
<div class="buy-card__buttons">
  <button class="buy-card__btn-basket">
      <span class="basket-text">В корзину</span>
      <span>
          <svg class="basket-box-icon-shop-white">
              <use xlink:href="./src/assets/sprite.svg#shopping-cart"></use>
          </svg></span>

  </button>
  <button class="basket-box_btn-comparison">
      <svg class="basket-box-icon-comparison">
          <use xlink:href="./src/assets/sprite.svg#comparison"></use>
      </svg>
  </button>

  <button class="basket-box_btn-favorites">
      <svg class="basket-box-icon-favorites">
          <use xlink:href="./src/assets/sprite.svg#favorites"></use>
      </svg>
  </button>
  <button class="buy-card_buttons-phone">
      <svg class="basket-box-icon-phone">
          <use xlink:href="./src/assets/sprite.svg#phone"></use>
      </svg><span class="buy-card_buttons-text">Купить в
          1 клик</span>
  </button>
      `;
};
