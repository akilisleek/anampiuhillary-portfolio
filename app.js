const header = document.querySelector(".header");
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#mainNav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "Close" : "Menu";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "Menu";
    });
  });
}

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 16);
});

document.querySelector("#year").textContent = new Date().getFullYear();

const cards = document.querySelectorAll(".service-card, .case-card, .process-list article, .stack-grid article, .timeline article");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { opacity: 0, transform: "translateY(18px)" },
          { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 520, easing: "ease-out", fill: "forwards" }
      );
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

cards.forEach((card) => {
  card.style.opacity = "0";
  observer.observe(card);
});
