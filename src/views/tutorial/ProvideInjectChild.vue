<template>
  <v-container>
    <v-layout column>
      <v-flex >
        <h2>리스트의 길이: {{this.itemLength}}</h2>
        <br><br>
      </v-flex>
      <v-flex>
        <v-btn
          color="primary"
          elevation="3"
          @click= "childChange" ref="btn">
          변경
        </v-btn>
        <h3>자식 쪽: {{msg}}</h3>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  inject: ['itemLength'],
  data(){
    return{
      getData: "",
      msg: "하이"
    }
  },
  mounted(){
    console.log("Length of Injected data: ", this.itemLength);
    // this.getData = this.itemLength
    // this.$emit("update",this.itemLength)
    
  },
  methods:{
    childChange(){
      this.msg="변경된 메시지"
      this.$emit("update", this.msg)
      // console.log("자식컴포넌트에서 변경된 메시지:", this.msg)
    }
  }
}
</script>

<style>

</style>