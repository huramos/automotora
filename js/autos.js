function loadAutos() {
    const autosList = document.getElementById("autosList");

    autos.forEach(auto => {
        const autoCard = document.createElement("div");
        autoCard.className = "col-md-4 mb-4";

        autoCard.innerHTML = `
            <div class="card h-100">
                <img src="${auto.image}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${auto.marca} ${auto.modelo} ${auto.anio}
                    <p class="card-text"><strong>Precio: </strong>$${auto.price}
                    <a href="auto-detalle.html?id=${auto.id}" class="btn btn-success">Ver Detalle</a>
                </div>
            </div>
        `;

        autosList.appendChild(autoCard);
    });
}
