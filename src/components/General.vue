<template>
  <div class="grilla">
    <div class="labels">N° Orden</div>
    <div class="labels">{{ orden.num_orden }}</div>
    <div class="labels">Monto Orden</div>
    <div class="labels">{{ orden.monto }}</div>
    <div class="labels">Cant. Productos</div>
    <div class="labels">{{ orden.cant_productos }}</div>
    <div class="labels">Fecha Entrega</div>
    <div class="labels">{{ orden.fecha_entrega }}</div>
    <div class="labels">Vendedor</div>
    <div class="labels">{{ orden.vendedor }}</div>
    <div class="labels">Estado</div>
    <div class="labels">{{ orden.estado }}</div>
    <div class="labels">Avance Preparación</div>
     <td>
      <v-progress-linear
        v-model="orden.avance_preparacion"
        color="info"
        class="grafico"
        height="25"
        
      ></v-progress-linear>
    </td>
  </div>
</template>

<script>
export default {
  name: "General",
  props: {
    orden: {
      type: Object,
      required: true,
    },
  },
  data: function() {
    return {};
  },
  // computed: {},
  methods: {
    // -- Metodos
  },
  // components: {},
};
</script>

<style scoped>
.grilla {
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  margin-top: 20px;
}
.labels {
  color: rgb(71, 71, 71);
  padding: 8px;
  font-size: 1.1rem;
}
.grafico {
  background-color: #f8f8f8;
  border-radius: 16px;
  width: 120px;
  max-height: 12px;
  margin-top: 10px;
}
</style>
