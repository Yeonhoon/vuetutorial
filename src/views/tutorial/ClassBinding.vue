<template>
  <v-container v-bind:class="{
    'active': isActive, 
    'text-red': hasError
  }"> Class Binding
    <!-- <v-layout v-bind:class="[activeClass,errorClass]">Class Binding2</v-layout> -->
  </v-container>
</template>
<script>
export default {
  data(){
    return {
      isActive: true,
      hasError: false,
      activeClass: 'active',
      errorClss : 'text-red'
      }
  }
}
</script>
<style>
  .active{
    background-color: yellow;
    font-weight: bold;
  }
  .text-red{
    color: red;
  }
</style>