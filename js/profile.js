document.addEventListener("DOMContentLoaded", function () {

    const user = JSON.parse(sessionStorage.getItem('authenticatedUser'));

    if (user) {
        document.getElementById("username").value = user.username;
        document.getElementById("email").value = user.email;
    }
});

document.getElementById("profileForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value;
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = JSON.parse(sessionStorage.getItem('authenticatedUser'));

    users = users.map(user => {
        if (user.username === currentUser.username) {
            user.email = email;
            currentUser.email = email;
        }
        return user;
    });

    localStorage.setItem('users', JSON.stringify(users));
    sessionStorage.setItem('authenticatedUser', JSON.stringify(currentUser));
    alert("Perfil actualizado exitosamente.");
});