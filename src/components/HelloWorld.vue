<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <p>
      Somos su principal elección cuando se trata de cuidar su salud en el ámbito del laboratorio clínico. En nuestras 
      instalaciones, nos destacamos por nuestra meticulosidad en la toma de muestras, lo que garantiza resultados 
      precisos y confiables en una amplia variedad de exámenes médicos.
      <br>
      Nuestros servicios abarcan desde análisis sanguíneos generales hasta pruebas altamente especializadas en 
      bioquímica, genética y biología molecular. Nuestra misión es proporcionar el más alto nivel de atención en 
      ciudades como Buga, Monterrey, Sincelejo y San Marcos. Contamos con un equipo de profesionales altamente 
      capacitados y la tecnología más avanzada para garantizar diagnósticos precisos y seguimientos confiables.
      <br>
      Visite BioMed Laboratorios y descubrirá por qué somos la opción preferida tanto de pacientes como de profesionales 
      de la salud en Colombia. Estamos comprometidos con ofrecerle lo mejor, porque su salud merece la excelencia, y 
      estamos aquí para brindársela.
    </p>
   
    <h3>Información de contacto</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">Visítanos</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">Contáctanos</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
