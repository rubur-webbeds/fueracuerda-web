  <template>
  <v-container>
    <v-card class="mx-auto" max-width="344">
      <v-img :src="foto_src" height="200px"></v-img>
      <v-card-title>{{ nombre }}</v-card-title>
      <v-divider class="mx-4 my-4"></v-divider>
      <!-- CHIP TIEMPO CAMINANDO -->
      <v-tooltip v-if="tiempo_caminando" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-chip v-bind="attrs" v-on="on"> {{ tiempo_caminando }} min </v-chip>
        </template>
        <span>Tiempo caminando</span>
      </v-tooltip>
      <!-- CHIP DIFICULTAD -->
      <v-tooltip v-if="grado_medio" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-chip v-bind="attrs" v-on="on">
            <v-icon>{{ gradoMedio }}</v-icon>
          </v-chip>
        </template>
        <span>Dificultad (0-3)</span>
      </v-tooltip>
      <v-card-actions>
        <v-btn
          v-if="urlExterna === false"
          text
          color="deep-purple accent-4"
          :to="url"
          >Detalles</v-btn
        >
        <v-btn
          v-else
          text
          color="deep-purple accent-4"
          :href="url"
          target="_blank"
          >Detalles</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "SectorCard",
  props: [
    "nombre",
    "foto_src",
    "url",
    "urlExterna",
    "tiempo_caminando",
    "grado_medio",
  ],
  data: () => ({
    //
  }),
  computed: {
    gradoMedio() {
      // mdi-numeric-0-circle-outline
      return `mdi-numeric-${this.grado_medio}-circle-outline`;
    },
  },
  methods: {
    redirect() {
      window.location = "https://calasdemallorca.netlify.app/cala.html?1";
    },
  },
};
</script>
