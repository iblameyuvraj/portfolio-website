document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const masonryGrid = document.getElementById("masonry-grid"); // Fixed ID reference
    const menuIcon = document.getElementById("openMenu");
    const navLinks = document.querySelector(".nav-links");
  
    // Theme Toggle
    if (themeToggle) {
        themeToggle.addEventListener("change", function () {
            if (themeToggle.checked) {
                body.classList.add("dark-mode");
                localStorage.setItem("theme", "dark");
            } else {
                body.classList.remove("dark-mode");
                localStorage.setItem("theme", "light");
            }
        });
  
        // Load theme preference from localStorage
        if (localStorage.getItem("theme") === "dark") {
            body.classList.add("dark-mode");
            themeToggle.checked = true;
        }
    }
  
    // Masonry Grid Image Loading
    // if (masonryGrid) {
    //     const images = [
    //         "photos/img1.JPG/400X300",
    //         "photos/img2.JPG/400X300",
    //         "photos/img3.JPG400X300",
    //         "photos/img4.JPG400X40"
    //     ];
  
    //     images.forEach(src => {
    //         const imgElement = document.createElement("img");
    //         imgElement.src = src;
    //         imgElement.classList.add("masonry-item"); // Apply CSS class
    //         masonryGrid.appendChild(imgElement);
    //     });
    // }
  
    // Mobile Navigation Toggle
    if (menuIcon && navLinks) {
        menuIcon.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
  });
  