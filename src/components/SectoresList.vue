<template>
  <v-container>
    <v-list v-for="sector in sectores" :key="sector.identificador">
      <SectorCard :id="sector.identificador" />
    </v-list>
  </v-container>
</template>

<script>
import sectores from "../assets/data/sectores.json";
import SectorCard from "./SectorCard";
export default {
  name: "SectoresList",
  components: {
    SectorCard,
  },
  data: () => ({
    sectores,
  }),
};
</script>
