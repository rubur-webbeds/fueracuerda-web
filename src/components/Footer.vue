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
    <script v-html="jsonld", type="application/ld+json">
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    jsonld: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Books",
        "item": "https://example.com/books"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "The Lord of the Rings",
        "item": "https://example.com/books/the-lord-of-the-rings"
      }]
    }
  }),
};
</script>
