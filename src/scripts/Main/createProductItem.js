let images = require("./image.json");
console.log(images);
const objImages = JSON.stringify(images);

export const createProductItem = (root) => {
  for (let i = 0; i < images.length; i++) {
    const productItem = document.createElement("li");
    let itemContent = `
  <div class="product__top-info">
        <div class="product__top">${images[i].top}</div>
        <div class="product__like">  <svg class="basket-box-icon-favorites">
        <use xlink:href="./src/assets/sprite.svg#favorites"></use>
      </svg></div>
          

       
        </div>
        <img class="product__img" src="${images[i].url}" alt="a"/>
        <div class="product__info">
            <div class="star">
            <svg class="reviews__icon">
            <use xlink:href="./src/assets/sprite.svg#${images[i].rating}"></use>
          </svg>
         
                <span>${images[i].number}</span>
            </div>
            <div class="product__group">Group</div>
            <p class="product__text">${images[i].text}
                </p>
        </div>
        <div class="product__price-box">
            <div class="product__price">${images[i].price}</div>
            <div class="product__in-stock">
            <span></span>
                <span class="product__in-stock-text">
                <svg class="inStock">
                <use xlink:href="./src/assets/sprite.svg#inStock"></use>
              </svg>В наличии</span>

        </div>
    </div>
    </div>
       
        `;
    productItem.innerHTML = itemContent;

    productItem.classList.add("product__item");

    root.append(productItem);
  }
};
