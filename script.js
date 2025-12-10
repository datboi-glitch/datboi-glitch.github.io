/* ---------------------------
   HAMBURGER MENU
--------------------------- */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

/* ---------------------------
   LIGHTBOX (Blender + SFM)
--------------------------- */
const lightbox = document.getElementById("imgLightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector(".close-lightbox");

if (lightbox && lightboxImg && closeBtn) {
  // Combine Blender and SFM images
  document.querySelectorAll(".blender-card img, .sfm-card img").forEach(image => {
    image.style.cursor = "pointer";
    image.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = image.src;
      setTimeout(() => lightbox.classList.add("show"), 10);
    });
  });

  // Close lightbox via X button
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
    setTimeout(() => lightbox.style.display = "none", 300);
  });

  // Close lightbox by clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
      setTimeout(() => lightbox.style.display = "none", 300);
    }
  });
}

/* ---------------------------
   SMOOTH SCROLL
--------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* ---------------------------
   LOADING SCREEN
--------------------------- */
window.addEventListener('load', () => {
  const loader = document.getElementById('loadingScreen');
  if (loader) {
    loader.style.transition = 'opacity 2s ease';
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    setTimeout(() => (loader.style.display = 'none'), 2000);
  }
});


/* ---------------------------
   CONTACT SIDEBAR
--------------------------- */
function toggleContact(event) {
  const sidebar = document.getElementById("contactSidebar");
  if (sidebar) {
    sidebar.classList.toggle("active");
  }

  // Stop the click from bubbling up to the document
  if (event) event.stopPropagation();
}

// Close sidebar when clicking outside
document.addEventListener("click", function(e) {
  const sidebar = document.getElementById("contactSidebar");
  const toggleBtn = document.querySelector(".contact-toggle");
  if (sidebar && toggleBtn) {
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
      sidebar.classList.remove("active");
    }
  }
});

