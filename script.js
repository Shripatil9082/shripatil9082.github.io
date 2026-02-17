
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});


document.addEventListener("click", (e) => {
  if (!e.target.closest("header")) {
    nav.classList.remove("active");
  }
});


window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");


  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;


    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });


  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {

    const targetId = link.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {

      }
    }
  });
});

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector("#name").value.trim();
    const email = contactForm.querySelector("#email").value.trim();
    const message = contactForm.querySelector("#message").value.trim();

    if (!name || !email || !message) return;


    const submitBtn = contactForm.querySelector(".btn-submit");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "✓ Message Sent!";
    submitBtn.style.backgroundColor = "#10B981";
    submitBtn.style.borderColor = "#10B981";
    submitBtn.style.color = "#fff";
    submitBtn.disabled = true;


    contactForm.reset();


    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.backgroundColor = "";
      submitBtn.style.borderColor = "";
      submitBtn.style.color = "";
      submitBtn.disabled = false;
    }, 3000);
  });
}

document.addEventListener("DOMContentLoaded", () => {

  const homeLink = document.querySelector('a[href="#home"]');
  if (homeLink) {
    homeLink.classList.add("active");
  }

  console.log("Portfolio loaded successfully! 🚀");
});
