<template>
    <v-container>
        <v-layout column>
            <div class="text-xs-center">
                <h1>Axios를 활용한 서버에서 데이터 가져오기</h1>

            </div>
            <v-flex>
                
                <v-data-table
                    :headers= 'headers'
                    :items= 'items'
                    :items-per-page= "5"
                    :search= "search"
                    :loading= 'loading'
                    class="elevation-1"
                >

                </v-data-table>
                
            </v-flex>
            <v-flex>
                <table>
                    <thead>
                        <tr>
                            <th>제품명</th>
                            <th>가격</th>
                            <th>카테고리</th>
                            <th>배송료</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :key='i' v-for="(product, i) in productList">
                            <td>{{product.product_name}}</td>
                            <td>{{product.price}}</td>
                            <td>{{product.category}}</td>
                            <td>{{product.delivery_price}}</td>
                        </tr>
                    </tbody>

                </table>
            </v-flex>
            <v-flex>
                <p>First Name: {{userinfo.first_name}}</p>
                <p>Last Name: {{userinfo.last_name}}</p>
                <p>Phone Number: {{userinfo.phone}}</p>
                <p>Blood Type: {{userinfo.bloodtype}}</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import { mapActions } from 'vuex';
import axios from 'axios'
export default {
    data () {
        return {
            productList: "",
            headers: [{text: '제품명', value: 'product_name', align: 'center'},
            {text:'가격', value: 'price'} ,
            {text:'카테고리', value:'category'},
            {text:'가격', value:'delivery_price'}],
            items: [],
            search: "",
            loading: false,
            userinfo: ""
        };
    },
    created (){
        const baseURI = 'https://6834e3d7-089f-4e1f-9153-165c56341f52.mock.pstmn.io';
        axios
            .get(`${baseURI}/list/example`)
            .then((result) => {
                console.log(result.data)
                // console.log(result.data[0])
                this.productList = result.data
                // Array.prototype.push.apply(this.items, result.data)
                for(var i in result.data){
                    this.items.push(result.data[i]);

                }
            }
            )
        axios
            .get(`${baseURI}/userinfo`)
            .then(result => {
                console.log('user info:', result.data)
                this.userinfo = result.data
            })
        
    },
    // computed(){
    //     this.items= this.productList
    // },
    methods: {
        // async getList () {
        //     this.productList = await ("https://6834e3d7-089f-4e1f-9153-165c56341f52.mock.pstmn.io/list",'get');
        // }
        ...mapActions(['loadTable'])
    }
}
</script>