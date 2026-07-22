const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "Close" : "Menu";
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "Menu";
    });
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();
