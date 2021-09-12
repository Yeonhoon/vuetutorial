<template>
    <v-container fill-height style="max-width: 450px;">
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-alert
                    class="mb-3"
                    :value="isLoginError"
                    type="error"
                    >
                    아이디 또는 비밀번호를 확인해주세요.
                </v-alert>
                <!-- 로그인 여부: vuex를 통해 관리할 예정. -->
                <v-alert
                    class="mb-3"
                    :value="isLogin"
                    type="success"
                    >
                    로그인 성공
                </v-alert>
                <v-card>
                    <v-toolbar flat>
                        <v-toolbar-title>로그인</v-toolbar-title>
                    </v-toolbar>
                    <div class='pa-7'>
                        <v-text-field
                            v-model="email"
                            label="Email"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="password"
                            type="password"
                            label="PW"
                        >
                        </v-text-field> 
                        <v-btn depressed large block 
                            color="blue darken-3"
                            dark
                            @click="login({
                                // 이름표: 값 두 값이 같으면 값만 입력해도 됨
                                email: email, // v-model의 이메일
                                password: password 
                            })"
                        >로그인</v-btn>  
                        <!-- <v-btn @click= "test">test</v-btn>     
                        <v-btn @click= "posttest">post test</v-btn> -->
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import {mapState, mapActions} from 'vuex'

export default {
    data(){
        return {
            email: null,
            password: null
            }
    },
    computed:{
        ...mapState(['isLogin','isLoginError'])
    },
    methods:{
        ...mapActions(['login']),
        // test(){
        //     // Make a request for a user with a given ID
        //     axios
        //     .get('https://reqres.in/api')
        //     .then(res => {
        //         // handle success
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         // handle error
        //         console.log(err);
        //     })
        //     .then(()=>{
        //         // always executed
        //         console.log('test')
        //     });
        // },

       

    }
}
</script>