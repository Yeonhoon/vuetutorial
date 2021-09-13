<template>
  <v-container>
    <v-layout column>
      <h2>부모영역</h2>
      <v-flex>
        <Child 
          @message= "getMsg"
          ref="childCompnent"/>
        <h2>자식에게서 받은 메시지: {{messages}}</h2>
      </v-flex>
      <v-flex>
        <v-text-field v-model= "parentData"></v-text-field>
        <v-btn @click="changeChildData">자식 데이터 바꾸기</v-btn>
      </v-flex>

    </v-layout>
  </v-container>
</template>
<script>
import Child from '../components/ChildComponent.vue'
export default {
  components: {Child},
  data(){
    return{
      messages:"",
      parentData:""
    }
  },
  methods:{
    getMsg(msg){
      this.messages = msg
      console.log(msg)
    },
    changeChildData(){
      this.$refs.childCompnent.childData=this.parentData
    }
  },
  mounted(){
    this.$refs.childCompnent.callFromParent();
  },
  computed:{
  }
}
</script>
  

