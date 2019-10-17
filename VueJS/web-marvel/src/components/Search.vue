<template>
  <div class="search">
    <div class="view-search">
      <div v-for="search_result in search_results" :key="search_result.id">
        <!--A las imagenes les estamos enlazando la ruta del componente Description. Le damos el nonmbre de la ruta
        y el id de la imagen que pulsemos-->
        <router-link :to="{name: 'description', params: {id: search_result.id} }">
          <img
            class="img-marvel"
            fluid
            :src="search_result.thumbnail.path + '.' + search_result.thumbnail.extension"
            alt="No se ha podido mostrar la imgen"
            width="200px"
            height="200px"
          />
        </router-link>
        <p class="title">
          <b>{{search_result.title}}</b>
        </p>
      </div>

      <div
        class="wait"
        v-if="search_results == '' && data_search.etag != '79ef3436d0dc139b17693635b99776556e29f495'"
      >
        <p class="loader"></p>
      </div>

      <div class="error" v-else-if="data_search.etag == '79ef3436d0dc139b17693635b99776556e29f495'">
        <h1>Error. Esta busqueda es erronea, por favor, haga otra</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Search from "@/components/Search.vue";

export default {
  name: "Search",

  data: function() {
    return {
      data_search: "",
      search_results: "",
      urlName: "",
      /*Esto lo saque al probar la api en el postman */
      results_total: 0,
      pages: ""
    };
  },

  methods: {
    getDataApiByName() {
      /*Aqui obtenemos el name de la url */
      this.urlName = this.$route.params.name;

      axios
        .get(
          "https://gateway.marvel.com:443/v1/public/comics?title=" +
            this.urlName +
            "&ts=" +
            process.env.VUE_APP_TS +
            "&apikey=" +
            process.env.VUE_APP_API_KEY_PUBLIC +
            "&hash=" +
            process.env.VUE_APP_HASH
        )
        .then(response => {
          this.data_search = response.data;
          this.search_results = this.data_search.data.results;
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  },

  created: function() {
    this.getDataApiByName();
  },

  /*El watch lo use para solucionar el problema que sufre las routes en vue. Mirar diapositiva dia 4.
  URL: https://slides.com/yuniorgonzalezsantana/dia-02-vuejs-37#/2/5
  Tambien puede mirar la siguiente url de la documentacion de vue js: 
  https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes */
  watch: {
    $route() {
      this.getDataApiByName();
    }
  }
};
</script>

<style>
.search > .view-search {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #990000;
  width: 100vw;
  height: 100%;
}

.img-marvel {
  margin-top: 20px;
}

.title {
  width: 250px;
  height: 70px;
  color: #e7dfdf;
}

.wait {
  height: 100vh;
  display: flex;
  align-items: center;
}

.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid black;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.error {
  display: flex;
  align-items: center;
  height: 100vh;
}

.error > h1 {
  color: white;
}
</style>
