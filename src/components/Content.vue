<template>
  <v-container>
    <v-row justify="end" class="pb-4 pr-9">
      <SearchBar @filtersectores="filterSectores" />
      <!-- ADD BUTTON -->
      <v-btn
        class="mx-2"
        dark
        color="indigo"
        @click="showAddSectorForm = true"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
      <!-- SORT BUTTON -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark v-bind="attrs" v-on="on">
            <v-icon>mdi-sort</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="sortSectoresDifAsc()">
            <v-list-item-title>Dificultad ascendente</v-list-item-title>
          </v-list-item>
          <v-list-item @click="sortSectoresDifDesc()">
            <v-list-item-title>Dificultad descendente</v-list-item-title>
          </v-list-item>
          <v-list-item @click="sortSectoresTiempoAsc()">
            <v-list-item-title>Tiempo acceso</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
    <SectoresList :sectores="sectoresFiltrados" />

    <v-dialog v-model="showAddSectorForm" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Añadir sector</span>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="newSector.nom"
                label="Nombre"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-text-field
                v-model="newSector.dadesPropies.grado_medio"
                label="Dificultad"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="newSector.dadesPropies.miscelanea.tiempo_caminando"
                label="Tiempo acceso"
                suffix="min"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="showAddSectorForm = false"
            >Cancelar</v-btn
          >
          <v-btn color="blue darken-1" text @click="addSector">Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import JsonSectores from "../assets/data/sectores.json";
import SectoresList from "./SectoresList";
import SearchBar from "./SearchBar";
export default {
  name: "Content",
  components: {
    SectoresList,
    SearchBar,
  },
  data: () => ({
    showAddSectorForm: false,
    newSector: {
      identificador: -1,
      nom: "",
      imatges: [{ src: "media/img/sectores/default.png" }],
      dadesPropies: {
        grado_medio: 1,
        miscelanea: {
          tiempo_caminando: 1,
        },
      },
    },
    localStorageSectores: [],
    idSiguienteSector: 100,
    JsonSectores,
    sectores: [],
    filter: "",
  }),
  computed: {
    sectoresFiltrados() {
      return this.sectores.filter((x) =>
        x.nom.toLowerCase().includes(this.filter)
      );
    },
  },
  methods: {
    addSector() {
      // guarda el sector en el local storage
      this.newSector.identificador = this.idSiguienteSector;

      // ensure they actually typed something
      if (!this.newSector) {
        return;
      }

      this.localStorageSectores.push(this.newSector);
      this.sectores.push(this.newSector);
      this.newSector = {
        identificador: -1,
        nom: "",
        imatges: [{ src: "media/img/sectores/default.png" }],
        dadesPropies: {
          grado_medio: 1,
          miscelanea: {
            tiempo_caminando: 1,
          },
        },
      };

      this.saveSectores();
      this.showAddSectorForm = false;
    },
    saveSectores() {
      const parsed = JSON.stringify(this.localStorageSectores);
      // guardo el sector
      localStorage.setItem("sectores", parsed);

      // incremento el id del siguiente sector
      localStorage.setItem("id_sector", this.idSiguienteSector++);
    },
    filterSectores(filter) {
      //this.sectores = this.sectores.filter(x => x.nom.toLowerCase().includes(filter))
      this.filter = filter;
    },
    sortSectoresDifDesc(){
      this.sectores.sort((a, b) => {
        const aAl = a.dadesPropies.grado_medio;
        const bAl = b.dadesPropies.grado_medio;
        let comparison = 0;
        if (aAl > bAl) {
          comparison = 1;
        } else if (aAl < bAl) {
          comparison = -1;
        }
        return comparison * -1;
      });
    },
    sortSectoresDifAsc(){
      this.sectores.sort((a, b) => {
        const aAl = a.dadesPropies.grado_medio;
        const bAl = b.dadesPropies.grado_medio;
        let comparison = 0;
        if (aAl > bAl) {
          comparison = 1;
        } else if (aAl < bAl) {
          comparison = -1;
        }
        return comparison;
      });
    },
    sortSectoresTiempoAsc(){
      this.sectores.sort((a, b) => {
        const aAl = a.dadesPropies.miscelanea.tiempo_caminando;
        const bAl = b.dadesPropies.miscelanea.tiempo_caminando;
        let comparison = 0;
        if (aAl > bAl) {
          comparison = 1;
        } else if (aAl < bAl) {
          comparison = -1;
        }
        return comparison;
      });
    }
  },
  mounted() {
    // leer sectores guardados en el local storage
    if (localStorage.getItem("sectores")) {
      try {
        this.localStorageSectores = JSON.parse(
          localStorage.getItem("sectores")
        );
      } catch (e) {
        console.error("Something wrong happened T_T. ", e);
      }
    }

    // leer id del siguiente sector a guardar
    if (localStorage.getItem("id_sector")) {
      try {
        this.idSiguienteSector = JSON.parse(localStorage.getItem("id_sector"));
      } catch (e) {
        console.error("Something wrong happened T_T. ", e);
      }
    }

    // merge de todos los sectores
    if (this.JsonSectores && this.localStorageSectores) {
      this.sectores = [...this.JsonSectores, ...this.localStorageSectores];
    }
  },
};
</script>
