<template>
    <v-row justify="center">
        <v-dialog v-model="getUserJoinDialog" persistent max-width="500px">
            <v-card>
                <v-card-title>
                    <span class="text-h5">회원가입</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="이메일*" required v-model="userEmail" ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="비밀번호*" type="password" required v-model="userPassword"></v-text-field>
                                <small>*회원가입시 탈퇴 할 수 없습니다.</small>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-btn block class="text-none mb-4" color="indigo-darken-3" size="x-large" variant="flat" @click="doJoin()">
                                    회원가입
                                </v-btn>
                                <v-btn block class="text-none" color="grey-lighten-3" size="x-large" variant="flat" @click="goLoginDialog()">
                                    로그인
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

    name: "UserJoin",
    props: {
        userLoginDialog: Boolean,
        userJoinDialog: Boolean,
    },
    mounted() {
    },
    data: () => ({
        userEmail: "",
        userPassword: "",
    }),
    methods: {
        doJoin() {
            let form = new FormData()
            form.append('userEmail', this.userEmail)
            form.append('userPassword',this.userPassword)

            this.axios.post('/api/web/join', form)
                .then(res => {
                    console.log(res.data);
                    if (res.data.code == '200') {
                        alert("회원가입이 완료되었습니다.")
                        this.$emit("setUserJoinDialog", false);
                        this.$emit("setUserLoginDialog", true);
                    } else {
                        alert(res.data.message);
                    }
                })
                .catch(error => { console.log(error) })
        },
        goLoginDialog(){
            this.$emit("setUserJoinDialog", false);
            this.$emit("setUserLoginDialog", true);
        }
    },
    computed: {
        getUserJoinDialog() {
            return this.userJoinDialog;
        }
    }
}
</script>
