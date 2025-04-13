export const getLocations = async () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve([
                        {
                            name: "Your Location",
                            lat: latitude,
                            lng: longitude,
                        },
                    ]);
                },
                (error) => {
                    console.warn("Geolocalización falló:", error.message);

                    getLocationByIP()
                        .then((location) => {
                            resolve(location);
                        })
                        .catch(() => {
                            resolve([
                                {
                                    name: "Default Location (Spain)",
                                    lat: 40.4168,
                                    lng: -3.7038,
                                },
                            ]);
                        });
                }
            );
        } else {
            getLocationByIP()
                .then((location) => {
                    resolve(location);
                })
                .catch(() => {
                    resolve([
                        {
                            name: "Default Location (Spain)",
                            lat: 40.4168,
                            lng: -3.7038,
                        },
                    ]);
                });
        }
    });
};

//OBTENER UBICACION IP

const getLocationByIP = async () => {
    try {
        const response = await fetch("https://ip-api.com/json/");
        const data = await response.json();
        if (data && data.lat && data.lon) {
            return [
                {
                    name: "IP Location",
                    lat: data.lat,
                    lng: data.lon,
                },
            ];
        } else {
            throw new Error("No se pudo obtener la ubicación por IP.");
        }
    } catch (error) {
        console.warn("Error obteniendo ubicación por IP:", error.message);
        throw error;
    }
};
