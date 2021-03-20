<template>
  <v-container class="contenedor">
    <v-row>
      <v-col class="titulo">
        <h2>Ordenes Atrasadas Jornada </h2>
      </v-col>
    </v-row>
    <v-row class="informacion">
      <v-col>
        <div class="grafico"><v-progress-circular class="mt-0" :value="30" color="red darken-2" :size="70">
          <div class="porcentaje">30%</div>
        </v-progress-circular></div>
        <div class="detalle_valor">
          <a class="enlace" href="">Ver Detalles</a>
        </div>
      </v-col>
      <v-col>
        <div class="valor">7.250</div>
        <div class="detalle_valor">Ordenes Totales</div>
      </v-col>
      <v-col>
        <div class="valor">15.000</div>
        <div class="detalle_valor">Ordenes <br> Atrasadas</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "OrdenesAtrasadas",
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
.valor{
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
}
.grafico{
  text-align: center;
}
.porcentaje{
  font-size: 25px;
  
}
</style>