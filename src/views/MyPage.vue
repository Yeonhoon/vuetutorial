<template>
  <div>
    <v-img v-bind:src= "imgSrc">

    </v-img>
    <h1>
      {{userInfo.name}}님, 환영합니다!
    </h1>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['userInfo'])
  },
  data(){
    return {
      imgSrc:'https://kr.vuejs.org/images/logo.png'
    }
  }
}
</script>