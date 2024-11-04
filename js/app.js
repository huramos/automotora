document.addEventListener("DOMContentLoaded", function () {

    const gamesLink = document.querySelector("a[href='automoviles.html']");
    const profileLink = document.querySelector("a[href='perfil.html']");
    const logoutLink = document.querySelector("a[onclick='logout()']");

    if (isAuthenticated()) {

        gamesLink.style.display = "block";
        profileLink.style.display = "block";
        logoutLink.style.display = "block";
    } else {

        gamesLink.style.display = "none";
        profileLink.style.display = "none";
        logoutLink.style.display = "none";
    }
});

