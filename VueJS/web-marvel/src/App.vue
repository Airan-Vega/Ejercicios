<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img
          class="logo"
          src="../public/image/logo-marvel.png"
          alt="No se ha podido mostrar la imagen"
          width="200px"
          height="50px"
        />
      </router-link>
      <b-container fluid>
        <b-row class="my-1">
          <b-col sm="4">
            <b-form-input @keyup.enter="search" v-model="name" placeholder="Search" class="search"></b-form-input>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <router-view :params="params" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      params: { limit: 0, page: 0, offset: 0 },
      name: ""
    };
  },

  methods: {
    getParams() {
      let { page, limit } = this.$route.query; //Que coja los query que hay en la url

      this.params.page = page ? page : 1; //Condicional ternaria. Si page existe, es decir, es distinto de null,
      // guarda dentro de this.params.page el valor que tiene page por defecto.
      // Este valor sera el del numero que has pulsado y si no guardale el
      // valor 1.
      this.params.limit = limit ? limit : 15;
      this.params.offset = (this.params.page - 1) * this.params.limit; //El offset se suma de 15 en 15, es decir,
      //de limit en limit
    },
    search() {
      return this.$router.push("/search/" + this.name);
    }
  },

  created() {
    this.getParams();
  },

  watch: {
    $route() {
      this.getParams();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
}
#nav {
  padding: 30px;
  background-color: black;
  display: flex;
  align-items: center;
  width: 100vw;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
