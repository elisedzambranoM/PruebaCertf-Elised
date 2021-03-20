<template>
  <v-container>
    <v-row>
      <v-col>
        Componente Home
        <v-btn depressed @click="$router.push('/about')">
      Normal
    </v-btn>
     </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
