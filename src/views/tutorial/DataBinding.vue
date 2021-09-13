<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <h2>Text Field{{title}}</h2>
        <v-text-field v-model= "valueText"></v-text-field>
        <v-text-field v-model.number= "valueNumber"
          label = "text-field: number"></v-text-field>
        <v-textarea v-model= 'valueTextArea'
          label="textarea"></v-textarea>
      </v-flex>
      <v-flex>
         <v-select
          label='Select'
          :items= 'items'
          item-text="name"
          item-value='value'
          solo> 
      <!-- filled, outlined -->
         </v-select>
      </v-flex>
      <v-flex>
        <h2>Checkbox</h2>
          <v-checkbox class="mx-2" v-model= 'game' label= "남자" value="men"></v-checkbox>
          <v-checkbox class="mx-2" v-model= 'game' label= "나이가 30대 근처?" value="Age almost 30"></v-checkbox>
          <v-checkbox class="mx-2" v-model= 'game' label= "군필??" value="군필"></v-checkbox>
          <span>선택된 것: {{ game }}</span>
          <h3>원하는 것을 고르시오</h3>
      </v-flex>
      <v-flex>
        <h2>Radio</h2>
         <p>Result: {{radio || 'null'}}</p>
          <v-radio-group v-model="radio" :mandatory='false'>
            <v-radio label='스타크래프트2 하기.' value="Starcraft2"
              color='blue'></v-radio>
            <v-radio label='오버워치하기.' value="Overwatch2"
              color='black'></v-radio>
          </v-radio-group>
      </v-flex>
      <v-flex>
        <h2>Switch</h2>
        <v-switch v-model= "switches" label='장연훈' value='장연훈'></v-switch>
        <v-switch v-model= "switches" label='홍미령' value='홍미령'></v-switch>
        <span>Result: {{switches}}</span>
      </v-flex>
    </v-layout>
  </v-container>
  
   
    

   
    
</template>
