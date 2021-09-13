<template>
  <v-container>
    <h2>{{title}}</h2>
    <p>{{contents}}</p>
  </v-container>
</template>
<script>
  export default {
    props:{
      title:{
        type: String,
        required: true,
        validator:(value)=>{
          return ['title','Title','타이틀'].indexOf(value) !== -1
        }
      },
      contents:{
        type: String,
        default: 'Content'
      }
    }
  }
</script>