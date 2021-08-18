const createSlider = (root) => {
  const imageSlider = document.createElement("div");
  root.append(imageSlider);
  imageSlider.classList.add("slider-container");
  imageSlider.innerHTML = `
  <div class="slider-nav">
  <div class="slider-nav_item"><img src="./src/assets/image1small.jpg" alt="image1"></div>
  <div class="slider-nav_item"><img src="./src/assets/image2.jpg" alt="image1"></div>
  <div class="slider-nav_item"><img src="./src/assets/image3.jpg" alt="image1"></div>
  <div class="slider-nav_item"><img src="./src/assets/image4.jpg" alt="image1"></div>

</div>
<div class='slider'>
  <div><img src="./src/assets/image1.jpg" alt="image1"></div>
  <div><img src="./src/assets/image1.jpg" alt="image1"></div>
  <div><img src="./src/assets/image1.jpg" alt="image1"></div>
  <div><img src="./src/assets/image1.jpg" alt="image1"></div>
  <div><img src="./src/assets/image1.jpg" alt="image1"></div>
</div>
  `;
};
export const createSliderContainer = (root) => {
  const sliderContainer = document.createElement("section");
  sliderContainer.classList.add("slider-section");
  root.append(sliderContainer);
  sliderContainer.innerHTML = `
  <div class="slider-section_title">Test — Каталог — Группа — Тестовый товар для верстки</div>`;
  createSlider(sliderContainer);
};
