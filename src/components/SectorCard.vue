  <template>
  <v-container>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <p class="display-1 text--primary">{{ nombre }}</p>
        <p>{{ descripcion }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4" :to="url"
          >Detalles</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "SectorCard",
  props: ["nombre", "descripcion", "url"],
  data: () => ({
    //
  }),
};
</script>
