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
        <cumplimiento-ordenes></cumplimiento-ordenes>
        </v-col>
        <v-col>
          <ordenes-atrasadas></ordenes-atrasadas>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <ultimas-ordenes></ultimas-ordenes>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Jumbo from '@/components/Jumbo.vue'
import NavBar from '@/components/NavBar.vue'
import CumplimientoOrdenes from '@/components/CumplimientoOrdenes.vue'
import OrdenesAtrasadas from '@/components/OrdenesAtrasadas.vue'
import UltimasOrdenes from '@/components/UltimasOrdenes.vue'


export default {
  name: 'Home',
  components: {
    Jumbo,
    NavBar,
    CumplimientoOrdenes,
    OrdenesAtrasadas,
    UltimasOrdenes,
  }
}
</script>
