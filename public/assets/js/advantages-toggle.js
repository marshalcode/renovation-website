const toggle = document.querySelector(".advantages__toggle");
const content = document.querySelector(".advantages__collapsible");

if (toggle && content) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!isOpen));
    content.classList.toggle("is-open", !isOpen);

    toggle.querySelector("span:first-child").textContent =
      isOpen ? "6 Vorteile anzeigen" : "Vorteile ausblenden";
  });
}