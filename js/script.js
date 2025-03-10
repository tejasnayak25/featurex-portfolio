// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if(navLinks.classList.contains("active")) {
    menuBtn.innerHTML = "X";
  } else {
    menuBtn.innerHTML = "☰";
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    navLinks.classList.remove("active");

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    });
  });
});

// Form submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // In a real application, you would send this data to a server
  // For now, we'll just show an alert
  alert(`Thank you for your message, ${name}! I'll get back to you soon.`);

  // Clear form
  contactForm.reset();
});

// Add active class to nav links on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

let isMobile = window.innerWidth < 768;
console.log(isMobile)


document.querySelectorAll(".nav-links li").forEach(li=>{
  li.onmouseover = () => {
    if(isMobile)return;
    li.lastElementChild.style.display = "block";
  }

  li.onmouseout = () => {
    li.lastElementChild.style.display = "none";
  }
});