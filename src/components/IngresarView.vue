<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <b>Ingreso: Especialista de Laboratorio</b>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="iniciarSesion">
                    <div class="form-group">
                        <label for="user">Usuario</label>
                        <input type="text" class="form-control" name="user" v-model="admin.user" id="user" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <input type="password" class="form-control" name="password" v-model="admin.password" id="password" placeholder="">
                    </div>
                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-success">Ingresar</button>
                        <button type="reset" class="btn btn-warning">Limpiar</button>
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
            admin: {
                user: "",
                password: ""
            }
        };
    },
    methods: {
        iniciarSesion() {
            console.log(this.admin);
            let datosAdmin={id:null , user:this.admin.user , password:this.admin.password}
            // Enviar las credenciales al servidor para validar el inicio de sesión
            fetch('http://localhost/api/?iniciar_sesion=1', {
                method: "POST",
                body: JSON.stringify(datosAdmin)
            })
            .then(respuesta => respuesta.json())
            .then(datosAdminRespuesta => {
                if (datosAdminRespuesta.success === 1) {
                    // Las credenciales son válidas, redirigir al usuario
                    window.location.href = 'consultar'; // Redirecciona a la ruta para ver todos los pacientes
                } else {
                    // Las credenciales son inválidas, mostrar mensaje de error
                    alert("Credenciales inválidas. Inténtalo de nuevo.");
                }
            });
        }
    }
}
</script>
