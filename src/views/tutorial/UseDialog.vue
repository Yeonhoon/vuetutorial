<template>
  <v-main>
    <v-container>
      <v-btn
        dark color='green'
        elevation="5"
        @click="showDialog('Text')">
        Show Dialog
      </v-btn>
      <v-dialog
        max-width="500"
        v-model= "myDialogText"
      >
        <Mydialog
          header-title="텍스트 입력하기"
          @hide="hideDialog('Text')"
          @submit="submitDialog('Text')"
        >
          <template v-slot:body>
            <v-text-field
              placeholder="내용을 입력하세요."
              v-model="mytext"
            ></v-text-field>
          </template>
        </Mydialog>
      </v-dialog>

      <!-- list -->
      <v-btn
        dark color="red"
        elevation="5"
        @click="showDialog('List')"
      > 
      과일 리스트
      </v-btn>
      <v-dialog
        v-model= 'myDialogList'
        max-width="500">
         <Mydialog
          header-title="과일 리스트"
          @hide="hideDialog('List')"
          @submit="submitDialog('List')"
        >
          <template v-slot:body>
            <v-list >
              <v-list-item-group color='primary' >
                <v-list-item v-for ="(item,i) in mylist" :key=i >
                  <v-list-item-content >
                    <v-list-item-title 
                      v-text=item.name
                      ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </template>
         </Mydialog>
      </v-dialog>
    
    </v-container>
  </v-main>
</template>

<script>
import Mydialog from "@/components/Mydialog"
import axios from 'axios'
export default {
  components: {Mydialog},
  data: () => ({
      myDialogText: false,
      myDialogList: false,
      mytext: "",
      mylist: [],
      selectedItem:"",
      footerSubmit: true
  }),

  created() {
    const baseURI= 'https://6834e3d7-089f-4e1f-9153-165c56341f52.mock.pstmn.io';
    axios
    .get(`${baseURI}/list/example/fruit`)
    .then(result  => {
      // console.log(result.data)
      this.mylist = result.data
      
    })
    .catch(error => {
      console.log(error)
    })
  },

  methods:{
    showDialog(type){
      this[`myDialog${type}`]=true
    },
    hideDialog(type){
      this[`myDialog${type}`]= false
      this.mytext=null
    },
    submitDialog(type){
      if(type==="Text") console.log('Text submit 완료: ', this.mytext)
      else if (type ==="List") console.log('List submit 완료: ', this.selectedItem)
      // console.log(this.selectedItem)
      this.hideDialog(type)
      this.mytext=null
    }
  }
}
</script>

<style>

</style>