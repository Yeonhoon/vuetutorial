<template>
    <v-container>
        <v-layout>
            <v-flex>
                <!-- <v-data-table
                    :headers="headers"
                    :items="items"
                    class="elevation-1"
                >

                </v-data-table> -->
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
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data () {
        return {
            productList: []
            
        };
    },
    created (){
        this.getList();
        console.log(this.getList());
    },
    methods: {
        async getList () {
            this.productList = await this.$api("https://6834e3d7-089f-4e1f-9153-165c56341f52.mock.pstmn.io/list",'get');
        }
    }
}
</script>