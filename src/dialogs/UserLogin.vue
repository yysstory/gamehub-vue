<template>
    <v-row justify="center">
        <v-dialog v-model="getUserLoginDialog" persistent max-width="500">
            <v-card>
                <v-card-title>
                    <span class="text-h5">로그인</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="이메일*" required  v-model="userEmail"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="비밀번호*" type="password" required  v-model="userPassword"></v-text-field>
                                <small>*필수 입력 항목 입니다</small>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-btn block class="text-none mb-4" color="indigo-darken-3" size="x-large" variant="flat" @click="doLogin()">
                                    로그인
                                </v-btn>
                                <v-btn block class="text-none" color="grey-lighten-3" size="x-large" variant="flat" @click="goJoinDialog()">
                                    회원가입
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>


export default {
    name: "UserLogin",
    mounted() {

    },
    props: {
        userLoginDialog: Boolean
    },
    data: () => ({
        userEmail:"",
        userPassword:"",
    }),
    methods: {
        doLogin() {
            
            let form = new FormData()
            form.append('userEmail', this.userEmail)
            form.append('userPassword',this.userPassword)

            this.axios.post('/api/web/login',form)
                .then(res => {
                    console.log(res.data);
                    if (res.data.code == '200') { //정상 로그인
                        alert("로그인 되었습니다.")
                        this.$emit("setUserLoginDialog", false);
                        this.$emit("setUserInfo", res.data.data);
                    } else {
                        alert(res.data.message);
                    }
                })
                .catch(error => { console.log(error) })
        },
        goJoinDialog(){
            this.$emit("setUserLoginDialog", false);
            this.$emit("setUserJoinDialog", true);
        }
    },
    computed: {
        getUserLoginDialog() {
            return this.userLoginDialog;
        }
    }
}
</script>
