<template>
  <div>
    <div id="toolbar">
      <v-toolbar
        dark
        prominent
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-toolbar-title>Fueracuerda</v-toolbar-title>
        <v-spacer></v-spacer>
        <div id="links">
          <router-link class="py-2 white--text text-center" to="/"
            >Home</router-link
          >
        </div>
      </v-toolbar>
    </div>
    <div id="carousel">
      <v-carousel v-model="model">
        <v-carousel-item
          v-for="(foto, i) in fotos_header" :key="i" :src="foto.src">
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
