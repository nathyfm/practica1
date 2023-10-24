<template>
    <div class="container">
        
        <div class="card">
            <div class="card-header">
                <b>Consulta de resultados por paciente</b>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="agregarRegistro">
                    <div class="form-group">
                      <label for="doc">Documento de identidad</label>
                      <input type="number"
                        class="form-control" name="doc" v-model="paciente.doc" id="doc" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Ingrese su número de identificación</small>
                    </div>
                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-success">Consultar</button>
                    </div>


                </form>
            </div>
            <div class="card-footer text-muted">
                Copyright: Bioing Company 2023
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            paciente:{}
        }
    },
    methods:{
        agregarRegistro(){
            console.log(this.paciente)
            let datosEnviar={id:null , doc:this.paciente.doc , name:this.paciente.name , lastname:this.paciente.lastname}
            fetch('http://localhost/api/?insertar=1',{
                method:"POST",
                body:JSON.stringify(datosEnviar)
            })
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta=>{
                console.log(datosRespuesta);
                window.location.href='listar' //Redirecciona a la ruta listar
            }))
        }
    }
}
</script>







<!-- <template>
    <div class="container">
        
        <div class="card">
            <div class="card-header">
                <b>Consulta de resultados por paciente</b>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="consultarRegistro">
                    <div class="form-group">
                      <label for="doc">Número de identificación</label>
                      <input type="number"
                        class="form-control" name="doc" v-model="consultarPaciente.doc" id="doc" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Ingrese su número de identificación</small>
                    </div>
 
                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-success">Ingresar</button>
                        <button type="reset" class="btn btn-warning">Limpiar</button>
                    </div>

                </form>
            </div>
            <div class="card-footer text-muted">
                Copyright: Bioing Company 2023
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pacientes:[]
        }
    },
    created:function(){
        this.consultarPacientes();
    },
    methods:{
        //http://localhost/api/
        consultarPacientes(){
            fetch('http://localhost/api/')
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.pacientes=[]
                if(typeof datosRespuesta[0].success==='undefined'){
                    this.pacientes=datosRespuesta;
                }

            })
            .catch(console.log)
        },
        borrarPaciente(id){
            console.log(id)
            //http://localhost/api/?borrar=
            fetch('http://localhost/api/?borrar='+id)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                window.location.href="listar"

            })
            .catch(console.log)
        }

    }
}
</script>

<script>
export default {
    data(){
        return{
            paciente:{}
        }
    },
    methods:{
        agregarRegistro(){
            console.log(this.paciente)
            let datosEnviar={id:null , doc:this.paciente.doc , name:this.paciente.name , lastname:this.paciente.lastname}
            fetch('http://localhost/api/?insertar=1',{
                method:"POST",
                body:JSON.stringify(datosEnviar)
            })
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta=>{
                console.log(datosRespuesta);
                window.location.href='consultar' //Redirecciona a la ruta consultar por paciente
            }))
        }
    }
}
</script> --> 

