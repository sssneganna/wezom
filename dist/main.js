(()=>{"use strict";var e={249:e=>{e.exports=JSON.parse('[{"name":"Иванова Карина","rating":"fourStars","description":"Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку! 2 дня с момента заказа и единственный нюанс-все таки сьемные пластины удобнее, наверное. Но по советам более опытных я ставила пергамент, но мыть все равно сложновато.","date":"21 мая 2021","id":1},{"name":"Рогозин Тимур","rating":"twoStars","description":"Покупка этого товара была спонтанной и незапланированной. В течении часа прочитал отзывы и остановился на этой модельке. Спасибо за молниеносную отправку!","date":"17 мая 2021","id":2},{"name":"Фурсов Иван","rating":"twoStars","description":"Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку! 2 дня с момента заказа и единственный нюанс-все таки сьемные пластины удобнее, наверное. Но по советам более опытных я ставила пергамент, но мыть все равно сложновато.","date":"8 апреля 2021","id":3},{"name":"Тищенко Александр","rating":"fourStars","description":"Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку! 2 дня с момента заказа и единственный нюанс-все таки сьемные пластины удобнее, наверное. Но по советам более опытных я ставила пергамент, но мыть все равно сложновато.","date":"5 апреля 2021","id":4},{"name":"Сергеев Сергей","rating":"twoStars","description":"Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку! 2 дня с момента заказа и единственный нюанс-все таки сьемные пластины удобнее, наверное. Но по советам более опытных я ставила пергамент, но мыть все равно сложновато.","date":"9 марта 2021","id":5},{"name":"Торопов Алексей","rating":"fourStars","description":"Покупка этой товара была спонтанной и незапланированной. В течении часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не сьемные, но плюсов было больше. Спасибо за молниеносную отправку! 2 дня с момента заказа и единственный нюанс-все таки сьемные пластины удобнее, наверное. Но по советам более опытных я ставила пергамент, но мыть все равно сложновато.","date":"1 марта 2021","id":6}]')},241:e=>{e.exports=JSON.parse('[{"url":"./src/assets/product1.jpg","top":"top","rating":"threeStars","number":"3","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","price":"3 799 ₴"},{"url":"./src/assets/product1.jpg","top":"new","rating":"fourStars","number":"44","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","price":"711 ₴"},{"url":"./src/assets/product2.jpg","top":"top","rating":"twoStars","number":"11","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","price":"22 105 ₴"},{"url":"./src/assets/product1.jpg","top":"","rating":"fourStars","number":"76","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","price":"158 ₴"},{"url":"./src/assets/product1.jpg","top":"new","rating":"fourStars","number":"2","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit","price":"1 000 ₴"}]')},620:e=>{e.exports=JSON.parse('[{"icon":"1","category":"Категория 1"},{"icon":"2","category":"Категория 2"},{"icon":"3","category":"Категория 3"},{"icon":"4","category":"Категория 4"},{"icon":"5","category":"Категория 5"},{"icon":"6","category":"Категория 6"},{"icon":"7","category":"Категория 7"},{"icon":"8","category":"Категория 8"},{"icon":"9","category":"Категория 9"},{"icon":"10","category":"Категория 10"}]')}},t={};function s(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,s),i.exports}(()=>{let e=s(620);console.log(e),JSON.stringify(e);let t=s(241);console.log(t),JSON.stringify(t);let r=s(249);console.log(r),JSON.stringify(r),(t=>{for(let s=0;s<e.length;s++){const r=document.createElement("li");r.classList.add("global-nav__item"),r.innerHTML=`\n      <a href="#" class="global-nav__link">\n      <span class="global-nav__icon">\n      <svg class="category">\n      <use xlink:href="./src/assets/sprite.svg#category-${e[s].icon}"></use>\n    </svg>\n      </span>${e[s].category}</a>\n      `,t.append(r)}})(document.querySelector("#nav"));const n=document.querySelector(".form-search");n.addEventListener("submit",(e=>{e.preventDefault(),n.reset()}));const i=document.querySelector(".phone-field__form");i.addEventListener("submit",(e=>{e.preventDefault(),i.reset()})),(e=>{for(let s=0;s<t.length;s++){const r=document.createElement("li");let n=`\n  <div class="product__top-info">\n        <div class="product__top">${t[s].top}</div>\n        <div class="product__like">  <svg class="basket-box-icon-favorites">\n        <use xlink:href="./src/assets/sprite.svg#favorites"></use>\n      </svg></div>\n          \n\n       \n        </div>\n        <img class="product__img" src="${t[s].url}" alt="a"/>\n        <div class="product__info">\n            <div class="star">\n            <svg class="reviews__icon">\n            <use xlink:href="./src/assets/sprite.svg#${t[s].rating}"></use>\n          </svg>\n         \n                <span>${t[s].number}</span>\n            </div>\n            <div class="product__group">Group</div>\n            <p class="product__text">${t[s].text}\n                </p>\n        </div>\n        <div class="product__price-box">\n            <div class="product__price">${t[s].price}</div>\n            <div class="product__in-stock">\n            <span></span>\n                <span class="product__in-stock-text">\n                <svg class="inStock">\n                <use xlink:href="./src/assets/sprite.svg#inStock"></use>\n              </svg>В наличии</span>\n\n        </div>\n    </div>\n    </div>\n       \n        `;r.innerHTML=n,r.classList.add("product__item"),e.append(r)}})(document.querySelector(".product__list")),(e=>{for(let t=0;t<r.length;t++){const s=document.createElement("li");s.classList.add("reviews__content"),s.innerHTML=`\n     <div class="reviews__name-flex">\n       <p class="reviews__name">${r[t].name} </p>\n       \n      <div class="reviews__date">/ ${r[t].date}</div>\n      <div><svg class="reviews__icon">\n      <use xlink:href="./src/assets/sprite.svg#${r[t].rating}"></use>\n    </svg></div>\n      </div>\n      <p class="reviews__description">${r[t].description}</p>\n      `,e.append(s)}})(document.querySelector("#reviews"))})()})();