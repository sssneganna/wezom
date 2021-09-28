let images = require("./image.json");
console.log(images);
const objImages = JSON.stringify(images);

export const createProductItem = (root) => {
  for (let i = 0; i < images.length; i++) {
    const productItem = document.createElement("li");
    let itemContent = `
    <a class="product__link" href="#">
  <div class="product__top-info">
        <div class="product__top">${images[i].top}</div>
        <div class="product__like">  <svg class="icon-favorites">
        <use xlink:href="./src/assets/sprite.svg#favorites"></use>
      </svg></div>
          

       
        </div>
        <img class="product__img" src="${images[i].url}" alt="a"/>
        <div class="product__info">
            <div class="star product__star_margin">
            <svg class="star__icon">
            <use xlink:href="./src/assets/sprite.svg#${images[i].rating}"></use>
          </svg>
         
                <span class="product__number">${images[i].number}</span>
            </div>
            <div class="product__group">Group</div>
            <p class="product__text">${images[i].text}
                </p>
        </div>
        <div class="product__price-box">
            <div class="product__price">${images[i].price}</div>
            <div class=" in-stock product__in-stock">
            <svg class="in-stock__icon">
                <use xlink:href="./src/assets/sprite.svg#inStock"></use>
            </svg>В наличии
        </div>
    </div>
    </div>
       </a>
        `;
    productItem.innerHTML = itemContent;

    productItem.classList.add("product__item");

    root.append(productItem);
  }
};
