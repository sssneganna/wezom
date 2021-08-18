const formTemplate = `
<input id="tel" type="tel" name="phone" placeholder="+38 (0xx) xx - xx - xxx"  class="phone-field_input" 
/>
<button class="phone-field_send-btn" type="submit">
  Отправить
</button>
`;

const createPhoneForm = (root) => {
  const form = document.createElement("form");
  form.classList.add("phone-field_form");
  form.innerHTML = formTemplate;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
  });
  root.append(form);
};

export const createFieldForm = (root) => {
  const fieldForm = document.createElement("section");
  fieldForm.classList.add("phone-field");
  fieldForm.innerHTML = `
  <div class="phone-field_text">Нужна помощь в подборе товара? Мы перезваниваем !</div>
  `;
  root.append(fieldForm);
  createPhoneForm(fieldForm);
};
