/* =========================
   HAMBURGER MENU (MOBILE)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
});

/* =========================
   LIGHTBOX (BLENDER + SFM)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("imgLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.querySelector(".close-lightbox");

  if (!lightbox || !lightboxImg || !closeBtn) return;

  document
    .querySelectorAll(".blender-card img, .sfm-card img")
    .forEach(image => {
      image.style.cursor = "pointer";
      image.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
        setTimeout(() => lightbox.classList.add("show"), 10);
      });
    });

  const closeLightbox = () => {
    lightbox.classList.remove("show");
    setTimeout(() => {
      lightbox.style.display = "none";
    }, 300);
  };

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
  });
});

/* =========================
   SMOOTH SCROLL
========================= */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

/* =========================
   CONTACT SIDEBAR
========================= */
function toggleContact(event) {
  const sidebar = document.getElementById("contactSidebar");
  if (sidebar) sidebar.classList.toggle("active");
  if (event) event.stopPropagation();
}

document.addEventListener("click", e => {
  const sidebar = document.getElementById("contactSidebar");
  const toggleBtn = document.querySelector(".contact-toggle");

  if (
    sidebar &&
    toggleBtn &&
    !sidebar.contains(e.target) &&
    !toggleBtn.contains(e.target)
  ) {
    sidebar.classList.remove("active");
  }
});

/* =========================
   HEADER SHRINK ON SCROLL
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("shrink", window.scrollY > 80);
  });
});

/* =========================
   LOADING SCREEN & PLUTO KEY
========================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loadingScreen");
  const pluto = document.getElementById("plutoKey");

  // Move Pluto key to header
  if (pluto) {
    pluto.classList.add("pluto-fixed");
  }

  // Fade out loading screen
  if (loader) {
    loader.style.transition = "opacity 1s ease";
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }
});
