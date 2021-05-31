<template>
  <v-container>
    <v-col cols="12" md="1">
      <h1>Comentarios</h1>
    </v-col>
    <v-col cols="12" md="12">
      <v-divider></v-divider>
    </v-col>
    <v-col>
      <ComentariosBox :id="this.id" />
    </v-col>
    <v-col>
      <v-divider></v-divider>
    </v-col>
    <ComentariosList :comentarios="this.comentarios" />
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
  data: () => ({
    comentarios: [],
  }),
  mounted() {
    if (localStorage.getItem("comentarios")) {
      try {
        var com = JSON.parse(localStorage.getItem("comentarios"));
        this.comentarios = com.filter(x => x.idSector == this.id);
      } catch (e) {
        localStorage.removeItem("comentarios");
      }
    }
  },
};
</script>