import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Description from './components/Description.vue'
import Search from './components/Search.vue'
import OrderByDate from './components/OrderByDate.vue'
import OrderBySaleDate from './components/OrderBySaleDate.vue'
import OrderByTitle from './components/OrderByTitle.vue'
import OrderByIssueNumber from './components/OrderByIssueNumber.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    /*Dado que ya tenemos una vista que es la principal, ponemos ahora la ruta de componentes */
    {
      /*Le pasamos el id de la imagen que pulsemos. Esto lo hacemos en el componente Home */
      path: '/description/:id',
      name: 'description',
      component: Description
    },

    {
      /*Le pasamos el name de la imagen que pulsemos. Esto lo hacemos en el componente Home */
      path: '/search/:name',
      name: 'search',
      component: Search
    },


    {
      /*Le pasamos el name de la imagen que pulsemos. Esto lo hacemos en el componente Home */
      path: '/orderbydate',
      name: 'orderbydate',
      component: OrderByDate
    },

    {
      /*Le pasamos el name de la imagen que pulsemos. Esto lo hacemos en el componente Home */
      path: '/orderbysaledate',
      name: 'orderbysaledate',
      component: OrderBySaleDate
    },

    {
      /*Le pasamos el name de la imagen que pulsemos. Esto lo hacemos en el componente Home */
      path: '/orderbytitle',
      name: 'orderbytitle',
      component: OrderByTitle
    },

    {
      /*Le pasamos el name de la imagen que pulsemos. Esto lo hacemos en el componente Home */
      path: '/orderbyissuenumber',
      name: 'orderbyissuenumber',
      component: OrderByIssueNumber
    }
    
  ]
})
