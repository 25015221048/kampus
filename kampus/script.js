const menuToggles = document.querySelectorAll(".navbar-toggler[aria-controls]");

menuToggles.forEach((toggle) => {
  const menu = document.getElementById(toggle.getAttribute("aria-controls"));

  if (!menu) {
    return;
  }

  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Menüyü aç");
    menu.classList.remove("show");
  }

  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    toggle.setAttribute("aria-label", isExpanded ? "Menüyü aç" : "Menüyü kapat");
    menu.classList.toggle("show", !isExpanded);
  });

  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  menu.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      toggle.focus();
    }
  });
});

const searchInput = document.querySelector("#event-search");

if (searchInput) {
  const searchResults = [...document.querySelectorAll(".search-result")];
  const searchStatus = document.querySelector("#search-status");
  const searchEmpty = document.querySelector("#search-empty");

  function normalizeSearchText(text) {
    return text.toLocaleLowerCase("tr-TR").replace(/ı/g, "i").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  searchInput.addEventListener("input", () => {
    const query = normalizeSearchText(searchInput.value.trim());
    let visibleResults = 0;

    searchResults.forEach((result) => {
      const matches = normalizeSearchText(result.dataset.search).includes(query);
      result.hidden = !matches;
      visibleResults += Number(matches);
    });

    searchStatus.textContent = `${visibleResults} kategori listeleniyor.`;
    searchEmpty.hidden = visibleResults !== 0;
  });
}
