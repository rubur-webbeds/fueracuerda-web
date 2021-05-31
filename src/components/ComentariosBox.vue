.<template>
  <v-container fluid>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-col cols="12" md="12">
        <v-row>
          <v-text-field
            v-model="newComentario.nombre"
            outlined
            :counter="25"
            :rules="reglasNombre"
            label="Nombre"
            required
          ></v-text-field>

          <v-rating
            v-model="newComentario.valoracion"
            background-color="warning lighten-2"
            color="warning"
            hover
            large
          ></v-rating>
        </v-row>
        <v-row>
          <v-textarea
            v-model="newComentario.comentario"
            rows="4"
            outlined
            :counter="255"
            :rules="reglasComentario"
            label="Comentario"
            required
          ></v-textarea>
        </v-row>
        <v-row>
          <v-btn
            :disabled="!valid"
            text
            outlined
            color="deep-purple accent-4"
            @click="validate"
          >
            Añadir Comentario
          </v-btn></v-row
        >
      </v-col>
    </v-form>
  </v-container>
</template>
<script>
export default {
  props: ["id"],
  data: () => ({
    valid: true,
    reglasNombre: [
      (v) => !!v || "Campo obligatorio",
      (v) =>
        (v && v.length <= 25) || "Nombre debe tener menos de 25 caracteres",
    ],
    reglasComentario: [
      (v) => !!v || "Campo obligatorio",
      (v) =>
        (v && v.length <= 255) ||
        "El comentario de tener menos de 255 caracteres",
    ],
    // array para guardar comentarios en local
    comentarios: [],
    newComentario: {
      idSector: this.id,
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
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.addComentario();
      }
      this.$refs.form.reset()
    },
    addComentario() {
      this.comentarios.push(this.newComentario);
      this.newComentario = {
        idSector: this.id,
        nombre: '',
        comentario: '',
        valoracion: 0,
      };
      this.saveComentarios()
    },
    removeComentario(x){
      this.comentarios.splice(x, 1);
      this.saveComentarios();
    },
    saveComentarios() {
      const parsed = JSON.stringify(this.comentarios);
      localStorage.setItem('comentarios', parsed);
    },
  },
};
</script>