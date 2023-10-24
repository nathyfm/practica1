<template>
  <div class="home">
    <div class="logo-container">
      <img alt="Vue logo" src="../assets/logo.png" class="centered-logo">
    </div>
    <HelloWorld msg="Laboratorio Clínico"/>
  </div>
</template>

<style>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.centered-logo {
  max-width: 100%;
  max-height: 100%;
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