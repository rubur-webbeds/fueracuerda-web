  <template>
  <v-container>
    <v-card class="mx-auto" max-width="344">
      <v-card-text>
        <p class="display-1 text--primary">{{ nombre }}</p>
        <p>{{ descripcion }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn v-if="urlExterna === false" text color="deep-purple accent-4" :to="url" target="_blank"
          >Detalles</v-btn
        >
         <v-btn v-else text color="deep-purple accent-4" :href=url target="_blank"
          >Detalles</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "SectorCard",
  props: ["nombre", "descripcion", "url", "urlExterna"],
  data: () => ({
    //
  }),
  methods:{
    redirect(){
      window.location='https://calasdemallorca.netlify.app/cala.html?1'
    }
  }
};
</script>
