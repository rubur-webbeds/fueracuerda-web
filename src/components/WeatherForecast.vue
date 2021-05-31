<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="(item, i) in weather" :key="i">
        <v-card class="mx-auto" max-width="100" tile outlined>
          <v-card-text>{{ item.date.substring(5, 10) }}</v-card-text>
          <v-img
            contain
            :src="`https://openweathermap.org/img/wn/${item.weather.icon}@2x.png`"
            height="100px"
            width="100px"
            class="pa-2"
          ></v-img>
          <v-card-text>{{ item.main.temp}} ºC</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "WeeatherForecast",
  props: [
    "lat",
    "lon",
  ],
  data: () => ({
    API_key: "1f866734240bf6cd10a04b4177eb2982",
    weather: [],
  }),
  created() {
    var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&units=metric&appid=${this.API_key}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.getWeather(res.list);
      });
  },
  methods: {
    getWeather(list) {
      var result = [];
      var numbers = [0, 7, 15, 23, 31, 39];
      numbers.forEach((i) => {
        result.push({date: list[i].dt_txt, weather: list[i].weather[0], main: list[i].main,});
      });
      this.weather = result;
    },
  },
};
</script>
