// Dark mode toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// reveal elements
  const reveals = document.querySelectorAll(".reveal");
    window.addEventListener("scroll", () => {
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    });

    const timelineItems = document.querySelectorAll('.timeline-item');

const revealTimeline = () => {
  const windowHeight = window.innerHeight;
  timelineItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealTimeline);
window.addEventListener('load', revealTimeline);
