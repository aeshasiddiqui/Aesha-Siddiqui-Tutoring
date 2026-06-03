function main() {
  const form = document.querySelector(".contact-form");
  const status = document.querySelector(".form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    status.textContent =
      "Thanks! Your consultation request is ready for follow-up.";
  });
}

document.addEventListener("DOMContentLoaded", main);
