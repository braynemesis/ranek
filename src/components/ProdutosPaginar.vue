<template>
    <ul v-if="paginasTotal > 1">
      <li>
        <router-link :to="{query: query(1)}">Primeira</router-link>
      </li>
      <li v-for="pagina in paginas" :key="pagina">
        <router-link :to="{query: query(pagina)}">{{pagina}}</router-link>
      </li>
      <li>
        <router-link :to="{query: query(paginasTotal)}">Última</router-link>
      </li>
    </ul>
</template>

<script>
export default {
  name: "ProdutosPaginar",
  props: {
    produtosPorPagina: {
      type: Number,
      default: 1
    },
    produtosTotal: {
      type: Number,
      default: 1
    }
  },
  computed: {
    paginas(){
      const current = Number(this.$route.query._page);
      const range = 9;
      const offset = Math.ceil(range / 2)
      const total = this.paginasTotal;
      const pagesArray = []

      for(let i = 1; i <= total; i++){
        pagesArray.push(i)
      }
      pagesArray.splice(0, current - offset);
      pagesArray.splice(range, total);

      return pagesArray
    },
    paginasTotal() {
      const total = this.produtosTotal / this.produtosPorPagina;
      return total !== Infinity ? Math.ceil(total) : 0; //verifica se o numero de páginas for infinito, retorno 0
    }
  },
  methods: {
    query(pagina) {
      return {
        ...this.$route.query, //desestrutura o objeto da query string e adiciona a paginação na pesquisa
        _page: pagina
      };
    }
  },
};
</script>

<style scoped>
ul{
  grid-column: 1 / -1 ;
}
li{
  display: inline-block;
}
li a{
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}
li a.router-link-exact-active{
  background: #87F;
  color: white;
}
</style>