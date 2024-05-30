// JavaScript wird hier nur benötigt, um das Dropdown-Menü für den "Home"-Button zu aktivieren.

document.getElementById("home-btn").addEventListener("click", function() {
    document.getElementById("home-dropdown").classList.toggle("show");
});