<template>
  <v-container>
    <v-col cols="12" md="1">
      <h1>Comentarios</h1>
    </v-col>
    <v-col cols="12" md="12">
      <v-divider></v-divider>
    </v-col>
    <v-col>
      <ComentariosList :id="this.id" />
      <v-divider></v-divider>
    </v-col>
    <v-col>
      <ComentariosBox :id="this.id" />
    </v-col>
  </v-container>
</template>

<script>
import ComentariosList from "./ComentariosList";
import ComentariosBox from "./ComentariosBox";
export default {
  props: ["id"],
  name: "Comentarios",
  components: {
    ComentariosList,
    ComentariosBox,
  },
  data: () => ({}),
};
</script>