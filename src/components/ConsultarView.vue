<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Resultados registrados
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <router-link :to="{ name: 'agregar' }" class="btn btn-success">Agregar Paciente</router-link>
                    <button @click="cerrarSesion" class="btn btn-danger">Cerrar Sesión</button>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DOCUMENTO</th>
                            <th>NOMBRE COMPLETO</th>
                            <th>EDAD</th>
                            <th>GENERO</th>
                            <th>EPS</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="paciente in pacientes" :key="paciente.id">
                            <td scope="row">{{paciente.id}}</td>
                            <td>{{paciente.doc}}</td>
                            <td>{{paciente.name}} {{paciente.lastname}}</td>
                            <td>{{paciente.age}}</td>
                            <td>{{paciente.gender}}</td>
                            <td>{{paciente.eps}}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    <router-link :to="{ name: 'resultados', params: { id: paciente.id } }" class="btn btn-primary">Ver resultados</router-link>
                                    <router-link :to="{ name: 'editar', params: { id: paciente.id } }" class="btn btn-info">Editar</router-link>
                                    <button type="button" @click="confirmarBorrar(paciente.id)" class="btn btn-danger">Borrar</button>
                                    <!-- <button type="button" v-on:click="borrarPaciente(paciente.id)" class="btn btn-danger">Borrar</button> -->
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
        consultarPacientes(){
            fetch('http://localhost/api/')
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.pacientes=datosRespuesta.patients;
            })

            .catch(console.log)
        },
        borrarPaciente(id){
            console.log(id)
            fetch('http://localhost/api/?borrar='+id)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                window.location.href="consultar"

            })
            .catch(console.log)
        },
        confirmarBorrar(id) {
            const confirmacion = window.confirm('¿Seguro que quieres borrar este paciente?');
            if (confirmacion) {
                this.borrarPaciente(id);
            }
        },
        cerrarSesion() {
            this.$router.push({ name: 'home' });
        }
    
    }
}
</script>