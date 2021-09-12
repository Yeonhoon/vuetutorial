<template>
  <v-container>
    <h1>DataBinding Attribute</h1>
    <v-img 
      v-bind:src= "imgsrc"
      contain
      max-height="300"
      max-width="300"> </v-img>
    <v-text-field v-model="textValue"
      @keyup.enter="submit"
    ></v-text-field>
      <v-btn 
      v-bind:disabled="textValue==''"
        
        @click="submit">Submit</v-btn>
      <!-- disabled: 특정조건을 만족시키지 못한 경우 비활성화-->
      <v-flex>
        Result: {{submitResult}}
      </v-flex>
  </v-container>
</template>
<script>
export default {
  data(){
    return {
      imgsrc: 'https://kr.vuejs.org/images/logo.png',
      textValue:"",
      submitResult:""
    }
  },
  methods:{
    submit(){
      this.submitResult = this.textValue
      this.textValue = ""
    }
  }
}
</script>