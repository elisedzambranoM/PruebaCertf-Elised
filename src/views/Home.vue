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
    </v-container>
  </div>
</template>

<script>
import Jumbo from '@/components/Jumbo.vue'
import NavBar from '@/components/NavBar.vue'


export default {
  name: 'Home',
  components: {
    Jumbo,
    NavBar
  }
}
</script>
