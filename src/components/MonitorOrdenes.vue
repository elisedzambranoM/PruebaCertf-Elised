<template>
  <v-container>
    <v-row class="contenedor">
      <v-col>
        <div>
          <p>Oficina</p>
          <v-select sm="4" :items="oficina" label="Seleccione..."></v-select>
        </div>
      </v-col>
      <v-col>
        <div>
          <p>Estado</p>
          <v-select sm="4" :items="estado" label="Seleccione..."></v-select>
        </div>
      </v-col>
      <v-col>
        <div>
          <p>Fecha de Entrega</p>
          <v-row>
            <v-col>
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Fecha Inicio"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col>
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="Fecha Fin"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col align="center" justify="space-around" class="mt-11">
        <v-btn depressed color="primary">
          Buscar
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  N° Orden
                </th>
                <th class="text-left">
                  Cliente
                </th>
                <th class="text-left">
                  Monto Orden
                </th>
                <th class="text-left">
                  Cant. Productos
                </th>
                <th class="text-left">
                  Fecha Entrega
                </th>
                <th class="text-left">
                  Avance Preparación
                </th>
                <th class="text-left">
                  Estado
                </th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="orden in ordenes" :key="orden.num_orden">
                <td>{{ orden.num_orden }}</td>
                <td>{{ orden.cliente }}</td>
                <td>{{ orden.monto}}</td>
                <td>{{ orden.cant_productos }}</td>
                <td>{{ orden.fecha_entrega }}</td>
                <td>
                  <v-progress-linear
                    v-model="orden.avance_preparacion"
                    color="info"
                    class="grafico"
                    height="25"
                  ></v-progress-linear>
                </td>
                <td>{{ orden.estado}}</td>
                <td>
                  <v-btn
                    x-small
                    color="info"
                    dark
                    @click="redirect(orden.num_orden)"
                  >
                    Ver Detalle
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-start">
        <v-pagination v-model="page" :length="3"></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: "MonitorOrdenes",

  data: () => ({
    estado: [],
    oficina: [],
    ordenes: [],

    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  
    page: 1,
  }),

  created(){
  axios.get('http://localhost:8080/api/estados.json').then(response => {
    this.estado = response.data.estados.map(i=>i.name)
  })

 axios.get('http://localhost:8080/api/oficinas.json').then(response => {
    this.oficina = response.data.oficinas.map(i=>i.name)
  })

  axios.get('http://localhost:8080/api/ordenes.json').then(response => {
    this.ordenes = response.data.ordenes
    console.log(this.ordenes)
  })

},

  methods: {
    redirect(id) {
      this.$router.push(`detalle/${id}`);
    },
  },
};
</script>

<style scoped>
.contenedor {
  border: 1px solid #dbd6d6;
  padding: 5px;
}
.grafico {
  background-color: #f8f8f8;
  border-radius: 16px;
  width: 120px;
  max-height: 12px;
}
.numeracion {
  justify-content: start;
}
</style>
