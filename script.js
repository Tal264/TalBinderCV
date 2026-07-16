// Dark mode toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Reveal on scroll
function revealElements() {
  const reveals = document.querySelectorAll(".reveal");
  const timelineItems = document.querySelectorAll(".timeline-item");
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) el.classList.add("active");
  });

  timelineItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < windowHeight - 100) item.classList.add("active");
  });
}

window.addEventListener("scroll", revealElements);

// Welcome overlay logic
const mainContent = document.getElementById("mainContent");
const welcomeOverlay = document.getElementById("welcomeOverlay");
const welcomeVideo = document.getElementById("welcomeVideo");

function hideOverlay() {
  welcomeOverlay.classList.add("fade-out");
  setTimeout(() => {
    welcomeOverlay.style.display = "none";
    mainContent.style.display = "block";
    // Delay slightly to allow layout to recalc
    setTimeout(() => revealElements(), 50);
  }, 800);
}

if (welcomeOverlay && mainContent) {
  welcomeOverlay.addEventListener("click", hideOverlay);
  if (welcomeVideo) welcomeVideo.addEventListener("ended", hideOverlay);
} else if (mainContent) {
  mainContent.style.display = "block";
  // Reveal elements now that content is visible
  setTimeout(() => revealElements(), 50);
}

// Scroll to top button
const topButton = document.createElement("button");
topButton.id = "topBtn";
topButton.textContent = "⬆ Top";
document.body.appendChild(topButton);

Object.assign(topButton.style, {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "10px 15px",
  border: "none",
  borderRadius: "8px",
  background: "#333",
  color: "#fff",
  cursor: "pointer",
  display: "none",
  zIndex: "1000",
  boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
});

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Navigation Drawer Toggle & Smooth Scroll
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    // Swap icon between hamburger bars and close 'X'
    const icon = navToggle.querySelector("i");
    if (navMenu.classList.contains("active")) {
      icon.className = "fas fa-times";
    } else {
      icon.className = "fas fa-bars";
    }
  });
}

// Smooth scroll & close mobile menu when link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Smooth scroll to target section
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    // Close the mobile menu automatically after click
    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      navToggle.querySelector("i").className = "fas fa-bars";
    }
  });
});