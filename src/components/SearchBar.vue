<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="3">
        <v-text-field label="Busca un sector" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="1">
        <v-btn icon color="pink" class="mt-3">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SearchBar",

  data: () => ({
    //
  }),
};
</script>
