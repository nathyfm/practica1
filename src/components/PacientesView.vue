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
              <button type="submit" class="btn btn-success" @click="consultarPaciente">Consultar</button>
            
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
        resultados: {},
        paciente: {
          doc: ""
        }
      };
    },
    
    methods: {
    
    consultarPaciente() {
       // Cédula del paciente que estás buscando
        const cedulaPaciente = this.paciente.doc.toString();
        console.log(cedulaPaciente);

        // Realiza una solicitud para obtener todos los pacientes desde tu API
        fetch("http://localhost/api/")
          .then((respuesta) => respuesta.json())
          .then((datosRespuesta) => {
            if (datosRespuesta.patients && Array.isArray(datosRespuesta.patients)) {
              const pacientes = datosRespuesta.patients;
              console.log(pacientes)

              // Busca el paciente con la cédula proporcionada
              const pacienteEncontrado = pacientes.find((paciente) => paciente.doc === cedulaPaciente);
              console.log(pacienteEncontrado)

              if (pacienteEncontrado) {
                // El paciente existe, puedes acceder a su ID
                const idPaciente = pacienteEncontrado.id;
                // Realiza cualquier acción que necesites con el ID del paciente
                console.log(`ID del paciente encontrado: ${idPaciente}`);
                this.$router.push({ name: 'resultados', params: { id: idPaciente } });

              } else {
                // El paciente no existe
                console.log("El paciente no existe en la base de datos.");
                window.confirm('El paciente no existe en la base de datos.');
              }
            }
          })
          .catch(console.log);
      },
    }
  };
  </script>