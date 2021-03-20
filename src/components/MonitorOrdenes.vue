<template>
  <v-container>
    <v-row class="contenedor">
      <v-col>
        <div>
          <p>Oficina</p>
          <v-select sm="4" :items="items" label="Seleccione..."></v-select>
        </div>
      </v-col>
      <v-col>
        <div>
          <p>Estado</p>
          <v-select sm="4" :items="items" label="Seleccione..."></v-select>
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
              <tr v-for="vendedor in ranking" :key="vendedor.id">
                <td>{{ vendedor.num_orden }}</td>
                <td>{{ vendedor.vendedor }}</td>
                <td>{{ vendedor.ventaUnidades }}</td>
                <td>{{ vendedor.ventaPesos }}</td>
                <td>{{ vendedor.metaVta }}</td>
                <td>
                  <v-progress-linear
                    v-model="power"
                    color="info"
                    class="grafico"
                    height="25"
                  ></v-progress-linear>
                </td>
                <td>{{ vendedor.estado }}</td>
                <td>
                  <!-- cambiar el redirect-->
                  <v-btn
                    x-small
                    color="info"
                    dark
                    @click="redirect(vendedor.num_orden)"
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
export default {
  name: "MonitorOrdenes",

  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],

    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,

    ranking: [
      {
        num_orden: "1",
        vendedor: "Juan Valdez",
        ventaUnidades: 130,
        ventaPesos: 154000,
        metaVta: 1500000,
        estado: "Ingresado",
      },
      {
        num_orden: "2",
        vendedor: "Rosita Rosas",
        ventaUnidades: 160,
        ventaPesos: 1540000,
        metaVta: 1500000,
        estado: "Preparación",
      },
      {
        num_orden: "3",
        vendedor: "Luis Enrique",
        ventaUnidades: 560,
        ventaPesos: 153500,
        metaVta: 188000,
        estado: "Preparación",
      },
      {
        num_orden: "4",
        vendedor: "Lisa Perez",
        ventaUnidades: 590,
        ventaPesos: 153000,
        metaVta: 288000,
        estado: "Ingresado",
      },
    ],
    power: 55,

    page: 1,
  }),

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
