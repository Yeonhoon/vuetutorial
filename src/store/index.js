import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers:[
      {id:1, name: 'Ohtani', email:'Shohei@la.com',password:'123'},
      {id:2, name: 'Darvish', email:'Yoo@la.com',password:'123'},
      {id:3, name: 'jyh', email:'jyh@naver.com',password:'123'}
    ],
    isLogin: false,
    isLoginError: false,
    productList : []
  },
  mutations: {
    // 상태값변경(로그인 성공시)
    loginSuccess(state, payload) {
      state.isLogin = true
      state.isLoginError=false
      state.userInfo = payload
    },
    // login Failure
    loginError(state){
      state.isLogin= false
      state.isLoginError= true
    },
    logout(state){
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    },
    // getList(state){
    //   state.productList = 
    // }
  },
  actions: {
    //business 로직
    // trying login: success ---> loginSuccess
    login(loginObj){
        axios
        .post('https://reqres.in/api/login', loginObj)// loginObj 보내기
        .then(res => {
          //성공 시 토큰을 헤더에 포함시켜 유저정보 요청
          let token = res.data.token
          let config = {
            headers:{
              "access-token": token
            }
          }
          axios
          .get('https://reqres.in/api/users/2',config)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
            console.log(res);
        })
        .catch( err => {
            console.log(err);
        });
    },
    loadTable(){
      axios
      .get('https://6834e3d7-089f-4e1f-9153-165c56341f52.mock.pstmn.io/list/example')
      .then(response => {
        console.log(response)
        this.productList = response.data
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
    //   let selectedUser = null
    //   state.allUsers.forEach(user=>{
    //       if(user.email === loginObj.email) selectedUser=user
    //   })
    //   if(selectedUser === null || selectedUser.password !== loginObj.password) 
    //     //commit: mutation의 값을 가져와 사용함.
    //     commit("loginError")
    //   else {
    //     // userInfo에 값 전달하기(selectedUser: loginsuccess시 id값.)
    //     commit('loginSuccess', selectedUser)
    //     router.push({name:'mypage'}) // mypage로 이동.
    //   }
            
    // },

})
