<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Últimas Ordenes</h2>
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
                  Fecha <br> Entrega
                </th>
                <th class="text-left">
                  Estado
                </th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="ultima in ordenes" :key="ultima.num_orden">
                <td>{{ ultima.num_orden }}</td>
                <td>{{ ultima.cliente }}</td>
                <td>{{ ultima.fecha_entrega }}</td>
                <td>{{ ultima.estado }}</td>
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
  name: "UltimasOrdenes",

  props:{
  ordenes: Array,
  }

 
};
</script>

