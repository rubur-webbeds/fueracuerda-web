<template>
  <v-container>
    <SectoresList />
  </v-container>
</template>

<script>
import SectoresList from './SectoresList';
export default {
  name: "Content",
  components:{
      SectoresList,
  },
  data: () => ({
    //
  }),
};
</script>
