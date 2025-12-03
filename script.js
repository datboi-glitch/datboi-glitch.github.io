/* ---------------------------
   HAMBURGER MENU
--------------------------- */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

/* ---------------------------
   LIGHTBOX (Blender Section Only)
--------------------------- */
const lightbox = document.getElementById("imgLightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".close-lightbox");

// Only select images inside the Blender section
document.querySelectorAll(".blender-card img").forEach(image => {
  image.style.cursor = "pointer"; // indicate clickability
  image.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = image.src; // show the original Blender image
    setTimeout(() => {
      lightbox.classList.add("show"); // fade-in animation
    }, 10);
  });
});

// Close lightbox via X button
closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("show");
  setTimeout(() => {
    lightbox.style.display = "none";
  }, 300); // match CSS transition duration
});

// Close lightbox by clicking outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("show");
    setTimeout(() => {
      lightbox.style.display = "none";
    }, 300);
  }
});

/* ---------------------------
   SMOOTH SCROLL
--------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* ---------------------------
   LOADING SCREEN
--------------------------- */
window.addEventListener('load', () => {
  const loader = document.getElementById('loadingScreen');
  loader.style.transition = 'opacity 2s ease';
  loader.style.opacity = '0';
  loader.style.pointerEvents = 'none';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 2000); // match the 2s transition
});
// ---------------------------
// LIGHTBOX FOR SFM
// ---------------------------
document.querySelectorAll(".sfm-card img").forEach(image => {
  image.style.cursor = "pointer"; // show pointer on hover
  image.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = image.src;   // show original image
    setTimeout(() => {
      lightbox.classList.add("show"); // fade-in animation
    }, 10);
  });
});
