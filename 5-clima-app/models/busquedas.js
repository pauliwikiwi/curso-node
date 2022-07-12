const axios = require('axios').default;

class Busquedas{

    historial = ['Madrid', 'Tenerife', 'Valencia'];

    constructor() {
        //TODO: leer DB si existe
    }

    async ciudad(lugar = ''){

        try{
            //peticion http
            /*console.log('ciudad: ', lugar);*/
            const response = await axios.get('https://reqres.in/api/users?page=2');
            console.log(response.data);
            return []; //retornar los lugares
        }catch (error){
            return [];
        }


    }

}

module.exports = Busquedas;