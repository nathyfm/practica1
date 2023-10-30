<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Resultados del paciente: {{ paciente.name }} {{ paciente.lastname }}
        <br>
        Documento: {{ paciente.doc }}
        <br>
        Edad: {{ paciente.age }}
        <br>
        Género: {{ paciente.gender }}
        <br>
        EPS: {{ paciente.eps }}
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Resultado</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(resultado, key) in resultados" :key="key">
              <td>{{ key }}</td>
              <td>{{ resultado }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card-footer text-muted">
        <strong>Valores normales:</strong><br>
        <strong>TP:</strong> 11 - 13.5 segundos<br>
        <strong>TPT:</strong> 25 - 35 segundos<br>
        <strong>AT III:</strong> 80% - 120%<br>
        <strong>TT:</strong> 12 - 19 segundos<br>
        <strong>Fibrinógeno:</strong> 2 - 4 g/L
      </div>
      <div class="card-footer text-muted">
      <button @click="volverAtras" class="btn btn-info" style="margin-right: 10px;">Regresar</button>
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
      paciente: {},
      resultados: {},
    };
  },
  created: function () {
    this.cargarResultados();
  },
  methods: {
    volverAtras() {
      // Utiliza el router de Vue Router para volver a la página anterior
      this.$router.go(-1);
    },
    cargarResultados() {
      const idPaciente = this.$route.params.id; 
      console.log(idPaciente)// Obtenemos el ID del paciente desde la URL
      // Realiza una solicitud para cargar los resultados del paciente desde tu API
      fetch(`http://localhost/api/?consultar=${idPaciente}`)
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          if (Array.isArray(datosRespuesta) && datosRespuesta.length > 0) {
            // Asigna los datos del paciente y sus resultados
            this.paciente = datosRespuesta[0];
            this.resultados = {
              'Tiempo de Protrombina (TP)': this.paciente.tp,
              'Tiempo de Tromboplastina Parcial (PTT)': this.paciente.ptt,
              'Antitrombina III (AT III)': this.paciente.at_iii,
              'Tiempo de Trombina (TT)': this.paciente.tt,
              'Fibrinógeno': this.paciente.fibri,
            };
          }
        })
        .catch(console.log);
    },
  },
};
</script>
