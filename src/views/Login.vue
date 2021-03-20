<template>
  <v-container>
    <v-row>
      <v-col class="contenedor" md="12">
        <div class="jumbo">
          <h1 class="nombre-empresa">ClassicModels</h1>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="6">
        <h1>Login</h1>
        <h2>user: usuario@classicmodels.com</h2>
        <h2 class="mb-5">password: abc123</h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col md="6">
        <v-card elevation="5">
          <v-form
            ref="form"
            v-model="valid"
            class="text-center formulario"
            lazy-validation
          >
            <h2>Login Usuarios</h2>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Correo"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="[(v) => !!v || 'Contraseña requerida']"
              label="Contraseña"
              :type="showPassword ? 'text' : 'password'"
              required
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
            <v-row>
              <v-col>
                Ingrese sus credenciales de usuario
              </v-col>
            </v-row>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4 formulario-btn"
              @click="submit"
            >
              Ingresar
            </v-btn>
            <v-btn color="error" class="mr-4 formulario-btn" @click="reset">
              Limpiar
            </v-btn>
          </v-form>
          <v-spacer></v-spacer>
          <v-alert v-if="!userFind" type="warning">
            No estas registrado en el sistema
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "Login",
  data: function() {
    return {
      valid: true,
      email: "",
      password: "",
      showPassword: false,
      emailRules: [
        (v) => !!v || "Correo requerido",
        (v) => /.+@.+\..+/.test(v) || "Correo no valido",
      ],
      userFind: true,
    };
  },
  methods: {
    ...mapActions(["setUserData"]),
    validate() {
      return this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    submit() {
      //guardia
      if (this.validate() === false) return;

      axios
        .get("http://localhost:8080/api/login.json")
        .then((resp) => {
          console.log(resp.data);
          let user = resp.data;
          if (user.email == this.email && user.pass == this.pass) {
            this.setUserData(user);
            this.$router.push("/");
            this.userFind = true;
          } else {
            this.userFind = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.formulario {
  padding: 40px;
}
.formulario-btn {
  margin-top: 2rem;
}
.nombre-empresa {
  color: #287b94;
  font-family: cursive;
}
</style>
