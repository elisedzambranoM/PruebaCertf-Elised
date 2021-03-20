<template>
  <div class="grilla">
    <div class="labels">Nombre</div>
    <div class="labels">{{cliente.nombre}}</div>
    <div class="labels">RUT</div>
    <div class="labels">{{cliente.rut_n}} - {{cliente.rut_dv}}</div>
    <div class="labels">Dirección Entrega</div>
    <div class="labels">{{cliente.direccion_entrega}}</div>
    <div class="labels">Contacto</div>
    <div class="labels">{{cliente.contacto}}</div>
    <div class="labels">Fono</div>
    <div class="labels">{{cliente.fono}}</div>
    <div class="labels">Email</div>
    <div class="labels">{{cliente.email}}</div>
  </div>
</template>

<script>
export default {
  name: 'DatosCliente',
  props: {
    cliente:{
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
