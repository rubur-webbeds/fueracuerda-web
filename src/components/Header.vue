<template>
  <div>
    <div id="toolbar">
      <v-toolbar dark>
        <v-toolbar-title>
          <router-link
            to="/"
            >
            <img src="../assets/header_logo.svg" class="svg mt-3"/>
            </router-link
          >
        </v-toolbar-title>
      </v-toolbar>
    </div>
    <div id="carousel">
      <vue-video-section
        :elementId="'header-background-video'"
        :ref="'header-background-video'"
        :mp4Source="require('../assets/video/Mallorca_escalacion.mp4')"
        :mobileBreakpoint="992"
        :desktopHeight="550"
        :mobileHeight="450"
        :playsinline="true"
        :loop="true"
        :autoplay="true"
        :autobuffer="true"
        :muted="true"
      >
        <div slot="overlay-content" class="overlay-content">
          <v-img
            src="../assets/logo_transparente.svg"
          />
        </div>
      </vue-video-section>
    </div>
  </div>
</template>

<script>
import fotos_header from "../assets/data/fotos_header.json";
export default {
  name: "Header",
  data: () => ({
    model: 0,
    fotos_header,
  }),
};
</script>

<style scoped>
.svg {
  width: 226px;
  height: 70px;
}
</style>
