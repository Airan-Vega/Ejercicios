<template>
 <div id="pagination">
   <ul>
     <li v-for="paginacion in pagination" :key="paginacion.texto">
       <button class="shadow-sm" type="button" :disabled="paginacion.status" :class="{active: paginacion.numero==page && typeof paginacion.texto != 'string'}">
         <router-link :to="'/?page='+paginacion.numero">{{paginacion.texto}}</router-link>
       </button>
     </li>
   </ul>
 </div>
</template>
<script>
export default {
  name: 'pagination',
  data(){
    return {
      page:0
    }
  },
  props:{
    pageParams: Object
  },
  computed:{
    pagination(){
      this.page = this.pageParams.page;
      let pagina = --this.pageParams.page;
      var resultados = [];
      resultados.push({numero:1,texto:'<<'});
      if(pagina==0){
        resultados.push({numero:++pagina,texto:pagina});
      }else if(pagina>0){
        resultados.push({numero:pagina,texto:pagina});
      }
      for (let i = 0; i < 2; i++) {
        if(i==1 && this.pageParams.total==this.page){
          resultados.push({numero:++pagina,texto:pagina,status:true});
        }else{
          resultados.push({numero:++pagina,texto:pagina});
        }
      }
      if(this.pageParams.total==this.page){
        resultados.push({numero:this.pageParams.total,texto:'>>',status:true});
      }else{
        resultados.push({numero:this.pageParams.total,texto:'>>',status:false});
      }
      return resultados;
    }
  }
}
</script>
<style scoped>
#pagination ul{
 display: flex;
 justify-content: flex-end;
 list-style: none;
}
#pagination ul li button:disabled {
 background-color: rgb(182, 182, 182);
}
#pagination ul li button{
 margin: 0.5rem;
 display: block;
 background-color: #fff;
 border:0;
 outline: 0;
}
#pagination ul li button a{
 padding: 1rem 1.5rem;
 text-decoration: none;
 color: #222;
 font-weight: bold;
 display: block;
}
#pagination ul li .active{
 background-color: rgb(73, 95, 95);
}
#pagination ul li .active a{
 color:#fff;
}
</style>