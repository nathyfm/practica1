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