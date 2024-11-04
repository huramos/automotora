const urlParams = new URLSearchParams(window.location.search);
const autoId = parseInt(urlParams.get('id'));
console.log("ID del auto:", autoId);

function loadAutoDetail() {
    const auto = autos.find(g => g.id === autoId);

    console.log("Automóvil encontrado:", auto);

    if (auto) {

        document.getElementById("autoImage").src = auto.image;
        document.getElementById("autoMarca").textContent = auto.marca;
        document.getElementById("autoModelo").textContent = `Modelo: ${auto.modelo}`;
        document.getElementById("autoAnio").textContent = `Año: ${auto.anio}`;
        document.getElementById("autoEstado").textContent = `Estado: ${auto.estado}`;
        document.getElementById("autoKm").textContent = auto.km + "  KMs.";

        document.getElementById("autoPrice").textContent = `Precio: $${auto.price}`;

        if (auto.discount > 0) {
            const discountPrice = auto.price - (auto.price * auto.discount / 100);
            document.getElementById("autoDiscountPrice").textContent = `Precio con descuento: $${discountPrice.toFixed(2)}`;
        } else {
            document.getElementById("autoDiscountPrice").textContent = "Este auto no tiene descuento.";
        }
    } else {
        alert("auto no encontrado.");
        window.location.href = "autos.html";
    }
}

document.addEventListener("DOMContentLoaded", loadAutoDetail);
