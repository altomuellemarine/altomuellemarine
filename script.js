const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const reveals = document.querySelectorAll(".reveal");
const lightbox = document.querySelector("[data-lightbox-modal]");
const lightboxText = document.querySelector("[data-lightbox-text]");
const lightboxClose = document.querySelector("[data-lightbox-close]");

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

const syncHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}

document.querySelectorAll("[data-lightbox]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxText) return;
    lightboxText.textContent = button.getAttribute("data-lightbox") || "Galeria";
    lightbox.hidden = false;
  });
});

const closeLightbox = () => {
  if (lightbox) lightbox.hidden = true;
};

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
