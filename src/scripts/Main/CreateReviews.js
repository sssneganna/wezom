let subjects = require("./data.json");
console.log(subjects);
const obj = JSON.stringify(subjects);

export const createReviews = (root) => {
  for (let i = 0; i < subjects.length; i++) {
    const container = document.createElement("li");
    container.classList.add("reviews__content");
    container.innerHTML = `
     <div class="reviews__name-flex">
       <p class="reviews__name">${subjects[i].name} </p>
      <div class="reviews__date">/ ${subjects[i].date}</div>
      <div class="star ">
      <svg class="star__icon">
      <use xlink:href="./src/assets/sprite.svg#${subjects[i].rating}"></use>
    </svg></div>
      </div>
      <p class="reviews__description">${subjects[i].description}</p>
      `;
    root.append(container);
  }
};
