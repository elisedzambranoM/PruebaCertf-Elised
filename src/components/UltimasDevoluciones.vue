<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Últimas Devoluciones</h2>
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
                  Fecha <br> Devolución
                </th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="producto in ranking" :key="producto.id">
                <td>{{ producto.id }}</td>
                <td>{{ producto.producto }}</td>
                <td>{{ producto.unidades }}</td>
                <td>
                  <v-btn x-small color="info" dark>
                    Ver Detalle
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UltimasDevoluciones",

  data() {
    return {
      ranking: [
        {
          id: "54321",
          producto: "Placa Madre Asus",
          unidades: 137,
        },
        {
          id: "54320",
          producto: "Porcesador Intel",
          unidades: 98,
        },
        {
          id: "54322",
          producto: "SSD Western",
          unidades: 122,
        },
        {
          id: "54321",
          producto: "Corsair RAM 32",
          unidades: 95,
        },
      ],
    };
  },
};
</script>

<style></style>