<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Agregar nuevo Paciente
                <router-link :to="{ name: 'consultar' }" class="btn btn-primary" style="float: right;">Regresar a registros</router-link>
            </div>
            <div class="card-body">
                <form @submit.prevent="agregarPaciente">
                    <div class="form-group">
                        <label for="doc">Documento:</label>
                        <input type="number" id="doc" v-model="nuevoPaciente.doc" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" v-model="nuevoPaciente.name" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="lastname">Apellido:</label>
                        <input type="text" id="lastname" v-model="nuevoPaciente.lastname" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="age">Edad:</label>
                        <input type="number" id="age" v-model="nuevoPaciente.age" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="gender">Género:</label>
                        <select id="gender" v-model="nuevoPaciente.gender" class="form-control" required>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="eps">EPS:</label>
                        <select id="eps" v-model="nuevoPaciente.eps" class="form-control" required>
                            <option value="NUEVA EPS S.A.">NUEVA EPS S.A.</option>
                            <option value="SALUD TOTAL S.A. E.P.S.">SALUD TOTAL S.A. E.P.S.</option>
                            <option value="SAVIA SALUD EPS">SAVIA SALUD EPS</option>
                            <option value="E.P.S. SANITAS S.A.">E.P.S. SANITAS S.A.</option>
                            <option value="SURA E.P.S. ">SURA E.P.S. </option>
                            <option value="E.P.S. SAVIA SALUD">E.P.S. SAVIA SALUD</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="tp">Tiempo de Protrombina:</label>
                        <input type="number" id="tp" v-model="nuevoPaciente.tp" class="form-control" required step="0.01">
                        <small id="helpId" class="form-text text-muted">Ingrese resultado - TP</small>
                    </div>
                    <div class="form-group">
                        <label for="ptt">Tiempo de Tromboplastina Parcial:</label>
                        <input type="number" id="ptt" v-model="nuevoPaciente.ptt" class="form-control" required step="0.01">
                        <small id="helpId" class="form-text text-muted">Ingrese resultado - PTT</small>
                    </div>
                    <div class="form-group">
                        <label for="at_iii">Antitrombina III:</label>
                        <input type="number" id="at_iii" v-model="nuevoPaciente.at_iii" class="form-control" required step="0.01">
                        <small id="helpId" class="form-text text-muted">Ingrese resultado - AT III</small>
                    </div>
                    <div class="form-group">
                        <label for="tt">Tiempo de Trombina:</label>
                        <input type="number" id="tt" v-model="nuevoPaciente.tt" class="form-control" required step="0.01">
                        <small id="helpId" class="form-text text-muted">Ingrese resultado - TT</small>
                    </div>
                    <div class="form-group">
                        <label for="fibri">Fibrinógeno:</label>
                        <input type="number" id="fibri" v-model="nuevoPaciente.fibri" class="form-control" required step="0.01">
                        <small id="helpId" class="form-text text-muted">Ingrese resultado fibrinógeno</small>
                    </div>
                    <!-- Al accionar el boton se guarda la info -->
                    <button type="submit" class="btn btn-success">Guardar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nuevoPaciente: {
                doc: "",
                name: "",
                lastname: "",
                age: "",
                gender: "",
                eps: "",
                tp:"",
                ptt:"",
                at_iii:"",
                tt:"",
                fibri:""
            },
        };
    },
    methods: {
        agregarPaciente() {
            // Realiza una solicitud POST para agregar el nuevo paciente
            fetch('http://localhost/api/?insertar', {
                method: 'POST',
                body: JSON.stringify(this.nuevoPaciente),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                if (datosRespuesta.success) {
                    console.log("Paciente agregado correctamente");
                    setTimeout(() => {
                        this.$router.push({ name: 'consultar' });
                });
            }
            else {
                console.error("Error al agregar el paciente");
            }
            })
            .catch(console.log);
        }
    }
};
</script>
