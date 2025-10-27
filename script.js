// Smooth scroll to next section
function scrollToNext() {
  const cardsSection = document.querySelector(".cards-section");
  if (cardsSection) {
    // Use a simple scroll to maintain scroll snap
    const sectionTop = cardsSection.offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }
}

// Add smooth scrolling to all navigation links
document.addEventListener("DOMContentLoaded", function () {
  // Handle internal anchor links if any
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Add scroll event listener for navbar background
  window.addEventListener("scroll", function () {
    const navPlaceholder = document.querySelector("#nav-placeholder");

    if (navPlaceholder) {
      // Add background when scrolling
      if (window.scrollY > 50) {
        navPlaceholder.classList.add("scrolled");
      } else {
        navPlaceholder.classList.remove("scrolled");
      }
    }
  });

  // Prevent over-scroll on touch devices (less aggressive)
  document.addEventListener(
    "touchstart",
    function (e) {
      if (window.scrollY <= 0) {
        // Only prevent if trying to scroll up from the top
        const touch = e.touches[0];
        window.startY = touch.clientY;
      }
    },
    { passive: true }
  );

  document.addEventListener(
    "touchmove",
    function (e) {
      if (window.scrollY <= 0 && window.startY) {
        const touch = e.touches[0];
        const deltaY = touch.clientY - window.startY;

        // Only prevent if scrolling up (positive deltaY)
        if (deltaY > 0) {
          e.preventDefault();
        }
      }
    },
    { passive: false }
  );

  // Ensure we start at the top
  window.scrollTo(0, 0);
});
