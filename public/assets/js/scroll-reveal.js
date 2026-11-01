(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Content stays visible without JavaScript, observer support or animations.
  if (reducedMotion.matches || !("IntersectionObserver" in window)) return;

  const elements = document.querySelectorAll(
    [
      ".hero__content",
      ".advantages__intro, .advantages__toggle, .advantage-item",
      ".services__header, .service-card",
      "#projects-title, .projects__category-title, .project-card",
      ".project-cta__content, .project-cta__actions",
      ".process__header, .process-step",
      ".about__content, .about__media",
      "#reviews > .container > *, #contact > .container > *",
      ".request__intro, .request-form"
    ].join(", ")
  );

  const reveal = (element) => {
    element.classList.remove("scroll-reveal--pending");
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) reveal(entry.target);
    });
  }, { threshold: 0 });

  // Reset beyond a small buffer so the translated text cannot flicker at the edge.
  const resetObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.classList.add("scroll-reveal--pending");
      }
    });
  }, { rootMargin: "32px", threshold: 0 });

  elements.forEach((element) => {
    // Apply motion to the outer project card, leaving its 3D flip untouched.
    element.classList.add("scroll-reveal", "scroll-reveal--pending");
    if (!element.matches(".service-card, .project-card, .about__media")) {
      element.classList.add("scroll-reveal--text");
    }

    element.addEventListener("focusin", () => {
      reveal(element);
    });

    observer.observe(element);
    resetObserver.observe(element);
  });

  reducedMotion.addEventListener("change", (event) => {
    if (!event.matches) return;
    observer.disconnect();
    resetObserver.disconnect();
    elements.forEach((element) => {
      element.classList.remove("scroll-reveal", "scroll-reveal--pending");
    });
  });
})();
