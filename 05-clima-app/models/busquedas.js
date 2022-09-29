const axios = require('axios').default;

class Busquedas {
    historial = ['Buenos Aires', 'Madrid', 'Tel Aviv'];

    constructor() {
        // TODO: Leer DB si existe
    }

    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'language': 'es'
        }
    }

    get paramsOpenWeather() {
        return {
            'appid': process.env.OPENWEATHER_KEY,
            'lang': 'es',
            'units': 'metric'
        }
    }

    async buscarCiudad(ciudad = '') {
        try {
            const axiosInstance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ciudad}.json`,
                params: this.paramsMapBox
            });
            const response = await axiosInstance.get();
            
            return response.data.features.map( ciudadRespone => ({
                id: ciudadRespone.id,
                nombre: ciudadRespone.place_name,
                lng: ciudadRespone.center[0],
                lat: ciudadRespone.center[1]
            }));
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async buscarClima(lat, lon) {
        try {
            const axiosInstance = axios.create({
                baseURL: 'http://api.openweathermap.org/data/2.5/weather',
                params: { ...this.paramsOpenWeather, lat, lon}
            });
            const response = await axiosInstance.get();
            const { weather, main } = response.data;
            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

module.exports = Busquedas;