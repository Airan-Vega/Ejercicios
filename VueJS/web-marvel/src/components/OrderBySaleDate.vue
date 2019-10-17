<template>
  <div class="orderbysaledate">
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

    <div class="view-orderbysaledate">
      <div v-for="order_result in order_results" :key="order_result.id">
        <!--A las imagenes les estamos enlazando la ruta del componente Description. Le damos el nonmbre de la ruta
        y el id de la imagen que pulsemos-->
        <router-link :to="{name: 'description', params: {id: order_result.id} }">
          <img
            class="img-marvel"
            fluid
            :src="order_result.thumbnail.path + '.' + order_result.thumbnail.extension"
            alt="No se ha podido mostrar la imgen"
            width="200px"
            height="200px"
          />
        </router-link>
        <p class="title">
          <b>{{order_result.title}}</b>
        </p>
      </div>

      <div class="wait" v-if="order_results == ''">
        <p class="loader"></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import OrderBySaleDate from "@/components/OrderBySaleDate.vue";

export default {
  name: "OrderBySaleDate",

  data: function() {
    return {
      data_order_sale_date: "",
      order_results: "",
      /*Esto lo saque al probar la api en el postman */
      results_total: 0,
      pages: ""
    };
  },

  methods: {
    getDataApiOrderBySaleDate() {
      axios
        .get(
          "https://gateway.marvel.com:443/v1/public/comics?orderBy=onsaleDate&ts=" +
            process.env.VUE_APP_TS +
            "&apikey=" +
            process.env.VUE_APP_API_KEY_PUBLIC +
            "&hash=" +
            process.env.VUE_APP_HASH
        )
        .then(response => {
          this.data_order_sale_date = response.data;
          this.order_results = this.data_order_sale_date.data.results;
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  },

  mounted: function() {
    this.getDataApiOrderBySaleDate();
  }
};
</script>

<style>
.dropdown {
  background-color: black;
  border-color: black;
}

.orderbysaledate > .view-orderbysaledate {
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
