document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([37.0388, 22.1167], 9.7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([37.0388, 22.1167]).addTo(map)
        .bindPopup(' Ι. Παλαιολόγου 42, Καλαμάτα 241 00')
        .openPopup();

    L.marker([36.8427, 22.2605]).addTo(map)
        .bindPopup('έναντι Ιερού Ναού Αγίας Τριάδας, Στούπα Δυτικής Μάνης');
});
