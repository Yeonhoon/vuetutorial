<template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark fixed app style="max-height:75px;">
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class='hidden-sm-and-down'>
        <v-btn text :to="{name:'Home'}" exact>Home</v-btn>
        <v-spacer></v-spacer>
        <v-btn text :to="{name:'about'}" exact>About</v-btn>
        <v-menu offset-y>
          <template
            v-slot:activator= "{on}">
            
            <v-btn v-on="on" color='danger'>Tutorial</v-btn>
            
          </template>
          <v-list>
            <v-list-item :to="{name:'binding'}">Data binding Attribute</v-list-item>
            <v-list-item :to="{name:'classBinding'}">Class binding</v-list-item>
            <v-list-item :to="{name:'vif'}">Rendering V-if</v-list-item>
            <v-list-item :to="{name:'click'}">Event Click</v-list-item>
            <v-list-item :to="{name:'change'}">Event Change</v-list-item>
            <v-list-item :to="{name:'computed'}">Computed</v-list-item>
            <v-list-item :to="{name:'apibinding'}">API Binding</v-list-item>
          </v-list>
        </v-menu>
        
        <v-menu offset-y>
          <template
          v-slot:activator= "{on}">
            <v-btn
              text
              v-on="on"
              color="primary"
              >
              Menu
            </v-btn>
          </template>
        <v-list>
          <v-list-item router :to="{name:'mypage'}"
            v-if='isLogin'>
            <v-list-item-title>마이페이지</v-list-item-title>
          </v-list-item>
          <v-list-item
          v-if='isLogin'
          @click="$store.dispatch('logout')">
            <v-list-item-title>로그아웃</v-list-item-title>
          </v-list-item>
          <v-list-item
            v-else router :to="{name:'login'}">
              <v-list-item-title>로그인</v-list-item-title>
          </v-list-item>
        </v-list>
        <!-- <v-btn text v-if="isLogin" :to="{name:'mypage'}">마이페이지</v-btn>
        <v-btn text v-if='isLogin'>로그아웃</v-btn>
        <v-btn text v-else router :to="{name:'login'}" exact>로그인</v-btn> -->
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer color="indigo" app>
      <span class="white-text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    data: () => ({
      drawer: null
    }),
    computed:{
      ...mapState(['isLogin'])
    },
    props: {
      source: String
    },
    // methods: {
    //   ...mapActions(['logout'])
    // }
  }
</script>