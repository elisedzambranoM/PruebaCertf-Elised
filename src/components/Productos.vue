<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Cod Producto
          </th>
          <th class="text-left">
            Descripción
          </th>
          <th class="text-left">
            Precio Unit.
          </th>
          <th class="text-left">
            Cant. Pedido
          </th>
          <th class="text-left">
            Cant. Pickeado
          </th>
          <th class="text-left">
            Cumplimiento
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cumplimiento in cumplimientos" :key="cumplimiento.periodo">
          <td>{{ cumplimiento.periodo }}</td>
          <td>{{ cumplimiento.venta_unidades }}</td>
          <td>{{ cumplimiento.venta_pesos }}</td>
          <td>{{ cumplimiento.meta }}</td>
          <td>
            <v-progress-linear
              :value="porcentaje(cumplimiento.venta_pesos, cumplimiento.meta)"
              color="blue-grey"
              height="25"
            >
              <template v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "Productos",
  props: {
    cumplimientos: {
      type: Array,
      required: true,
    },
  },
  data: function() {
    return {};
  },
  // computed: {},
  methods: {},
  // components: {},
};
</script>

<style scoped></style>
