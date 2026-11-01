document.querySelectorAll(".project-card").forEach((card) => {
  const button = card.querySelector(".project-card__toggle");
  const after = card.querySelector(".project-card__face--after");
  const before = card.querySelector(".project-card__face--before");
  // Visible captions are optional; keep the accessible name independent of them.
  const projectName = card.dataset.projectName || "Projekt";

  if (!button || !after || !before) return;

  const showBefore = (isBefore) => {
    card.classList.toggle("project-card--flipped", isBefore);
    after.setAttribute("aria-hidden", String(isBefore));
    before.setAttribute("aria-hidden", String(!isBefore));
    button.setAttribute(
      "aria-label",
      `${projectName}: ${isBefore ? "Vorher. Nachher ansehen." : "Nachher. Vorher ansehen."}`
    );
  };

  showBefore(false);
  button.disabled = false;

  // Native buttons support mouse, touch, Enter and Space through one click event.
  button.addEventListener("click", () => {
    showBefore(!card.classList.contains("project-card--flipped"));
  });

  // Also restore Nachher when returning through the browser's back/forward cache.
  window.addEventListener("pageshow", () => showBefore(false));
});
