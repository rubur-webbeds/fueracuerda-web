<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-text-field label="Outlined" outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="1">
        <v-btn icon color="pink">
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
