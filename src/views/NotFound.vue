<template>
  <v-container>
    <v-row justify="center">
      <v-col md="4">
        <v-img src="../assets/NotFoundImage.jpg" max-width="700"></v-img>
        <div class="text-center">
          <div class="mb-5">
            <h1 class="titulo">Whoops, 404</h1>
            <h3>Esta página no existe</h3>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.titulo{
  color: #0f71cc;
  font-size: 50px;
}
</style>