// ====== Smooth Scroll ======
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ====== Active Navbar on Scroll ======
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// ====== Scroll Reveal Animation ======
const revealElements = document.querySelectorAll(".about, .projects, .contact, .project");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  revealElements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ====== Contact Form Validation ======
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill out all fields before submitting.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    alert("✅ Message sent successfully!");
    form.reset();
  });
}
