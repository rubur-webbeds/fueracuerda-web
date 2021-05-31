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
        :headers="this.headers_vias"
        :items="this.vias"
        class="my-10 elevation-1"
      ></v-data-table>
    </v-row>
    <v-row id="mapa" justify="space-around">
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

            <vl-layer-vector
              v-for="cala_cercana in load_calas_cercanas()"
              v-bind:key="cala_cercana.nom"
            >
              <vl-feature>
                <vl-geom-point
                  :coordinates="[
                    cala_cercana.geoposicionament1.long,
                    cala_cercana.geoposicionament1.lat,
                  ]"
                ></vl-geom-point>

                <vl-style-box>
                  <vl-style-circle :radius="5">
                    <vl-style-fill color="green"></vl-style-fill>
                    <vl-style-stroke color="black"></vl-style-stroke>
                  </vl-style-circle>
                  <vl-style-text
                    :text="cala_cercana.nom"
                    font="bold 20px arial"
                    offsetY="-15"
                  ></vl-style-text>
                </vl-style-box>
              </vl-feature>
            </vl-layer-vector>
          </vl-map>
          <div class="my-5">
            <v-icon medium color="red darken-2"> mdi-circle </v-icon>
            <span> Sector </span>
            <v-icon medium color="blue darken-2"> mdi-circle </v-icon>
            <span> Párking </span>
            <v-icon medium color="green darken-2"> mdi-circle </v-icon>
            <span> Cala </span>
          </div>
        </div>
      </div>
    </v-row>
    <v-row id="misc" justify="space-around">
      <div class="my-5">
        <WeatherForecast
          :lat="this.sector.geoposicionament1.long"
          :lon="this.sector.geoposicionament1.lat"
        />
        <v-icon
          v-if="this.sector.dadesPropies.grado_medio === 0"
          large
          color="black darken-2"
        >
          mdi-numeric-0-circle-outline
        </v-icon>
        <v-icon
          v-else-if="this.sector.dadesPropies.grado_medio === 1"
          large
          color="black darken-2"
        >
          mdi-numeric-1-circle-outline
        </v-icon>
        <v-icon
          v-else-if="this.sector.dadesPropies.grado_medio === 2"
          large
          color="black darken-2"
        >
          mdi-numeric-2-circle-outline
        </v-icon>
        <v-icon v-else large color="black darken-2">
          mdi-numeric-3-circle-outline
        </v-icon>
        <v-icon
          v-if="this.sector.dadesPropies.miscelanea.cubierto === true"
          large
          color="black darken-2"
        >
          mdi-palette-swatch
        </v-icon>
        <v-icon v-else large color="black darken-2">
          mdi-palette-swatch-outline
        </v-icon>
        <v-icon
          v-if="this.sector.dadesPropies.miscelanea.filtra === true"
          large
          color="black darken-2"
        >
          mdi-water-check
        </v-icon>
        <v-icon v-else large color="black darken-2">
          mdi-water-remove-outline
        </v-icon>
        <v-icon
          v-if="this.sector.dadesPropies.miscelanea.afluencia === 0"
          large
          color="black darken-2"
        >
          mdi-account
        </v-icon>
        <v-icon
          v-else-if="this.sector.dadesPropies.miscelanea.afluencia === 1"
          large
          color="black darken-2"
        >
          mdi-account-multiple
        </v-icon>
        <v-icon v-else large color="black darken-2"> mdi-account-group </v-icon>
      </div>
    </v-row>
    <v-row id="calas" justify="center">
      <v-col
        md="2"
        v-for="cala in this.calas_cercanas"
        :key="cala.identificador"
      >
        <!-- usamos sectorCard como generico y le pasamos la cala -->
        <SectorCard
          :urlExterna="true"
          :url="`https://calasdemallorca.netlify.app/cala.html?${
            cala.identificador - 1
          }`"
          :nombre="cala.nom"
          :foto_src="cala.imatges[0]"
        />
      </v-col>
    </v-row>
    <v-row id="comentarios" justify="space-around">
      <!-- componente comentarios -->
      <Comentarios />
    </v-row>
  </v-container>
</template>

<script>
import sectores from "../assets/data/sectores.json";
import Comentarios from "./Comentarios";
import WeatherForecast from "./WeatherForecast";
import SectorCard from "./SectorCard";

export default {
  name: "Sector",
  components: {
    Comentarios,
    WeatherForecast,
    SectorCard,
  },
  data: () => ({
    sector: null,
    vias: [],
    headers_vias: [],
    zoom: 12,
    center: [0, 0],
    center_sector: [0, 0],
    center_parking: [0, 0],
    rotation: 0,
    geolocPosition: undefined,
    calas: [],
    calas_cercanas: new Array(3),
  }),
  created() {
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
      var header = { text: el, value: el };
      this.headers_vias.push(header);
    });

    fetch("https://calasdemallorca.netlify.app/_json/datos.json")
      .then((res) => res.json())
      .then((res) => {
        this.calas = res;
      });
  },
  methods: {
    load_calas_cercanas() {
      var distancia_cala_dentro, distancia_cala_fuera;
      var i, j;
      //cargamos las primeras cinco calas independientemente de su distancia relativa al párking.
      for (i = 0; i < this.calas.length && i < 3; i++) {
        this.calas_cercanas[i] = this.calas[i];
      }
      //comparamos la distancia relativa de cada cala dentro del array con cada cala restante y se subsistuyen eventualmente por las 5 más cercanas.
      for (i = 3; i < this.calas.length; i++) {
        distancia_cala_fuera = Math.sqrt(
          Math.pow(
            this.calas[i].geoposicionament1.long -
              this.sector.geoposicionament2.long,
            2
          ) +
            Math.pow(
              this.calas[i].geoposicionament1.lat -
                this.sector.geoposicionament2.lat,
              2
            )
        );
        // recorremos el array de calas guardadas para sustituir por la cala de esta iteración si es más cercana que alguna de las guardadas.
        for (j = 0; j < this.calas_cercanas.length; j++) {
          distancia_cala_dentro = Math.sqrt(
            Math.pow(
              this.calas_cercanas[j].geoposicionament1.long -
                this.sector.geoposicionament2.long,
              2
            ) +
              Math.pow(
                this.calas_cercanas[j].geoposicionament1.lat -
                  this.sector.geoposicionament2.lat,
                2
              )
          );
          if (distancia_cala_dentro > distancia_cala_fuera) {
            this.calas_cercanas[j] = this.calas[i];
            break;
          }
        }
      }
      return this.calas_cercanas;
    },
  },
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
