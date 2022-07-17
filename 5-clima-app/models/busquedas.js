const fs = require('fs');
const axios = require('axios').default;

class Busquedas{

    historial = [];
    dbpath = './db/database.json';

    constructor() {
        //TODO: leer db si existe
        this.leerDB();
    }

    get HistorialCapitalizado(){
        //capitalizar
        return this.historial.map(lugar => {

            let palabras = lugar.split(' ');
            palabras = palabras.map( p=> (p[0]).toUpperCase() + p.substring(1));

            return palabras.join(' ');

        })
    }

    async ciudad(lugar = ''){

        try{
            const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`;
            const params = {
                'access_token': process.env.MAPBOX_KEY,
                'language':'es',
            }
            const response = await axios.get(url,{params} );

            return response.data.features.map(lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            })) //retornar los lugares
        }catch (error){
            return error;
        }


    }

    async climaLugar(lat, lon){
        try{
            //instancia de axios
            const url = 'https://api.openweathermap.org/data/2.5/weather';
            const params = {
                lat,
                lon,
                appid: process.env.WEATHER_KEY,
                lang: 'es',
                units: 'metric'
            }
            //respuesta.data
            const response = await axios.get(url, {params});
            console.log(response.data);
            const data = response.data
            return {
                desc: data.weather[0].description,
                min: Math.round(data.main.temp_min),
                max: Math.round(data.main.temp_max),
                temp: Math.round(data.main.temp)
            }
        }catch (e){
            console.log(e);
        }
    }

    agregarHistorial(lugar = ''){
        //TODO: prevenir duplicados
        if(this.historial.includes(lugar.toLowerCase())){
            return
        }

        this.historial = this.historial.splice(0,5);

        this.historial.unshift(lugar.toLowerCase());
        //Grabar en db (archivo de texto)
        this.guardarDB();

    }

    guardarDB(){
        const payload = {
            historial: this.historial,
        }
        fs.writeFileSync(this.dbpath, JSON.stringify(payload))
    }
    leerDB(){
        //Debe de existir

        if(!fs.existsSync(this.dbpath)){
            return;
        }
        const info = fs.readFileSync(this.dbpath, {encoding: 'utf-8'});
        const data = JSON.parse(info);
        this.historial = data.historial;
    }
}

module.exports = Busquedas;