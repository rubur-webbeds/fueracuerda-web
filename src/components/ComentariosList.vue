<template>
  <v-container>
    <v-col v-for="(comentario, i) in comentarios" :key="i">
      <v-textarea
        outlined
        :label="comentario.nombre"
        :value="comentario.comentario"
      ></v-textarea>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Comentarios",
  props: ["id"],
  data: () => ({
    comentarios: [],
    comentario: {
      nombre: "",
      comentario: "",
      valoracion: 0,
    },
  }),
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