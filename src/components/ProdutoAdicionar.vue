<template>
<form action="" class="adicionar-produto">
    <label for=nome>Nome</label>    
    <input type="text" name="preco" id="none" v-model="produto.nome">
        <label for="preco">Preço</label>    
    <input type="number" name="preco" id="preco" v-model="produto.preco">
        <label for=foto>Nome</label>    
    <input type="file" id="foto" ref="fotos">
            <label for=descricao>Descrição</label>    
    <textarea name="descricao" id="descricao" rows=4 v-model="produto.descricao"></textarea>
    <input class="btn" type="button" value="Adicionar Produto" @click.prevent="adicionarProduto">
</form>
</template>
 
<script>
import { api } from '../services.js'
    export default {
        name: "ProdutoAdicionar",
        data() {
            return{
                produto: {
                    nome: "",
                    preco: "",
                    descricao: "",
                    fotos: null,
                    vendido: false
                }
            }
        },
        methods: {
            formatarProduto(){
                this.produto.usuario_id = this.$store.state.usuario.id
            },
            adicionarProduto(){ 
                this.formatarProduto()
                api.post('/produto', this.produto)
                .then(() => {
                    this.$store.dispatch('getUsuarioProdutos')
                })
            }
        }
    }
</script>

<style lang="css" scoped>
.adicionar-produto{
    display: grid;
    grid-template-columns: 90px 1fr;
    align-items: center;
    margin-bottom: 60px;
}
.btn{
    grid-column: 2;
}
</style>