import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import Login from '@/views/Login.vue'
import About from '@/views/Ordenes.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, 
    meta:{
      autenticado:true
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,  
  },
  {
    path: '/login',
    name: "Login",
    component: Login,
  },
  {
    path: '/ordenes',
    name: "Ordenes",
    component: Ordenes,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  console.log('yo em ejecuto cada vez cambio de ruta')
  let user = store.state.token;
  
  console.log(to)
  let private_rute = to.matched.some(record=> record.meta.autenticado)

  if(private_rute && !user){
    next('/login')
  }
  else if(!private_rute && user){
    next('/')
  }
  else{
    next();
  }

})

export default router
