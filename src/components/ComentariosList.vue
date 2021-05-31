<template>
  <v-container>
    <div v-for="(comentario, i) in comentarios" :key="i">
      <!-- <v-textarea
        outlined
        :label="comentario.nombre"
        :value="comentario.comentario"
      ></v-textarea> -->
      <v-row>
        <v-col cols="12" md="1">
          <h3>{{ comentario.nombre }}</h3>
        </v-col>
        <v-col cols="12" md="1"><v-divider vertical></v-divider></v-col>
        <v-col cols="12" md="1">
          <v-rating
            background-color="warning lighten-2"
            color="warning"
            readonly
            :value="comentario.valoracion"
          >
          </v-rating>
        </v-col>
      </v-row>
      <v-row :justify="start">
        <v-col cols="12" md="12">
          <p align="left">{{ comentario.comentario }}</p>
        </v-col>
      </v-row>
      <v-row
        ><v-col><v-divider></v-divider></v-col
      ></v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Comentarios",
  props: ["comentarios"],
  data: () => ({}),
};
</script>