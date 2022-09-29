const axios = require('axios').default;

class Busquedas {
    historial = ['Buenos Aires', 'Madrid', 'Tel Aviv'];

    constructor() {
        // TODO: Leer DB si existe
    }

    async buscarCiudad(ciudad = '') {
        try {
            const response = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madrid.json?access_token=pk.eyJ1IjoiZmVkZWxldmluMyIsImEiOiJjbDhtYWRoNmswMGJhM29uNGxuZTVqd3VpIn0.0kyei-rY8xfYAg66Mcllew&language=es');
            console.log(response.data);
        } catch (error) {
            return [];
        }
    }
}

module.exports = Busquedas;