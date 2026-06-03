function main() {
  const dropdown = document.querySelector(".nav-dropdown");
  const trigger = document.querySelector(".nav-trigger");
  const menu = document.getElementById("servicesMenu");
  const form = document.querySelector(".contact-form");
  const status = document.querySelector(".form-status");

  function closeMenu() {
    menu.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    const isOpen = menu.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  trigger.addEventListener("click", toggleMenu);

  menu.addEventListener("click", (event) => {
    if (event.target.matches("a")) closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    status.textContent = "Thanks! Your message has been prepared for follow-up.";
  });
}

document.addEventListener("DOMContentLoaded", main);
