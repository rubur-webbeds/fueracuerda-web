.<template>
  <v-container fluid>
    <v-col cols="12" md="1">
      <h1>Comentarios</h1>
    </v-col>
    <v-col cols="12" md="12">
            <v-divider></v-divider>
    </v-col>
    <v-col cols="12" md="12">
      <v-row>
        <v-textarea
          label="Nombre"
          justify="end"
          outlined
          rows="1"
          row-height="15"
        ></v-textarea>
        <v-rating
          v-model="rating"
          background-color="warning lighten-2"
          color="warning"
          hover
          large
        ></v-rating>
      </v-row>
    </v-col>
    <v-col cols="12" md="12">
      <v-row>
        <v-textarea
          counter
          label="Comentario"
          outlined
          :rules="rules"
          :value="value"
        ></v-textarea>

        <v-btn text color="deep-purple accent-4" block>Enviar</v-btn>
      </v-row>
    </v-col>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    rules: [(v) => v.length <= 255 || "Máximo 255 caracteres"],
  }),
};
</script>