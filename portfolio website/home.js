document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const navLinks = document.getElementById("navLinks");

  if (openMenu && closeMenu && navLinks) {
      openMenu.addEventListener("click", function () {
          navLinks.classList.add("active");
      });
      closeMenu.addEventListener("click", function () {
          navLinks.classList.remove("active");
      });
  }

  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  if (themeToggle) {
      // Load saved theme preference
      if (localStorage.getItem("theme") === "dark") {
          body.classList.add("dark-mode");
          themeToggle.checked = true;
      }

      themeToggle.addEventListener("change", function () {
          if (this.checked) {
              body.classList.add("dark-mode");
              localStorage.setItem("theme", "dark");
          } else {
              body.classList.remove("dark-mode");
              localStorage.setItem("theme", "light");
          }
      });
  }

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 70,
                  behavior: "smooth"
              });
          }
      });
  });

  // Typewriter Effect
  const textElement = document.getElementById("typewriter-text");
  const words = ["Front-End Developer", "UI/UX Enthusiast", "JavaScript Lover"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
      if (textElement) {
          let currentWord = words[wordIndex];
          let displayText = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);
          textElement.textContent = displayText;

          if (!isDeleting && charIndex === currentWord.length) {
              isDeleting = true;
              setTimeout(typeEffect, 1000);
          } else if (isDeleting && charIndex === 0) {
              isDeleting = false;
              wordIndex = (wordIndex + 1) % words.length;
              setTimeout(typeEffect, 500);
          } else {
              setTimeout(typeEffect, isDeleting ? 50 : 150);
          }
          charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      }
  }
  typeEffect();
});




document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm("service_quzqy4g", "template_p7tjdu9", this, "W183TofVglmg97YYd")
        .then(function (response) {
            console.log("✅ Email sent successfully!", response);
            alert("Your message has been sent!");
        }, function (error) {
            console.error("❌ Failed to send email:", error);
            alert("Oops! Something went wrong.");
        });
});
