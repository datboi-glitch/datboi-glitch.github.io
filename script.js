/* =========================
   DOM READY
========================= */
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     HAMBURGER MENU (MOBILE)
  ========================= */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  /* =========================
     LIGHTBOX (BLENDER + SFM)
  ========================= */
  const lightbox = document.getElementById("imgLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.querySelector(".close-lightbox");

  if (lightbox && lightboxImg && closeBtn) {
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
  }

  /* =========================
     SMOOTH SCROLL
  ========================= */
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

  /* =========================
     CONTACT SIDEBAR
  ========================= */
  document.querySelectorAll(".contact-sidebar a").forEach(link => {
    link.addEventListener("click", e => {
      e.stopPropagation();
    });
  });

});

/* =========================
   CONTACT SIDEBAR TOGGLE
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
   LOADING SCREEN & PLUTO KEY
========================= */
window.addEventListener("load", () => {
  const loader = document.getElementById("loadingScreen");
  const pluto = document.getElementById("plutoKey");

  if (pluto) {
    pluto.classList.add("pluto-fixed");
  }

  if (loader) {
    loader.style.transition = "opacity 1s ease";
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }
});
