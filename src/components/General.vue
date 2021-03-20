<template>
  <div class="grilla">
    <div class="labels">N° Orden</div>
    <div class="labels">{{vendedor.id}}</div>
    <div class="labels">Monto Orden</div>
    <div class="labels">{{vendedor.nombre}}</div>
    <div class="labels">Cant. Productos</div>
    <div class="labels">{{vendedor.email}}</div>
    <div class="labels">Fecha Entrega</div>
    <div class="labels">{{vendedor.fono}}</div>
    <div class="labels">Vendedor</div>
    <div class="labels">{{vendedor.oficina}}</div>
    <div class="labels">Estado</div>
    <div class="labels">{{vendedor.Manager}}</div>
    <div class="labels">Avance Preparación</div>
    <div class="labels">{{vendedor.Manager}}</div>
  </div>
</template>

<script>
export default {
  name: 'General',
  props: {
    vendedor:{
      type: Object,
      required: true,
    },
  },
  data: function(){
    return {}
  },
  // computed: {},
  methods: {
    // -- Metodos
  },
  // components: {},
}
</script>

<style scoped>
  .grilla{
    display:grid;
    grid-template-columns: .5fr 2fr;
    margin-top:20px;
  }
  .labels{
    color:rgb(71, 71, 71);
    padding: 8px;
    font-size: 1.1rem;
  }
</style>