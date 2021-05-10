  <template>
  <v-container>
    <v-card class="mx-auto" max-width="344">
      <v-img
        :src="foto_src"
        height="200px"
      ></v-img>
      <v-card-title>{{ nombre }}</v-card-title>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4" :to="`/sector/${id}`"
          >Detalles</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "SectorCard",
  props: ["nombre", "id", "foto_src"],
  data: () => ({
    //
  }),
};
</script>
