<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            RUT
          </th>
          <th class="text-left">
            Dirección Entrega
          </th>
          <th class="text-left">
            Contacto
          </th>
          <th class="text-left">
            Fono
          </th>
          <th class="text-left">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente in cartera" :key="cliente.id_cliente">
          <td>{{ cliente.id_cliente }}</td>
          <td>{{ cliente.nombre }}</td>
          <td>{{ cliente.Segmento }}</td>
          <td>{{ cliente.venta }}</td>
          <td>{{ cliente.meta }}</td>
          <td>
            <v-progress-linear
              :value="porcentaje(cliente.venta, cliente.meta)"
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
  name: "DatosCliente",
  props: {
    cartera: {
      type: Array,
      required: true,
    },
  },
  data: function() {
    return {};
  },
  // computed: {},
  methods: {
    // -- Metodos
    porcentaje(venta, meta) {
      return (venta * 100) / meta;
    },
  },
  // components: {},
};
</script>

<style scoped></style>
