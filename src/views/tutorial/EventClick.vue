<template>
  <v-container>
    <v-layout>
      <v-flex>
        <p>누른 횟수: {{count}}</p>
        <v-btn @click= "plusOne"
          elevation="2">누르세요</v-btn>
      </v-flex>
      <v-flex>
        <p>동시에 누르기:2 {{count2}}</p>
        <p>동시에 누르기:3 {{count3}}</p>
        <v-btn @click = "plusTwo(), plusThree()"
          elevation="2">눌러눌러</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data(){
    return{
      count: 0,
      count2:0,
      count3:0
    }
  },
  methods:{
    plusOne(){
      this.count += 1;
    },
    plusTwo(){
      this.count2 += 2;
    },
    plusThree(){
      this.count3 += 3;
    },
  }
}
</script>