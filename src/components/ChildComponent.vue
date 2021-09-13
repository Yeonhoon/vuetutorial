<template>
  <v-container>
    <v-layout column>
      <v-flex >
        <v-text-field v-model= "msg"></v-text-field>
        <v-btn @click= "submit">부모에게 보내기</v-btn>
      </v-flex>
      <br><br>
      <v-flex>
        <p>자식 데이터: {{childData}}</p>
      </v-flex>
    </v-layout>
  </v-container>  
</template>
<script>
export default {
  data(){
    return {
      msg: "",
      childData: "원래 자식데이터입니다."
    }
  },
  methods:{
    submit(){
      this.$emit('message',this.msg)
      this.msg = null
    },
    callFromParent(){
      console.log('부모가 실행했습니다.')
    }
  }
}

</script>