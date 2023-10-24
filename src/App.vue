<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="navbar-brand">BioMed Laboratorios</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/ingresar" class="nav-link">Ingresar</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/consulta_pacientes" class="nav-link">Consultar resultados</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <br>
    <router-view />
  </div>
</template>

<style>
.no-click {
  pointer-events: none;
}
</style>




