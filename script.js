const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation menu");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && siteNav?.classList.contains("is-open")) {
    siteNav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation menu");
    menuToggle?.focus();
  }
});

const filterButtons = document.querySelectorAll(".filter-button");
const noteCards = document.querySelectorAll(".note-card");
const filterStatus = document.querySelector(".filter-status");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    noteCards.forEach((card) => {
      const isVisible = filter === "all" || card.dataset.category === filter;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    if (filterStatus) {
      filterStatus.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "field note" : "field notes"}.`;
    }
  });
});

const galleryFilterButtons = document.querySelectorAll(".gallery-filter");
const galleryProjects = document.querySelectorAll(".gallery-project");
const galleryFilterStatus = document.querySelector(".gallery-filter-status");

galleryFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.workFilter;
    let visibleProjects = 0;
    let visibleWorks = 0;

    galleryFilterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    galleryProjects.forEach((project) => {
      const isVisible = filter === "all" || project.dataset.project === filter;
      project.hidden = !isVisible;
      if (isVisible) {
        visibleProjects += 1;
        visibleWorks += project.querySelectorAll(".gallery-card").length;
      }
    });

    if (galleryFilterStatus) {
      const projectLabel = visibleProjects === 1 ? "project" : "projects";
      galleryFilterStatus.textContent = `Showing ${visibleWorks} visual works across ${visibleProjects} ${projectLabel}.`;
    }
  });
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

const heroArt = document.querySelector(".hero-art");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (heroArt && finePointer && !reducedMotion) {
  let frame = 0;

  heroArt.addEventListener("pointermove", (event) => {
    if (frame) cancelAnimationFrame(frame);

    frame = requestAnimationFrame(() => {
      const bounds = heroArt.getBoundingClientRect();
      const offsetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
      const offsetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12;
      heroArt.style.setProperty("--drift-x", `${offsetX.toFixed(1)}px`);
      heroArt.style.setProperty("--drift-y", `${offsetY.toFixed(1)}px`);
      heroArt.style.setProperty("--drift-back-x", `${(-offsetX * 0.5).toFixed(1)}px`);
      heroArt.style.setProperty("--drift-back-y", `${(-offsetY * 0.5).toFixed(1)}px`);
      frame = 0;
    });
  });

  heroArt.addEventListener("pointerleave", () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    heroArt.style.setProperty("--drift-x", "0px");
    heroArt.style.setProperty("--drift-y", "0px");
    heroArt.style.setProperty("--drift-back-x", "0px");
    heroArt.style.setProperty("--drift-back-y", "0px");
  });
}
