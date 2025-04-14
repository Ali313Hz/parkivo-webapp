"use client";

import { useEffect, useState } from "react";
import { getLocations } from "@/controllers/mapController";
import "leaflet/dist/leaflet.css";

export default function DynamicMap({ center, zoom = 12, width = "100%", height = "500px" }) {
    const [map, setMap] = useState(null);

    useEffect(() => {
        let mapInstance;

        async function loadMap() {
            const L = await import("leaflet");

            if (!document.getElementById("map")) return;
            if (L.DomUtil.get("map") !== null) {
                L.DomUtil.get("map")._leaflet_id = null;
            }

            try {
                const locations = await getLocations();
                const start = center || locations[0];

                mapInstance = L.map("map", {
                    dragging: true,
                    zoomControl: true,
                    scrollWheelZoom: true,
                    doubleClickZoom: true,
                    boxZoom: true,
                    touchZoom: true
                }).setView([start.lat, start.lng], zoom);
                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mapInstance);

                locations.forEach((loc) => {
                    L.marker([loc.lat, loc.lng]).addTo(mapInstance).bindPopup(loc.name);
                });

                setMap(mapInstance);
            } catch (error) {
                console.error("Error getting location:", error);
            }
        }

        loadMap();

        return () => {
            if (mapInstance) {
                mapInstance.remove();
            }
        };
    }, [center, zoom]);

    return <div id="map" style={{ width, height }}></div>;
}