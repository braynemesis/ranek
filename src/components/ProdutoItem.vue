<template>
  <div class="produto" v-if="produto">
    <router-link class="produto-img" :to="{name: 'produto', params: {id: produto.id}} ">
      <img v-if="produto.fotos" :src="produto.fotos[0]" :alt="produto.descricao" />
      <p>Ver Produto</p>
    </router-link>
    <div class="info">
      <p class="preco">{{produto.preco | numeroPreco}}</p>
      <p class="titulo">{{produto.nome}}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdutoItem",
  props: ["produto"]
};
</script>

<style lang="css" scoped>
.produto{
    display: grid;
    grid-template-columns: minmax(100px, 200px) 1fr;
    grid-gap: 20px;
    margin-bottom: 40px;
    position: relative;
}
.info{
    align-self: end;
   
}
.produto-img{
    border-radius: 4px;
    overflow: hidden;
    height: 100px;
}
</style>