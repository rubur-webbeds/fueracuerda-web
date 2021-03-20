<template>
  <v-container>
    <v-carousel v-model="model">
      <v-carousel-item v-for="(foto, i) in fotos_header" :key="i" :src="foto" />
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    model: 0,
    fotos_header: [
        "img/foto01.jpg",
        "img/foto02.jpg",
    ]
  }),
};
</script>
