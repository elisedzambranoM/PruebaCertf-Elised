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
        <tr v-for="producto in productos" :key="producto.cod_prod">
          <td>{{ producto.cod_prod}}</td>
          <td>{{ producto.descripcion }}</td>
          <td>{{ producto.precio_unit }}</td>
          <td>{{ producto.cant_pedido }}</td>
          <td>{{ producto.cant_pickeado }}</td>
          <td>
            <v-progress-linear
              :value="cumplimientoMeta(producto.cant_pickeado, producto.cant_pedido)"
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
    productos: {
      type: Array,
      required: true,
    },
  },
  data: function() {
    return {};
  },
  computed: {
    
  },
  methods: {
    cumplimientoMeta(cant_pickeado, cant_pedido){
      let resultado = 0;
      if(cant_pickeado>0){
        resultado = (cant_pickeado * 100) / cant_pedido;
      }
      return resultado.toFixed(0);
    }
  },
  // components: {},
};
</script>

<style scoped></style>
