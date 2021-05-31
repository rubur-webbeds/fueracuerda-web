<template>
  <div>
    <div id="toolbar">
      <v-toolbar color="blue" dark>
        <v-toolbar-title>
          <router-link
            class="py-2 white--text text-center text-decoration:none"
            to="/"
            >Fueracuerda</router-link
          >
        </v-toolbar-title>
        <img src="../assets/icono.svg" class="svg" />
      </v-toolbar>
    </div>
    <div id="carousel">
      <v-carousel v-model="model">
        <v-carousel-item
          v-for="(foto, i) in fotos_header"
          :key="i"
          :src="foto.src"
        >
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import fotos_header from "../assets/data/fotos_header.json";
export default {
  name: "Header",
  data: () => ({
    model: 0,
    fotos_header,
  }),
};
</script>

<style scoped>
.svg {
  width: 80px;
  height: 80px;
}
</style>
