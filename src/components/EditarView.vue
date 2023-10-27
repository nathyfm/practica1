<template>

    <div class="container">
        
        <div class="card">
            <div class="card-header">
                <b>Editar paciente registrado</b>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="actualizarRegistro">
                    <div class="form-group">
                      <label for="doc">Documento de identidad</label>
                      <input type="number"
                        class="form-control" name="doc" v-model="paciente.doc" id="doc" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Ingrese el documento del paciente</small>
                    </div>
                    <div class="form-group">
                      <label for="name">Nombre</label>
                      <input type="text"
                        class="form-control" name="name" v-model="paciente.name"  id="name" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Ingrese el nombre del paciente</small>
                    </div>
                    <div class="form-group">
                      <label for="lastname">Apellidos</label>
                      <input type="text"
                        class="form-control" name="lastname"  v-model="paciente.lastname" id="lastname" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Ingrese los apellidos del paciente</small>
                    </div>
                    <div class="form-group">
                      <label for="age">Edad</label>
                      <input type="number"
                        class="form-control" name="age"  v-model="paciente.age" id="age" aria-describedby="helpId" placeholder="">
                      <small id="helpId" class="form-text text-muted">Ingrese la edad del paciente</small>
                    </div>
                    <div class="form-group">
                        <label for="gender">Género</label>
                        <select id="gender" v-model="paciente.gender" class="form-control" required>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="eps">EPS</label>
                        <select id="eps" v-model="paciente.eps" class="form-control" required>
                          <option value="NUEVA EPS S.A.">NUEVA EPS S.A.</option>
                          <option value="SALUD TOTAL S.A. E.P.S.">SALUD TOTAL S.A. E.P.S.</option>
                          <option value="SAVIA SALUD EPS">SAVIA SALUD EPS</option>
                          <option value="E.P.S. SANITAS S.A.">E.P.S. SANITAS S.A.</option>
                          <option value="SURA E.P.S. ">SURA E.P.S. </option>
                          <option value="E.P.S. SAVIA SALUD">E.P.S. SAVIA SALUD</option>
                        </select>
                    </div>
                    <div class="form-group">
                      <label for="tp">Tiempo de Protrombina</label>
                      <input type="number"
                        class="form-control" name="tp"  v-model="paciente.tp" id="tp" aria-describedby="helpId" placeholder="" step="0.01">
                      <small id="helpId" class="form-text text-muted">Valor de TP</small>
                    </div>
                    <div class="form-group">
                      <label for="ptt">Tiempo de Tromboplastina Parcial</label>
                      <input type="number"
                        class="form-control" name="ptt"  v-model="paciente.ptt" id="ptt" aria-describedby="helpId" placeholder="" step="0.01">
                      <small id="helpId" class="form-text text-muted">Valor de PTT</small>
                    </div>
                    <div class="form-group">
                      <label for="at_iii">Antitrombina III</label>
                      <input type="number"
                        class="form-control" name="at_iii"  v-model="paciente.at_iii" id="at_iii" aria-describedby="helpId" placeholder="" step="0.01">
                      <small id="helpId" class="form-text text-muted">Valor de AT III</small>
                    </div>
                    <div class="form-group">
                      <label for="tt">Tiempo de Trombina</label>
                      <input type="number"
                        class="form-control" name="tt"  v-model="paciente.tt" id="tt" aria-describedby="helpId" placeholder="" step="0.01">
                      <small id="helpId" class="form-text text-muted">Valor de TT</small>
                    </div>
                    <div class="form-group">
                      <label for="fibri">Fibrinógeno</label>
                      <input type="number"
                        class="form-control" name="fibri"  v-model="paciente.fibri" id="fibri" aria-describedby="helpId" placeholder="" step="0.01">
                      <small id="helpId" class="form-text text-muted">Valor de fibrinógeno</small>
                    </div>
                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-success">Modificar</button>
                        <router-link :to="{ name: 'consultar' }" class="btn btn-warning">Cancelar</router-link>
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
    created:function(){
        this.obtenerInformacionID();
    },
    methods:{
        obtenerInformacionID(){
            fetch('http://localhost/api/?consultar='+this.$route.params.id)
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta)=>{
                console.log(datosRespuesta)
                this.paciente=datosRespuesta[0];

            })
            .catch(console.log)
        },
        actualizarRegistro(){
            let datosEnviar={id:this.$route.params.id , doc:this.paciente.doc , name:this.paciente.name , lastname:this.paciente.lastname, age:this.paciente.age, gender:this.paciente.gender, eps:this.paciente.eps, tp:this.paciente.tp, ptt:this.paciente.ptt, at_iii:this.paciente.at_iii, tt:this.paciente.tt, fibri:this.paciente.fibri}
            fetch('http://localhost/api/?actualizar='+this.$route.params.id ,{
                method:"POST",
                body:JSON.stringify(datosEnviar)
            })
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta=>{
                console.log(datosRespuesta);
                window.location.href='../consultar' //Redirecciona a la ruta consultar donde se presenta la info actualizada
            })) 
        }
    }

}
</script>