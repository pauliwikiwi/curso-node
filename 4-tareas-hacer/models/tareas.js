const Tarea = require("./tarea");

class Tareas{
    _listado = {};

    get getlistadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray( tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })

    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    borrarTarea(id = ''){
        if (this._listado[id]){
            delete this._listado[id];
        }
    }

    listadoCompleto(){
        //num. Desc :: Completo | Pendiente
        console.log();
        this.getlistadoArr.forEach((tarea, index) =>{
            const idx = `${index + 1}`.red;
            const {desc, completadoEn} = tarea;
            const estado = completadoEn != null ? `Completado (${completadoEn})`.rainbow : 'Pendiente'.blue
            console.log(`${idx} ${desc} :: ${estado}`)
        });
    }

    listarPendientesCompletadas(completadas = true){
        console.log();
        let contador = 0;

        this.getlistadoArr.forEach((tarea) =>{
            const {desc, completadoEn} = tarea;
            const estado = completadoEn != null ? `Completado en: ${completadoEn}`.rainbow : 'Pendiente'.blue
            if (completadas){
                //mostrar completadas
                if (completadoEn){
                    contador++;
                    console.log(`${(contador + '.').red} ${desc} :: ${estado}`)
                }
            }else{
                //mostar pendientes
                if (!completadoEn){
                    contador++;
                    console.log(`${(contador + '.').red} ${desc} :: ${estado}`)
                }
            }

        });

    }

    toggleCompletadas(ids =[]) {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn){
                tarea.completadoEn = new Date().toLocaleDateString()
            }
        });

        this.getlistadoArr.forEach(tarea => {
            if (!ids.includes(tarea.id)){
                const tareas = this._listado[tarea.id];
                tareas.completadoEn = null;
            }
        })

    }
}
module.exports = Tareas;