export const createCharacteristicSection = (root) => {
  const characteristicSection = document.createElement("section");
  root.append(characteristicSection);
  characteristicSection.classList.add("characteristic-section");
  characteristicSection.innerHTML = `
  <h2 class="characteristic-section_title">Характеристики <span class="green">Тестового товара для <br>верстки</span>
  </h2>
  <ul class="characteristic-section_list">
      <li class="characteristic-section_item"><span class="characteristic-section_name">Тип </span><span
              class="characteristic-section_text">Группа 1</span></li>
      <li class="characteristic-section_item"><span class="characteristic-section_name">Номер </span><span
              class="characteristic-section_text">B410-210</span></li>
      <li class="characteristic-section_item"><span class="characteristic-section_name">Бренд </span><span
              class="characteristic-section_text">Wezom</span></li>
  </ul>
  <div>
      <a class="reviews-section_reviews-link" href="#">Все характеристики</a>
      <button class="reviews-section_reviews-btn"></button>
  </div>
  `;
};
