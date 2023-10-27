
<template>
  <div class="home">
    <div class="content">
      <HelloWorld msg="Laboratorio Clínico"/>
   
    </div>    
  </div>
</template>

<style>
.home {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background: url(../assets/logo.png) no-repeat left center; /* Establece el logo como fondo */
  background-size: contain; /* Ajusta el tamaño del fondo */
  padding-left: 200px; /* Ajusta el espacio a la izquierda del logo */
}

.centered-logo {
  max-width: 150px; /* Ajusta el tamaño del logo según tus necesidades */
  max-height: 150px; /* Ajusta el tamaño del logo según tus necesidades */
}
</style>



<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>