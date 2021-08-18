export const createBasketBox = (root) => {
  const basketBox = document.createElement("div");
  root.append(basketBox);
  basketBox.classList.add("basket-box");
  basketBox.innerHTML = `
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
    <div class="basket-box_window-open">
        <button class="basket-box_btn-basket">
            <span class="basket-box_btn-number">3</span>
            <svg class="basket-box-icon-shop">
                <use xlink:href="./src/assets/sprite.svg#shopping-cart"></use>
            </svg>
        </button>
        <div class="basket-box_window">
            <div class="basket-box_window-text">В корзине <span class="basket-box_window-text-bold">3 товара</span> На
                сумму <span class="basket-box_window-text-bold">30 000 ₴</span></div>
            <button class="basket-box_window-btn">
                <span class="basket-box_window-btn-text">Оформить заказ</span>
                <svg class="basket-box-icon-shop-white">
                    <use xlink:href="./src/assets/sprite.svg#shopping-cart"></use>
                </svg>
            </button>
            <a href="#" class="basket-box_window-editing">Редактировать заказ</a>
        </div>
    </div>`;
};
