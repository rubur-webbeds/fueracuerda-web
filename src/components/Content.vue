<template>
  <v-container>
    <SearchBar />
    <SectoresList />
  </v-container>
</template>

<script>
import SectoresList from './SectoresList';
import SearchBar from './SearchBar';
export default {
  name: "Content",
  components:{
      SectoresList,
      SearchBar,
  },
  data: () => ({
    //
  }),
};
</script>
