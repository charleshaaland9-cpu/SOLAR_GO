// ==============================
// MOBILE NAVIGATION MENU
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        const isExpanded = navLinks.classList.contains("show");

        menuToggle.setAttribute("aria-expanded", isExpanded);

        menuToggle.textContent = isExpanded ? "✕" : "☰";
    });
}


// ==============================
// AUTOMATIC COPYRIGHT YEAR
// ==============================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}