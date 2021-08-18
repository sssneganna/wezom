export const createFooter = (root) => {
  const footerContent = document.createElement("div");
  root.append(footerContent);
  footerContent.classList.add("footer-content");
  footerContent.innerHTML = `
  <div class="footer-content_copyright">2021 © Wezom Test</div>
  <div class="footer-content_info">Тестовое \\ Wezom</div>
  `;
};
