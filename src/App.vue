<template>
  <v-app>
    <Header />
    <v-main>
      <Content />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Content, 
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
