function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

document.getElementById("menu-icon").addEventListener("click", function() {
    toggleMenu();
});

document.getElementById("close").addEventListener("click", function() {
    toggleMenu();
});