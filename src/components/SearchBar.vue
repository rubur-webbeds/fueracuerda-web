<template>
  <v-container>
    <v-row justify="center" class="ml-5">
      <v-col cols="12" md="3">
        <v-text-field label="Busca un sector" outlined v-model="filter" @keyup.enter="filterSectores"></v-text-field>
      </v-col>
      <v-col cols="12" md="1">
        <v-btn icon color="pink" class="mt-3" @click="filterSectores">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SearchBar",
  data: () => ({
    filter: ''
  }),
  watch: {
    filter(){
      this.$emit('filtersectores', this.filter)
    }
  },
  methods: {
    filterSectores(){
      this.$emit('filtersectores', this.filter)
    }
  }
};
</script>
