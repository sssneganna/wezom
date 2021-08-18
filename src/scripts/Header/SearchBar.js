const formChildrenTemplate = `
<div class="form-search_field">
        <input class="form-search_input" name="search" type="text" required placeholder="Поиск, например “тест”" />
        <button class="form-search_btn" type="submit">
            <svg class="searchIcon">
                <use xlink:href="./src/assets/sprite.svg#searchIcon"></use>
            </svg>
        </button>
    </div>
`;

export const createAddPostForm = (root) => {
  const form = document.createElement("form");
  form.classList.add("form-search");
  form.innerHTML = formChildrenTemplate;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
  });
  root.append(form);
};
