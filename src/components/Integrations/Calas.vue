<template>
  <v-container>
    <v-row justify="center">
      <SearchBar />
    </v-row>
    <CalasList />
  </v-container>
</template>

<script>
import CalasList from "./CalasList";
import SearchBar from "../SearchBar";
export default {
  name: "Calas",
  components: {
    CalasList,
    SearchBar,
  },
  data: () => ({
  }),
};
</script>