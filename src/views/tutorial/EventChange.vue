<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <v-select v-model="selectedValue"
          @change="changeSelect"
          :items="items"
          outlined
          label="Standard">
          
        </v-select>
      </v-flex>
      <v-flex>
        <p>Result: {{selectedValue}}</p>
        
      </v-flex>
    </v-layout>
  </v-container>

</template>
<script>
export default {
  data(){
    return{
      items: ['A','B','C','D'],
      selectedValue: '',
      result:''
    }
  },
  methods:{
    changeSelect(){
      console.log(this.selectedValue)
      // alert(this.selectedValue)
    }
  }
}
</script>