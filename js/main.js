document.addEventListener("DOMContentLoaded", () => {
  // Navbar Elements
  const navbar = document.getElementById("navbar");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // Scroll to Top Button Elements
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Navbar Scroll Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.classList.add("shadow-md");
    } else {
      navbar.classList.remove("shadow-md");
    }

    // Scroll to Top Button Visibility
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.remove(
        "opacity-0",
        "invisible",
        "translate-y-10"
      );
      scrollToTopBtn.classList.add("opacity-100", "visible", "translate-y-0");
    } else {
      scrollToTopBtn.classList.add("opacity-0", "invisible", "translate-y-10");
      scrollToTopBtn.classList.remove(
        "opacity-100",
        "visible",
        "translate-y-0"
      );
    }
  });

  // Mobile Menu Toggle
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Scroll to Top Action
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
