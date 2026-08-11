// BLEUM Flourish — site scripts
document.addEventListener("DOMContentLoaded", () => {
  /* Mobile nav toggle */
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const scrim = document.querySelector(".nav-scrim");

  function closeNav() {
    navLinks.classList.remove("is-open");
    scrim.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
  }
  function openNav() {
    navLinks.classList.add("is-open");
    scrim.classList.add("is-open");
    hamburger.setAttribute("aria-expanded", "true");
  }

  if (hamburger && navLinks && scrim) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.contains("is-open") ? closeNav() : openNav();
    });
    scrim.addEventListener("click", closeNav);
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", closeNav)
    );
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  /* Fade-in on scroll */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
});
