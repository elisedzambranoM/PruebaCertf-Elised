<template>
  <div>
    <nav-bar></nav-bar>
    <h4 class="mt-5 ml-5">Home</h4>
    <v-container>
      <v-row>
        <v-col>
          <jumbo/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
        <cumplimiento-ordenes :nombre="kpisDiario.nombre" :entregas="kpisDiario.entregadas" :pendientes="kpisDiario.pendientes"></cumplimiento-ordenes>
        </v-col>
        <v-col>
          <ordenes-atrasadas :nombre="kpisAtrasados.nombre" :totales="kpisAtrasados.totales" :atrasadas="kpisAtrasados.atrasadas"></ordenes-atrasadas>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ultimas-ordenes :ordenes="ultimasOrdenes"></ultimas-ordenes>
        </v-col>
        <v-col>
          <ultimas-devoluciones :devoluciones="ultimasDevoluciones"></ultimas-devoluciones>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import Jumbo from '@/components/Jumbo.vue'
import NavBar from '@/components/NavBar.vue'
import CumplimientoOrdenes from '@/components/CumplimientoOrdenes.vue'
import OrdenesAtrasadas from '@/components/OrdenesAtrasadas.vue'
import UltimasOrdenes from '@/components/UltimasOrdenes.vue'
import UltimasDevoluciones from '@/components/UltimasDevoluciones.vue'


export default {
  name: 'Home',
  components: {
    Jumbo,
    NavBar,
    CumplimientoOrdenes,
    OrdenesAtrasadas,
    UltimasOrdenes,
    UltimasDevoluciones,
  },
    
  data: () => ({
   kpisDiario: {},
   kpisAtrasados: {},
   ultimasOrdenes: [],
   ultimasDevoluciones: [],
  }),
  
created(){
  axios.get('http://localhost:8080/api/dashboard.json').then(response => {
    this.kpisDiario = response.data.kpis[0]
    this.kpisAtrasados = response.data.kpis[1]
    this.ultimasOrdenes = response.data.utimas_ordenes
    this.ultimasDevoluciones = response.data.ultimas_devoluciones
    
  })
}
  
}
</script>
