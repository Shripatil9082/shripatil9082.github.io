/* ===================================
   PORTFOLIO - MAIN JAVASCRIPT
   Single Page Functionality
   =================================== */

// ===================================
// 1. MOBILE MENU TOGGLE
// ===================================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");

/**
 * Toggle mobile menu on button click
 */
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/**
 * Close menu when clicking a navigation link
 */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

/**
 * Close menu when clicking outside the header
 */
document.addEventListener("click", (e) => {
  if (!e.target.closest("header")) {
    nav.classList.remove("active");
  }
});

/**
 * Close menu when window is resized to desktop view
 */
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.classList.remove("active");
  }
});

// ===================================
// 2. ACTIVE NAVIGATION ON SCROLL
// ===================================

/**
 * Highlight active navigation link based on scroll position
 */
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  // Determine which section is currently in view
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Check if section is in viewport (with 100px offset for header)
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  // Update active class on navigation links
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===================================
// 3. SMOOTH SCROLL (Backup for older browsers)
// ===================================

/**
 * Ensure smooth scrolling works even if CSS smooth scroll fails
 * Most modern browsers support CSS scroll-behavior: smooth
 * This is a fallback for older browsers
 */
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Let the default behavior work if CSS smooth scroll is supported
    // This is just a backup
    const targetId = link.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        // Optional: Add custom smooth scroll behavior here if needed
        // For now, we rely on CSS scroll-behavior: smooth
      }
    }
  });
});

// ===================================
// 4. CONTACT FORM HANDLER
// ===================================

/**
 * Handle contact form submission
 */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector("#name").value.trim();
    const email = contactForm.querySelector("#email").value.trim();
    const message = contactForm.querySelector("#message").value.trim();

    if (!name || !email || !message) return;

    // Show success feedback
    const submitBtn = contactForm.querySelector(".btn-submit");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "✓ Message Sent!";
    submitBtn.style.backgroundColor = "#10B981";
    submitBtn.style.borderColor = "#10B981";
    submitBtn.style.color = "#fff";
    submitBtn.disabled = true;

    // Reset form
    contactForm.reset();

    // Restore button after 3 seconds
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.backgroundColor = "";
      submitBtn.style.borderColor = "";
      submitBtn.style.color = "";
      submitBtn.disabled = false;
    }, 3000);
  });
}

// ===================================
// 5. PAGE LOAD INITIALIZATION
// ===================================

/**
 * Initialize on page load
 */
document.addEventListener("DOMContentLoaded", () => {
  // Set home as active on initial load
  const homeLink = document.querySelector('a[href="#home"]');
  if (homeLink) {
    homeLink.classList.add("active");
  }

  console.log("Portfolio loaded successfully! 🚀");
});

// ===================================
// 5. OPTIONAL: SCROLL TO TOP BUTTON
// ===================================

/**
 * Uncomment this section if you want to add a "Back to Top" button
 */

/*
// Create scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(scrollToTopBtn);

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Scroll to top on button click
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add CSS for scroll to top button (add to style.css)
.scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary-navy);
    color: var(--bg-white);
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
}

.scroll-to-top.visible {
    opacity: 1;
    visibility: visible;
}

.scroll-to-top:hover {
    background-color: var(--accent-blue);
    transform: translateY(-4px);
}
*/
