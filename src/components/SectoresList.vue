<template>
  <v-container>
    <v-row justify="center">
      <v-col md="4" v-for="sector in sectores" :key="sector.identificador">
        <SectorCard
          :urlExterna="false"
          :url="`/sector/${sector.identificador}`"
          :nombre="sector.nom"
          :foto_src="sector.imatges[0]"
          :tiempo_caminando="sector.dadesPropies.miscelanea.tiempo_caminando"
          :grado_medio="sector.dadesPropies.grado_medio"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import sectores from "../assets/data/sectores.json";
import SectorCard from "./SectorCard";
export default {
  name: "SectoresList",
  components: {
    SectorCard,
  },
  props: ["sectores"],
  data: () => ({
    //sectores,
  }),
};
</script>
