function registerUser(user) {

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(u => u.username === user.username || u.email === user.email)) {
        alert("El nombre de usuario o el correo ya están registrados.");
        return;
    }

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registro exitoso.");
}

function login(username, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(u => u.username === username && u.password === password);

    if (user) {
        sessionStorage.setItem('authenticatedUser', JSON.stringify(user));
        alert("Inicio de sesión exitoso!");
        window.location.href = "automoviles.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function logout() {
    sessionStorage.removeItem('authenticatedUser');
    alert("Sesión cerrada");
    window.location.href = "index.html";
}

function isAuthenticated() {
    return sessionStorage.getItem('authenticatedUser') !== null;
}



