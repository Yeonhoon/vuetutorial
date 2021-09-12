<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <v-col cols='12' sm='6' md='4'>
          <v-text-field
            outlined
            label="First Name"
            v-model= "firstName"
          ></v-text-field>
        </v-col>
        <v-col sm='6' md='4'> 
          <v-text-field
            outlined
            label="Last Name"
            v-model= "lastName"
          ></v-text-field>
        </v-col>
      </v-flex>
      <v-flex>
        <h1>Full name: {{fullName}}</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data(){
    return{
      firstName:"",
      lastName:""
    }
  },
  computed:{
    fullName(){
      return this.firstName + " " + this.lastName
    }
  }
}
</script>