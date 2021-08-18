export const createProductItem = (root, imageData) => {
  for (let i = 0; i < imageData.length; i++) {
    const productItem = document.createElement("li");
    let itemContent = `
  <div class="product_top-info">
        <div class="product_top">${imageData[i].top}</div>
        <div class="product_like">  <svg class="basket-box-icon-favorites">
        <use xlink:href="./src/assets/sprite.svg#favorites"></use>
      </svg></div>
          

       
        </div>
        <img class="product_img" src="${imageData[i].url}" alt="a"/>
        <div class="product_info">
            <div class="star">
            <svg class="reviews_icon">
            <use xlink:href="./src/assets/sprite.svg#${imageData[i].rating}"></use>
          </svg>
         
                <span>${imageData[i].number}</span>
            </div>
            <div class="product_group">Group</div>
            <p class="product_text">${imageData[i].text}
                </p>
        </div>
        <div class="product_price-box">
            <div class="product_price">${imageData[i].price}</div>
            <div class="product_in-stock">
            <span></span>
                <span class="product_in-stock-text">
                <svg class="inStock">
                <use xlink:href="./src/assets/sprite.svg#inStock"></use>
              </svg>В наличии</span>

        </div>
    </div>
    </div>
       
        `;
    productItem.innerHTML = itemContent;

    productItem.classList.add("product_item");

    root.append(productItem);
  }
};
