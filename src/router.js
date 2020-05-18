import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Produto from "./views/Produto.vue";
import Login from "./views/Login.vue";
import Usuario from "./views/usuario/Usuario.vue";
import UsuarioProdutos from "./views/usuario/UsuarioProdutos.vue";
import UsuarioVendas from "./views/usuario/UsuarioVendas.vue";
import UsuarioCompras from "./views/usuario/UsuarioCompras.vue";
import UsuarioEditar from "./views/usuario/UsuarioEditar.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/usuario",
      name: "usuario",
      component: Usuario,
      children: [
        {
          path: "",
          name: "usuario",
          component: UsuarioProdutos,
        },
        {
          path: "vendas",
          name: "vendas",
          component: UsuarioVendas,
        },
        {
          path: "compras",
          name: "compras",
          component: UsuarioCompras,
        },
        {
          path: "editar",
          name: "usuario-editar",
          component: UsuarioEditar,
        }
      ]
    },
    {
      path: "/produto/:id",
      name: "produto",
      component: Produto,
      props: true //ativar passagens de proprieades
    }
  ],
  scrollBehavior(){ //retornar ao topo depois de trocar de rota
    return window.scrollTo({top: 0, behavior: "smooth"})
  }
});
