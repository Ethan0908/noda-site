const header = document.querySelector("[data-header]");
const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelectorAll(".site-nav a");

function updateHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  header.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.contains("is-open");
  setMenu(!isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});
