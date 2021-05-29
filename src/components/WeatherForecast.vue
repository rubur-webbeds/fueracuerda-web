<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="(item, i) in weather" :key="i">
        <v-card class="mx-auto" max-width="100" tile outlined>
          <v-card-text>{{ item.date.substring(5, 10) }}</v-card-text>
          <v-img
            contain
            :src="`http://openweathermap.org/img/wn/${item.weather.icon}@2x.png`"
            height="100px"
            width="100px"
            class="pa-2"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "WeeatherForecast",
  data: () => ({
    API_key: "1f866734240bf6cd10a04b4177eb2982",
    lat: 39.6924,
    lon: 2.6314,
    weather: [],
  }),
  created() {
    var url = ` http://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&appid=${this.API_key}`;
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
        result.push({date: list[i].dt_txt, weather: list[i].weather[0]});
      });
      this.weather = result;
    },
  },
};
</script>
