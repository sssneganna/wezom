import { createProductItem } from "./createProductItem.js";

const images = [
  {
    url: "./src/assets/product1.jpg",
    top: "top",
    rating: "threeStars",
    number: "3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: "3 799 ₴",
  },
  {
    url: "./src/assets/product1.jpg",
    top: "new",
    rating: "fourStars",
    number: "44",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: "711 ₴",
  },
  {
    url: "./src/assets/product2.jpg",
    top: "top",
    rating: "twoStars",
    number: "11",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: "22 105 ₴",
  },
  {
    url: "./src/assets/product1.jpg",
    top: "",
    rating: "fourStars",
    number: "76",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: "158 ₴",
  },
  {
    url: "./src/assets/product1.jpg",
    top: "new",
    rating: "fourStars",
    number: "2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    price: "1 000 ₴",
  },
];
console.log(images[0].url);

export const createProductList = (root) => {
  const containerProduct = document.createElement("section");
  root.append(containerProduct);
  containerProduct.classList.add("product");
  const productTitle = document.createElement("div");
  productTitle.innerHTML = `
  <span>Тестовые товары</span>`;
  containerProduct.append(productTitle);
  productTitle.classList.add("product_title");
  const productList = document.createElement("ul");
  containerProduct.append(productList);
  productList.classList.add("product_list");
  createProductItem(productList, images);
};
