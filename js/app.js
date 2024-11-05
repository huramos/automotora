document.addEventListener("DOMContentLoaded", function () {

    const autosLink = document.querySelector("a[href='automoviles.html']");
    const profileLink = document.querySelector("a[href='perfil.html']");
    const logoutLink = document.querySelector("a[onclick='logout()']");

    if (isAuthenticated()) {

        autosLink.style.display = "block";
        profileLink.style.display = "block";
        logoutLink.style.display = "block";
    } else {

        autosLink.style.display = "none";
        profileLink.style.display = "none";
        logoutLink.style.display = "none";
    }
});