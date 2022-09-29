const fs = require('fs');
const axios = require('axios').default;

class Busquedas {
    historial = [];
    dbPath = './db/database.json';

    constructor() {
        this.leerDB();
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

    agregarHistorial(lugar = '') {
        if (this.historial.includes(lugar)) {
            return;
        }
        this.historial.unshift(lugar);
        this.guardarDB();
    }

    guardarDB() {
        const payload = {
            historial: this.historial
        };
        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }

    leerDB() {
        if (!fs.existsSync(this.dbPath)) {
            return;
        }
        
        const data = fs.readFileSync(this.dbPath, { encoding: 'utf-8'});
        this.historial = JSON.parse(data).historial;
    }
}

module.exports = Busquedas;