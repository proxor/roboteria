(() => {
  const stored = localStorage.getItem("lang") || "de";
  const buttons = document.querySelectorAll("[data-lang-switch]");
  const elements = document.querySelectorAll("[data-lang]");

  const setLang = (lang) => {
    localStorage.setItem("lang", lang);
    elements.forEach((el) => {
      if (el.getAttribute("data-lang") === lang) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.langSwitch === lang);
    });
    document.documentElement.setAttribute("lang", lang);
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.langSwitch));
  });

  setLang(stored);
})();
