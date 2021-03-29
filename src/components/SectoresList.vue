<template>
  <v-container>
    <list v-for="sector in sectores" :key="sector.id">
        <SectorCard :nombre="sector.nombre" />
    </list>
  </v-container>
</template>

<script>
import sectores from '../assets/data/sectores.json';
import SectorCard from './SectorCard';
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
