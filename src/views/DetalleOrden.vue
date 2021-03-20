<template>
  <div>
    <nav-bar></nav-bar>
   <v-breadcrumbs :items="items" divider = ">>">
    </v-breadcrumbs>
    <v-container>
      <v-row>
        <v-col>
          <h2>Ficha Vendedor</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="basil"
            grow
          >
            <v-tab>
              General
            </v-tab>
            <v-tab>
              Datos Cliente
            </v-tab>
            <v-tab>
              Productos
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card color="basil" flat>
                <v-card-text>
                  <General :vendedor="general"></General>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card color="basil" flat>
                <v-card-text>
                  <datos-cliente :cartera="cartera"></datos-cliente>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card color="basil" flat>
                <v-card-text>
                  <productos :cumplimientos="cumplimientos"></productos>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import General from "@/components/General.vue";
import DatosCliente from "@/components/DatosCliente.vue";
import Productos from "@/components/Productos.vue";

export default {
  name: "DetalleOrden",

  components: {
    NavBar,
    General,
    DatosCliente,
    Productos,
  },

  data: () => ({
   

    tab: null,
    general: {},
    datosCliente: [],
    productos: [],
  }),
};
</script>

<style scoped></style>
