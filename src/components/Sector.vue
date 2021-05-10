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
    <v-row id="vias" >
      <v-data-table
        :headers="this.headers"
        :items="this.vias"
        class="my-10 elevation-1"
      ></v-data-table>
    </v-row>
    <v-row id="mapas">
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
          <!-- <div style="padding: 20px">
              Zoom: {{ zoom }}<br>
              Center: {{ center }}<br>
              Rotation: {{ rotation }}<br>
              My geolocation: {{ geolocPosition }}
            </div> -->
        </div>
      </div>
    </v-row>
    <v-row id="misc">
      <div class="comments border my-5">
        <h1>MISCELANEA</h1>
        time: {{ this.totalVuePackages[0] }}
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
    zoom: 16,
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

    this.center = [
      this.sector.geoposicionament1.long,
      this.sector.geoposicionament1.lat,
    ];

    this.center_sector = [
      this.sector.geoposicionament1.long,
      this.sector.geoposicionament1.lat,
    ];
    this.center_parking = [
      this.sector.geoposicionament2.long,
      this.sector.geoposicionament2.lat,
    ];

    Object.keys(this.vias[0]).forEach((el) => {
      var header = { text: el, value: el};
      this.headers.push(header);
    });

    const response = await fetch("https://api.meteomatics.com/2021-05-10T00:00:00Z/t_2m:C/52.520551,13.461804/csv");
    const data = await response.csv();
    this.totalVuePackages = data.total;
    document.getElementById("misc").innerHTML(this.totalVuePackages[0]);

  },
  // currentDate() {
  //   var current = new Date().format("yyyy-MM-ddThh:mm:ssZ");
  //   const current_time = current.now();
  //   return current_time;
  //   // this.current_time = current.now();

  //   // const response = await fetch("api.meteomatics.com/"+;
  //   // const data = await response.json();
  // }
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
