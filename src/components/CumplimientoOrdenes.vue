<template>
  <v-container class="contenedor">
    <v-row>
      <v-col class="titulo">
        <h2>Cumplimientos Diario de Ordenes</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="grafico">
          <v-progress-circular
            class="mt-0"
            :value="50"
            color="success darken-2"
            :size="70"
          >
            <div class="porcentaje">50%</div>
          </v-progress-circular>
        </div>
        <div class="detalle_valor">
          <a class="enlace" href="">Ver Detalles</a>
        </div>
      </v-col>
      <v-col>
        <div class="valor">1500</div>
        <div class="detalle_valor">Ordenes <br> Entregadas</div>
      </v-col>
      <v-col>
        <div class="valor">500</div>
        <div class="detalle_valor">
          Ordenes <br />
          Pendientes
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "CumplimientoOrdenes",

props:{
nombre: String,
entregas: Number,
pendientes: Number,
},

  
};
</script>

<style scoped>
.contenedor {
  border: 1px solid #dbd6d6;
}
.v-progress-circular {
  margin: 1rem;
}
.enlace {
  text-decoration: none;
}
.titulo {
  text-align: center;
}
.detalle_valor {
  text-align: center;
}
.valor {
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
}
.grafico {
  text-align: center;
}
.porcentaje {
  font-size: 25px;
}
</style>
