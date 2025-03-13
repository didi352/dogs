document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector("nav ul");

    // Otevření a zavření menu při kliknutí
    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("active");
    });

    // Automatické zvýraznění aktivní stránky
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});