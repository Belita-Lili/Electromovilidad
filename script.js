// Calculadora de ahorro
document.getElementById('calculator-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const km = parseFloat(document.getElementById('km').value);
    const costoElectrico = km * 0.05; // Costo aproximado por km en un vehículo eléctrico
    const costoCombustion = km * 0.15; // Costo aproximado por km en un vehículo de combustión
    const ahorro = costoCombustion - costoElectrico;

    document.getElementById('resultado').innerText = `Ahorro anual: $${ahorro.toFixed(2)}`;
});

// Mapa interactivo (usando Leaflet.js o Google Maps API)
function initMap() {
    // Ejemplo con Leaflet.js
    const map = L.map('map').setView([-33.4489, -70.6693], 13); // Coordenadas de Santiago, Chile
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Marcador de una estación de carga
    L.marker([-33.4489, -70.6693]).addTo(map)
        .bindPopup('Estación de Carga Central')
        .openPopup();
}

fetch('https://api.openchargemap.io/v3/poi/?countrycode=MX&maxresults=10')
    .then(response => response.json())
    .then(data => {
        data.forEach(estacion => {
            L.marker([estacion.AddressInfo.Latitude, estacion.AddressInfo.Longitude])
                .addTo(map)
                .bindPopup(estacion.AddressInfo.Title);
        });
    });

// Inicializar el mapa al cargar la página
window.onload = initMap;