import { data } from "./data.js"

export const initializeMap = () => {

    //check if the page has a map element before loading data
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        // Initialize the Leaflet map
        const map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18,
        }).addTo(map);
        // TODO: Add any additional map configuration here
        let points = data.points
        for (let point of points) {
            L.marker([point.latitude, point.longitude]).addTo(map);
        }
    } else {
        // If the map container doesn't exist in the DOM, 
        // log an error or handle the situation as needed.
        console.error('Map container not found in the DOM.');
    }
}
