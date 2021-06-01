<template>
  <v-container>
    <v-col cols="12" md="1">
      <h1>Comentarios</h1>
    </v-col>
    <v-col cols="12" md="12">
      <v-divider></v-divider>
    </v-col>
    <v-col>
      <ComentariosBox @savecomentario="saveComentario" :id="this.id" />
    </v-col>
    <v-col>
      <v-divider></v-divider>
    </v-col>
    <ComentariosList :comentarios="this.comentariosFiltrados" />
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
  computed:{
    comentariosFiltrados(){
      return this.comentarios.filter(x => x.idSector == this.id);
    }
  },
  methods:{
    saveComentario(comentario){
      var com = Object.assign({}, comentario);
      this.comentarios.push(com);
      this.saveComentarios();
    },
    saveComentarios() {
      const parsed = JSON.stringify(this.comentarios);
      localStorage.setItem("comentarios", parsed);
    },
  },
  mounted() {
    if (localStorage.getItem("comentarios")) {
      try {
        this.comentarios = JSON.parse(localStorage.getItem("comentarios"));
      } catch (e) {
        localStorage.removeItem("comentarios");
      }
    }
  },
};
</script>