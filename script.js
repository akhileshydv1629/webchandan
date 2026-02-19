// Sticky header effect
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Hamburger toggle
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
