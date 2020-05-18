<template>
<section class="class">
    <h1>login</h1>
    <form class="login" action="">
        <label for="email">E-mail</label>
        <input type="email" name="email" id="email" v-model="login.email"> 
        <label for="senha">Senha</label>
        <input type="senha" name="senha" id="senha" v-model="login.senha"> 
        <button class="btn" @click.prevent="logar">Logar</button>
        <!-- V-model pode ser usado para controlar os dados de um input  -->
    </form>
    <p class="perdeu">
    <a href="/">Clique para recuperar a senha </a>
    </p>
    <LoginCriar />
</section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar.vue";
    export default {
        name: "Login",
        components: {
            LoginCriar,
        },
        data(){
            return {
                login: {
                    email:"andre@origamid.com",
                    senha:""
                }
            }
        },
        methods:{
            logar() {
                this.$store.dispatch("getUsuario", this.login.email)
                this.$router.push({name: "usuario"})
            }
        }
    }
</script>

<style scoped>
section{
    text-align: center;
}
h1{
    text-align: center;
    font-size: 2rem;
    margin-top: 40px;
    color: #87F;
}
.login{
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
}
form{
    display: grid;
    flex-direction: column;
}
</style>