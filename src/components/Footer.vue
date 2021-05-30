<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="blue">
        <strong class="subheading">Work smart not hard :)</strong>

        <v-spacer></v-spacer>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Fueracuerda</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
  }),
  jsonld: {
      "@context": "http://schema.org/",
      "@type": "Code",
      "name": "vue-jsonld",
      "description": "Declarative JSON-LD Structured Data for Vue App",
      "discussionUrl": "https://github.com/ariesjia/vue-jsonld"
    },
};
</script>