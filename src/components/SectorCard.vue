  <template>
  <v-container>
    <v-card class="mx-auto" max-width="344">
      <v-img
        :src="foto_src"
        height="200px"
      ></v-img>
      <v-card-title>{{ nombre }}</v-card-title>
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
  props: ["nombre", "foto_src", "url", "urlExterna"],
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
