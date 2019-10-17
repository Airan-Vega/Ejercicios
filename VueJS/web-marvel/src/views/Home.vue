<template>
  <div class="home">
    <div class="dropdown">
      <b-dropdown id="dropdown-buttons" text="Ordenar elementos por:" variant="danger" class="m-2">
        <router-link to="/orderbydate">
          <b-dropdown-item-button>Fecha</b-dropdown-item-button>
        </router-link>
        <router-link to="/orderbysaledate">
          <b-dropdown-item-button>Fecha de venta</b-dropdown-item-button>
        </router-link>
        <router-link to="/orderbytitle">
          <b-dropdown-item-button>Título</b-dropdown-item-button>
        </router-link>
        <router-link to="/orderbyissuenumber">
          <b-dropdown-item-button>Numero de emisión</b-dropdown-item-button>
        </router-link>
      </b-dropdown>
    </div>

    <div class="view-home">
      <div v-for="home_result in home_results" :key="home_result.id">
        <!--A las imagenes les estamos enlazando la ruta del componente Description. Le damos el nonmbre de la ruta
        y el id de la imagen que pulsemos-->
        <router-link :to="{name: 'description', params: {id: home_result.id} }">
          <img
            class="img-marvel"
            fluid
            :src="home_result.thumbnail.path + '.' + home_result.thumbnail.extension"
            alt="No se ha podido mostrar la imgen"
            width="200px"
            height="200px"
          />
        </router-link>
        <p class="title">
          <b>{{home_result.title}}</b>
        </p>
      </div>

      <div class="wait" v-if="home_results == ''">
        <p class="loader"></p>
      </div>

      <div v-else>
        <Pagination :pageParams="pageParams" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Home from "@/views/Home.vue";
import { log } from "util";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "Home",
  props: {
    params: Object
  },

  components: {
    Pagination
  },

  data: function() {
    return {
      data_api_marvel_home: "",
      home_results: "",
      pageParams: {
        total: 0,
        page: 0
      }
    };
  },

  methods: {
    callApi() {
      axios
        .get(
          "https://gateway.marvel.com:443/v1/public/comics?ts=" +
            process.env.VUE_APP_TS +
            "&apikey=" +
            process.env.VUE_APP_API_KEY_PUBLIC +
            "&hash=" +
            process.env.VUE_APP_HASH +
            "&offset=" +
            this.params.offset +
            "&limit=" +
            this.params.limit
        )
        .then(response => {
          /*Obtenemos todos los datos de la llamada axios.get */
          this.data_api_marvel_home = response.data;
          /*Obtenemos el numero total de elementos */
          this.results_total = this.data_api_marvel_home.data.total;
          /*Obtenemos el array de resultados de cada elemento */
          this.home_results = this.data_api_marvel_home.data.results;

          this.pageParams.total = Math.ceil(
            this.data_api_marvel_home.data.total / this.params.limit
          );
          this.pageParams.page = this.params.page;
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  },

  created: function() {
    this.callApi();
  },

  watch: {
    $route() {
      this.callApi();
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown {
  background-color: black;
  border-color: black;
}

.home > .view-home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #990000;
  width: 100vw;
  height: 100%;
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

.img-marvel {
  margin-top: 20px;
}

.title {
  width: 250px;
  height: 70px;
  color: #e7dfdf;
}
</style>

