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

    async buscarCiudad(ciudad = '') {
        try {
            const axiosInstance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ciudad}.json`,
                params: this.paramsMapBox
            });
            const response = await axiosInstance.get();
            console.log(response.data);
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

module.exports = Busquedas;