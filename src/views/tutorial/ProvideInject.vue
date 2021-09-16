<template>
  <v-container pa-10>
    <v-layout column>
      <v-flex ma-3>
        <v-text-field 
          label="입력하시오"
          v-model="addItems" 
          @keyup.enter="submit"
          ></v-text-field>
        <h3>부모가 자식에게서 받은 데이터: {{dataFromChild}}</h3>
      </v-flex>
      <v-flex>
        <ProvideInjectChild
          @update= "update"
          ref="child"
        ></ProvideInjectChild>

      </v-flex>
      <v-flex>
        <v-btn @click="check"
          large>
          동기화 확인
        </v-btn>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProvideInjectChild from '@/views/tutorial/ProvideInjectChild'
export default {
  components:{ProvideInjectChild},
  data: () => ({
    items: ['A','B'],
    addItems: "",
    dataFromChild:""

  }),
  computed:{
    msg() {
      return this.$refs.child.msg
    }
  },
  methods: {
    submit(){
      this.items.push(this.addItems)
      this.addItems = null
      console.log(this.items)
    },
    update(data){
      console.log("자식이 보낸 데이터", data);
      this.dataFromChild = data;
    },
    check(){
      console.log("자식에게서 변경된 메시지:", this.$refs.child.msg)
    }
  },
  provide() {
    return{
      itemLength: this.items.length

    }
  }

}
</script>

<style>

</style>