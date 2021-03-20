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
              <tr v-for="devolucion in devoluciones" :key="devolucion.num_orden">
                <td>{{ devolucion.num_orden }}</td>
                <td>{{ devolucion.cliente }}</td>
                <td>{{ devolucion.fecha_entrega }}</td>
                <td>{{ devolucion.estado }}</td>
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
props:{
  devoluciones: Array,
}
};
</script>

<style></style>