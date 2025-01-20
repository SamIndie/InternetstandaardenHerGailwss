// scripts/script.js

// Skip Link Focus Fix for Accessibility
document.addEventListener("DOMContentLoaded", () => {
    const skipLink = document.querySelector("a[href^='#']");
    if (skipLink) {
      skipLink.addEventListener("click", (e) => {
        const targetId = skipLink.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          e.preventDefault();
          targetElement.setAttribute("tabindex", "-1");
          targetElement.focus();
        }
      });
    }
  });
  
  // Toggle Mobile Navigation (if needed)
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("header nav ul");
  
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }
  

  // Add hover effects using JavaScript if needed
document.querySelectorAll('.image-list li').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = "scale(1.1)"; // enlarge the item on hover
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = "scale(1)"; // Reset to original size
    });
});
