import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'

import Usuario from './components/usuario/Usuario'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import Menu from "./components/template/Menu.vue"

Vue.use(Router)

//lazy loading
//const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')

const router = new Router({
    mode: 'history',
    scrollBehavior(to) {
        if (to.hash)
            return { selector: to.hash }
        // else
        //     return { x: 0, y: 0 }
    },
    routes: [{
        path: '/',
        name: "inicio",
        //component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    },
    {
        path: '/usuario',
        component: Usuario,
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true },
            { path: ':id/editar', component: UsuarioEditar, props: true ,
              name: 'editarUsuario', }
        ]
    },
    {
        path: '/redirecionar',
        redirect: '/usuario'
    },
    {
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    // console.log('antes das rotas => global')
    // if (to.path !== '/usuario')
    //     next('/usuario')
    // else
        next()
    
    //next(false) - não vai para nenhuma
})

export default router
