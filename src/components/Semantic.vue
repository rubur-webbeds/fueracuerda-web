<script>
export default {
  data () {
    const jsonld = {
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
    return {
      jsonld
    }
  }
}
</script>
<template>
  <script v-html="jsonld", type="application/ld+json">
</template>