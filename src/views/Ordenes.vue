<template>
  <div>
    <nav-bar></nav-bar>
    <v-container>
      <v-row>
        <v-col>
          <h2>Monitor de Órdenes</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
       <monitor-ordenes></monitor-ordenes>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import MonitorOrdenes from '@/components/MonitorOrdenes.vue'

export default {
  name: 'Ordenes',
  components: {
    NavBar,
    MonitorOrdenes,

  }
}
</script>