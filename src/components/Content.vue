<template>
  <v-container>
    <v-row justify="center">
      <SearchBar />
      <v-btn class="mx-2" fab dark color="indigo">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-row>
    <SectoresList />
  </v-container>
</template>

<script>
import SectoresList from "./SectoresList";
import SearchBar from "./SearchBar";
export default {
  name: "Content",
  components: {
    SectoresList,
    SearchBar,
  },
  data: () => ({
    //
  }),
};
</script>
