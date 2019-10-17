<template>
  <div class="description">
    <div
      class="view-description"
      v-for="description_result in description_results"
      :key="description_result.id"
    >
      <div class="img">
        <img
          fluid
          :src="description_result.thumbnail.path + '.' + description_result.thumbnail.extension"
          alt="No se ha podido mostrar la imgen"
          width="100%"
          height="100%"
        />
      </div>

      <div class="text">
        <h3>Titulo: {{description_result.title}}</h3>
        <h4>Serie: {{description_result.series.name}}</h4>
        <div v-for="price in description_result.prices" :key="price.id">
          <h5>Precio: {{price.price}} $</h5>
        </div>

        <h5>Numero de creadores {{description_result.creators.available}}:</h5>
        <div v-for="creators in description_result.creators.items" :key="creators.id">
          <h5>- {{creators.name}}</h5>
          <h5>Role {{creators.role}}</h5>
        </div>

        <h5>Historias disponibles {{description_result.stories.available}}:</h5>
        <div v-for="storie in description_result.stories.items" :key="storie.id">
          <h5>- {{storie.name}}</h5>
          <h5>Tipo: {{storie.type}}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Description from "@/components/Description.vue";

export default {
  name: "Description",

  data: function() {
    return {
      data_description: "",
      description_results: ""
    };
  },

  methods: {
    getDataApi() {
      /*Aqui obtenemos el id de la url */
      let urlId = this.$route.params.id;

      axios
        .get(
          "https://gateway.marvel.com:443/v1/public/comics/" +
            urlId +
            "?ts=" +
            process.env.VUE_APP_TS +
            "&apikey=" +
            process.env.VUE_APP_API_KEY_PUBLIC +
            "&hash=" +
            process.env.VUE_APP_HASH
        )
        .then(response => {
          this.data_description = response.data;
          this.description_results = this.data_description.data.results;
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  },

  mounted: function() {
    this.getDataApi();
  }
};
</script>

<style>
.description > .view-description {
  display: flex;
  width: 100vw;
  height: 100%;
}

.view-description > .img {
  width: 130%;
  opacity: 0.7;
  filter: alpha(opacity=70); /* For IE8 and earlier */
}

.view-description > .text {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-image: url("../../public/image/background-comic.jpg");
  background-size: 1400px;
  color: #a72828;
}
</style>
