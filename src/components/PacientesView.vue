<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <b>Consulta de resultados por paciente</b>
        </div>
        <div class="card-body">
          <form @submit.prevent="consultarRegistro">
            <div class="form-group">
              <label for="doc">Documento de identidad</label>
              <input type="number" class="form-control" name="doc" v-model="paciente.doc" id="doc" aria-describedby="helpId" placeholder="">
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
    data() {
      return {
        paciente: {
          doc: ""
        }
      };
    },
    methods: {
      consultarRegistro() {
        console.log(this.paciente);
        // Realiza una solicitud para verificar si el paciente existe en la base de datos
        fetch(`http://localhost/api/?consultar=${this.paciente.doc}`, {
          method: "GET"
        })
          .then(respuesta => respuesta.json())
          .then(datosRespuesta => {
            if (Array.isArray(datosRespuesta) && datosRespuesta.length > 0) {
              // El paciente existe, muestra un mensaje o realiza la acción adecuada
              alert("El paciente existe en la base de datos.");
              // Aquí puedes redirigir o tomar otras acciones si el paciente existe
            } else {
              // El paciente no existe, muestra un mensaje de error
              alert("El paciente no existe en la base de datos.");
            }
          })
          .catch(error => {
            console.error("Error al consultar el registro:", error);
          });
      }
    }
  };
  </script>
  
  



<!-- <template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <b>Consulta de resultados por paciente</b>
            </div>
            <div class="card-body">
                <form @submit.prevent="consultarRegistro">
                    <div class="form-group">
                        <label for="doc">Documento de identidad</label>
                        <input type="number" class="form-control" name="doc" v-model="paciente.doc" id="doc" aria-describedby="helpId" placeholder="">
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
    data() {
        return {
            paciente: {
                doc: ""
            }
        };
    },
    methods: {
        consultarRegistro() {
            console.log(this.paciente);
            // Realiza una solicitud para verificar si el paciente existe en la base de datos
            fetch(`http://localhost/api/?consultar=${this.paciente.doc}`, {
                method: "GET"
            })
            .then(respuesta => respuesta.json())
            .then(datosRespuesta => {
                if (Array.isArray(datosRespuesta) && datosRespuesta.length > 0) {
                    // El paciente existe, redirige a la página de resultados y pasa el ID del paciente
                    const paciente = datosRespuesta[0];
                    this.$router.push({ name: 'resultados', params: { id: paciente.id } });
                } else {
                    // El paciente no existe, muestra un mensaje de error o realiza una acción adecuada
                    console.log("El paciente no existe en la base de datos.");
                }
            })
            .catch(error => {
                console.error("Error al consultar el registro:", error);
            });
        }
    }
}
</script> -->



<!-- <template>
    <div class="container">
        
        <div class="card">
            <div class="card-header">
                <b>Consulta de resultados por paciente</b>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="consultarRegistro">
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
        consultarRegistro(){
            console.log(this.paciente)
            let datosEnviar={id:null , doc:this.paciente.doc , name:this.paciente.name , lastname:this.paciente.lastname, age:this.paciente.age, gender:this.paciente.gender, eps:this.paciente.eps, tp:this.paciente.tp, ptt:this.paciente.ptt, at_iii:this.paciente.at_iii, tt:this.paciente.tt, fibri:this.paciente.fibri}
            fetch('http://localhost/api/?consultar=1',{
                method:"GET",
                body:JSON.stringify(datosEnviar)
            })
            .then(respuesta=>respuesta.json())
            .then((datosRespuesta=>{
                console.log(datosRespuesta);
                window.location.href='result_ind' //Redirecciona a la ruta de consulta de resultados por paciente
            }))
        }
    }
}
</script> -->