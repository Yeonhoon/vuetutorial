import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)
const rejectAuthUser = (to, from, next) => {
  if(store.state.isLogin === true){
    // 로그인 된 경우, 로그인 페이지에 접속하지 못하게 해야 함.
    alert('이미 로그인되었음.')
    next('/') //보내줄 곳을 지정해줄 수 있음.
  } 
  else {
    next() //입장
  }
}

const onlyAuthUser = (to, from, next) => {
  if(store.state.isLogin === false){
    // 로그인 된 경우, 로그인 페이지에 접속하지 못하게 해야 함.
    alert('로그인을 해야 함.')
    next('/login') //보내줄 곳을 지정해줄 수 있음.
  } 
  else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    beforeEnter: rejectAuthUser, // 해당 path로 이동할 경우 미리 검사.
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path:'/about',
    name:'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/mypage',
    name:'mypage',
    beforeEnter: onlyAuthUser,
    component: () => import(/* webpackChunkName: "about" */ '../views/MyPage.vue')
  },{
    path:'/databinding',
    name: 'bindings',
    component: () => import(/* webpackChunkName: "about" */ '../views/tutorial/DataBinding.vue')
  },
  {
    path: '/bindingAttribute',
    name: 'binding',
    component: () => import('../views/tutorial/DataBindingAttribute.vue')
  },
  {
    path: '/classBinding',
    name: 'classBinding',
    component: () => import('../views/tutorial/ClassBinding.vue')
  },
  {
    path: '/renderingVif',
    name: 'vif',
    component: () => import ('../views/tutorial/RenderingVif.vue')
  },
  {
    path: '/eventClick',
    name: 'click',
    component: () => import ('../views/tutorial/EventClick.vue')
  },
  {
    path: '/eventChange',
    name: 'change',
    component: () => import ('../views/tutorial/EventChange.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import ('../views/tutorial/Computed.vue')
  },
  {
    path: '/bindingList',
    name: 'apibinding',
    component: () => import ('../views/tutorial/DataBindingList.vue')
  },
  {
    path: '/nested',
    name: 'nested',
    component: () => import('../components/NestedComponents.vue')
  },
  {
    path:'/emit',
    name: 'emit',
    component: () => import('../components/ParentComponent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
