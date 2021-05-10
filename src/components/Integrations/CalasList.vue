<template>
  <v-container>
    <v-row justify="center">
      <v-col md="4" v-for="cala in calas" :key="cala.identificador">
          <!-- usamos sectorCard como generico y le pasamos la cala -->
        <SectorCard
          :urlExterna="true"
          :url="`https://calasdemallorca.netlify.app/cala.html?${cala.identificador - 1}`"
          :nombre="cala.nom"
          :descripcion="cala.descripcio"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SectorCard from "../SectorCard";
export default {
  name: "CalasList",
   props: [],
  components: {
    SectorCard,
  },
  data: () => ({
    calas: [],
  }),
  created() {
  fetch('https://calasdemallorca.netlify.app/_json/datos.json')
    .then(res => res.json())
        .then(res => {
          this.calas = res;
        });
  },
};
</script>