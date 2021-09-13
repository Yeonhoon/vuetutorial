<template>
  <v-container>
    <div text-xs-center>
      <PageTitle :title=title :contents= content></PageTitle>
    </div>
  </v-container>
</template>
<script>
  // import PageTitle from '../components/PageTitle.vue'
  export default {
    data(){
      return {
        title: "타이틀",
        content: '안녕하세요. 지금은 부모자식간 통신을 공부하는 중입니다.'
      }
    }
   
  }
</script>