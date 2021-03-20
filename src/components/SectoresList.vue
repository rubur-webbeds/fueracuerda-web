<template>
  <v-container>
    <list v-for() bkabl>
        <Sector />
    </list>
  </v-container>
</template>

<script>
import Sector from './Sector';
export default {
  name: "SectoresList",
  components: {
      Sector,
  },
  data: () => ({
    //
  }),
};
</script>
