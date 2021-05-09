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
    <v-row id="info" class="mt-10">
      <v-col id="vias">
        <v-data-table
          :headers="this.headers"
          :items="this.vias"
          class="elevation-1"
        ></v-data-table>
      </v-col>
      <v-col id="mapas">
        <div class="map border">
          <!--MAPA SECTOR-->
          <div>
            <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
              data-projection="EPSG:4326" style="height: 398px">
              <vl-view :zoom.sync="zoom_sector" :center.sync="center_sector" :rotation.sync="rotation"></vl-view>

              <!-- PARA GEOLOCALIZAR USER
              <vl-geoloc @update:position="geolocPosition = $event">
                <template slot-scope="geoloc">
                  <vl-feature v-if="geoloc.position" id="position-feature">
                    <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
                    <vl-style-box>
                      <vl-style-icon src="_media/marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
                    </vl-style-box>
                  </vl-feature>
                </template>
              </vl-geoloc> -->

              <vl-layer-tile id="osm">
                <vl-source-osm></vl-source-osm>
              </vl-layer-tile>
            </vl-map>
            <!-- <div style="padding: 20px">
              Zoom: {{ zoom }}<br>
              Center: {{ center }}<br>
              Rotation: {{ rotation }}<br>
              My geolocation: {{ geolocPosition }}
            </div> -->
          </div>
        </div>
        <div class="map border mt-5">
          <!--MAPA PARKING-->
          <div>
            <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
              data-projection="EPSG:4326" style="height: 398px">
              <vl-view :zoom.sync="zoom_parking" :center.sync="center_parking" :rotation.sync="rotation"></vl-view>

              <!-- PARA LOCALIZAR USUARIO
                <vl-geoloc @update:position="geolocPosition = $event">
                <template slot-scope="geoloc">
                  <vl-feature v-if="geoloc.position" id="position-feature">
                    <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
                    <vl-style-box>
                      <vl-style-icon src="_media/marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
                    </vl-style-box>
                  </vl-feature>
                </template>
              </vl-geoloc> -->

              <vl-layer-tile id="osm">
                <vl-source-osm></vl-source-osm>
              </vl-layer-tile>
            </vl-map>
            <!-- <div style="padding: 20px">
              Zoom: {{ zoom }}<br>
              Center: {{ center }}<br>
              Rotation: {{ rotation }}<br>
              My geolocation: {{ geolocPosition }}
            </div> -->
          </div>
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
    latitude: null,
    longitude: null,
    map: null,
    zoom_sector: 16,
    zoom_parking: 16,
    center_sector: [0,0],
    center_parking: [0,0],
    rotation: 0,
    geolocPosition: undefined
  }),
  created() {
    var id = this.$route.params.id;
    this.sector = sectores.filter((sector) => sector.identificador == id)[0];

    this.vias = this.sector.dadesPropies.vias;

    this.center_sector = [this.sector.geoposicionament1.long,this.sector.geoposicionament1.lat];
    this.center_parking = [this.sector.geoposicionament2.long,this.sector.geoposicionament2.lat];

    Object.keys(this.vias[0]).forEach((el) => {
      var header = { text: el, value: el };
      this.headers.push(header);
    });
  },
};
</script>

<style scoped>
.map {
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
