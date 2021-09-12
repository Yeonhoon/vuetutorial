<template>
  <v-container>
    <h1 v-if= "isA">
      Type A
    </h1>
    <h1 v-if= "isB">
      Type B
    </h1>
    <v-btn text
      elevation="2"
      @click= "changeType">Button</v-btn>
  </v-container>
</template>
<script>
export default {
  data(){
    return{
      isA: true,
      isB: false
    }
  },
  methods:{
    changeType(){
      this.isA = false
      this.isB = true
    }
  }
}
</script>