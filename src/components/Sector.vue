<template>
  <v-container>
    <h1>Sector {{ this.sector.nom }}</h1>
    <div id="descripcion" class="my-8">
      <h2>Descripción</h2>
      <p>{{ this.sector.descripcio }}</p>
    </div>
    <div id="acceso_parking">
      <h2>Acceso al sector</h2>
      <p>{{ this.sector.dadesPropies.acceso_parking }}</p>
    </div>
    <v-row id="vias" justify="space-around">
      <v-data-table
        :headers="this.headers"
        :items="this.vias"
        class="my-10 elevation-1"
      ></v-data-table>
    </v-row>
    <v-row id="mapas" justify="space-around">
      <div class="map border my-5">
        <!--MAPA SECTOR-->
        <div>
          <vl-map
            :load-tiles-while-animating="true"
            :load-tiles-while-interacting="true"
            data-projection="EPSG:4326"
            style="height: 398px"
          >
            <vl-view
              :zoom.sync="zoom"
              :center.sync="this.center"
              :rotation.sync="rotation"
            ></vl-view>

            <vl-layer-tile id="osm">
              <vl-source-osm></vl-source-osm>
            </vl-layer-tile>

            <vl-layer-vector>
              <vl-feature>
                <vl-geom-point
                  :coordinates="this.center_sector"
                ></vl-geom-point>

                <vl-style-box>
                  <vl-style-circle :radius="5">
                    <vl-style-fill color="red"></vl-style-fill>
                    <vl-style-stroke color="black"></vl-style-stroke>
                  </vl-style-circle>
                </vl-style-box>
              </vl-feature>
            </vl-layer-vector>

            <vl-layer-vector>
              <vl-feature>
                <vl-geom-point
                  :coordinates="this.center_parking"
                ></vl-geom-point>

                <vl-style-box>
                  <vl-style-circle :radius="5">
                    <vl-style-fill color="blue"></vl-style-fill>
                    <vl-style-stroke color="black"></vl-style-stroke>
                  </vl-style-circle>
                </vl-style-box>
              </vl-feature>
            </vl-layer-vector>
          </vl-map>
        </div>
      </div>
    </v-row>
    <v-row id="misc" justify="space-around">
      <div class="my-5">
        <v-img :src="`http://www.7timer.info/bin/civillight.php?lon=${this.sector.geoposicionament1.long}&lat=${this.sector.geoposicionament1.lat}&ac=0&lang=en&unit=metric&output=internal&tzshift=0`" />
        <v-icon v-if="this.sector.dadesPropies.grado_medio === 0" large color="black darken-2"> 
          mdi-numeric-0-circle-outline
        </v-icon>
        <v-icon v-else-if="this.sector.grado_medio === 1" large color="black darken-2"> 
          mdi-numeric-1-circle-outline
        </v-icon>
        <v-icon v-else-if="this.sector.grado_medio === 2" large color="black darken-2"> 
          mdi-numeric-2-circle-outline
        </v-icon>
        <v-icon v-else large color="black darken-2"> 
          mdi-numeric-3-circle-outline
        </v-icon>
        <v-icon v-if="this.sector.dadesPropies.miscelanea.cubierto === true" large color="grey darken-2"> 
          mdi-palette-swatch
        </v-icon>
        <v-icon v-else large color="black darken-2"> 
          mdi-palette-swatch-outline
        </v-icon>
        <v-icon v-if="this.sector.dadesPropies.miscelanea.filtra === true" large color="black darken-2"> 
          mdi-water-check
        </v-icon>
        <v-icon v-else large color="black darken-2"> 
          mdi-water-remove-outline
        </v-icon>
        <v-icon v-if="this.sector.dadesPropies.miscelanea.afluencia === 0" large color="black darken-2"> 
          mdi-account
        </v-icon>
        <v-icon v-else-if="this.sector.dadesPropies.miscelanea.afluencia === 1" large color="black darken-2"> 
          mdi-account-multiple
        </v-icon> 
        <v-icon v-else large color="black darken-2"> 
          mdi-account-group
        </v-icon> 
      </div>
    </v-row>
    <v-row id="comentarios" justify="space-around">
      <div class="comments border my-15">
        <h1> COMENTARIOS </h1>
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
    zoom: 13,
    center: [0,0],
    center_sector: [0, 0],
    center_parking: [0, 0],
    rotation: 0,
    geolocPosition: undefined,
  }),
  async created() {
    var id = this.$route.params.id;
    this.sector = sectores.filter((sector) => sector.identificador == id)[0];

    this.vias = this.sector.dadesPropies.vias;

    this.center_sector = [
      this.sector.geoposicionament1.long,
      this.sector.geoposicionament1.lat,
    ];
    this.center_parking = [
      this.sector.geoposicionament2.long,
      this.sector.geoposicionament2.lat,
    ];
    this.center = [
      this.sector.geoposicionament1.long,
      this.sector.geoposicionament1.lat,
    ];

    Object.keys(this.vias[0]).forEach((el) => {
      var header = { text: el, value: el};
      this.headers.push(header);
    });
  }
};
</script>

<style scoped>
.map {
  justify-content: center;
  width: 450px;
  height: 400px;
}

.border {
  border: 1px black solid;
}

.comments {
  width: 100%;
  height: 200px;
}
</style>
