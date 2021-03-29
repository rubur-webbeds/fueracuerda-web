<template>
  <v-container>
    <h1>Sector {{ this.sector.nombre }}</h1>
    <v-row id="intro" class="my-8">
      <h2>Descripción</h2>
      <p>{{ this.sector.descripcion }}</p>
      <h2>Acceso al sector</h2>
      <p>{{ this.sector.acceso_parking }}</p>
    </v-row>
    <v-row id="info">
      <v-col id="vias">
        <v-data-table
          :headers="this.headers"
          :items="this.vias"
          class="elevation-1"
        ></v-data-table>
      </v-col>
      <v-col id="mapas">
        <div class="map border">
          <h1>MAPA SECTOR</h1>
        </div>
        <div class="map border mt-5">
          <h1>MAPA PARKING</h1>
        </div>
      </v-col>
    </v-row>
    <v-row id="misc">
      <div class="comments border my-5">
        <h1>MISCELANEA</h1>
      </div>
    </v-row>
    <v-row id="comentarios">
      <div class="comments border my-5">
        <h1>COMENTARIOS</h1>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import sectores from "../assets/data/sectores.json";
export default {
  name: "Sector",
  data: () => ({
    sector: null,
    vias: [],
    headers: [],
  }),
  created() {
    var id = this.$route.params.id;
    this.sector = sectores.filter((sector) => sector.id == id)[0];

    this.vias = this.sector.vias;

    Object.keys(this.vias[0]).forEach((el) => {
      var header = { text: el, value: el };
      this.headers.push(header);
    });
  },
};
</script>

<style scoped>
.map {
  width: 300px;
  height: 300px;
}

.border {
  border: 1px black solid;
}

.comments {
  width: 100%;
  height: 200px;
}
</style>
