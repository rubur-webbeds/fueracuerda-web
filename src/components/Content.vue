<template>
  <v-container>
    <v-row justify="center">
      <SearchBar />
      <v-btn
        class="mx-2"
        fab
        dark
        color="indigo"
        @click="showAddSectorForm = true"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-row>
    <SectoresList :sectores="sectores" />

    <v-dialog v-model="showAddSectorForm" persistent max-width="600px">
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
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
              <v-textarea
                solo
                name="input-7-4"
                label="Descripcion"
                v-model="newSector.descripcio"
              ></v-textarea>
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
      descripcio: "",
    },
    localStorageSectores: [],
    idSiguienteSector: 100,
    JsonSectores,
    sectores: []
  }),
  watch: {
    
  },
  methods: {
    addSector() {
      // guarda el sector en el local storage
      this.newSector.identificador = this.idSiguienteSector;
      var newSector = JSON.stringify(this.newSector);
      alert(newSector);

      // ensure they actually typed something
      if (!this.newSector) {
        return;
      }

      this.localStorageSectores.push(this.newSector);
      this.newSector = {
        identificador: -1,
        nom: "",
        descripcio: "",
      };

      this.saveSectores();
      this.showAddSectorForm = false;
    },
    saveSectores(){
      const parsed = JSON.stringify(this.localStorageSectores);
      // guardo el sector
      localStorage.setItem('sectores', parsed);

      // incremento el id del siguiente sector
      localStorage.setItem('id_sector', this.idSiguienteSector++);
    }
  },
  mounted(){
    // leer sectores guardados en el local storage
    if (localStorage.getItem('sectores')) {
      try {
        this.localStorageSectores = JSON.parse(localStorage.getItem('sectores'));
      } catch(e) {
        console.error('Something wrong happened T_T. ', e);
      }
    }

    // leer id del siguiente sector a guardar
    if (localStorage.getItem('id_sector')) {
      try {
        this.idSiguienteSector = JSON.parse(localStorage.getItem('id_sector'));
      } catch(e) {
        console.error('Something wrong happened T_T. ', e);
      }
    }

    // merge de todos los sectores
    if(this.JsonSectores && this.localStorageSectores){
      this.sectores = [...this.JsonSectores, ...this.localStorageSectores]
    }
  }
};
</script>
