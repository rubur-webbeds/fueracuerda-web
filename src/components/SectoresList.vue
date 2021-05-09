<template>
  <v-container>
    <v-row justify="center">
      <v-col md="4" v-for="sector in sectores" :key="sector.identificador">
        <SectorCard
          :id="sector.identificador"
          :nombre="sector.nom"
          :descripcion="sector.descripcio"
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
