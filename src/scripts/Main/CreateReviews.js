let subjects = require("./data.json");
console.log(subjects);
const obj = JSON.stringify(subjects);

const createReviews = (root) => {
  for (let i = 0; i < subjects.length; i++) {
    const container = document.createElement("li");
    container.classList.add("reviews_content");
    container.innerHTML = `
     <div class="reviews_name-flex">
       <p class="reviews_name">${subjects[i].name} </p>
       
      <div class="reviews_date">/ ${subjects[i].date}</div>
      <div><svg class="reviews_icon">
      <use xlink:href="./src/assets/sprite.svg#${subjects[i].rating}"></use>
    </svg></div>
      </div>
      <p class="reviews_description">${subjects[i].description}</p>
      `;
    root.append(container);
  }
};

export const createReviewsField = (root) => {
  const reviewsField = document.createElement("section");
  root.append(reviewsField);
  reviewsField.classList.add("reviews-section");
  reviewsField.innerHTML = `
  <div class="reviews-section_box">
  <h2 class="reviews-section_title">Отзывы покупателей <span class="reviews-section_number">12</span></h2>
  <div class="reviews-section_all-reviews">
      <a class="reviews-section_reviews-link" href="#">Все отзывы

      </a>
      <button class="reviews-section_reviews-btn"></button>
  </div>
</div>
<ul class="reviews" id="reviews">

</ul>
<button class="reviews_btn-showmore">Показать еще</button>
  `;

  const rew = document.querySelector("#reviews");
  createReviews(rew);
};
