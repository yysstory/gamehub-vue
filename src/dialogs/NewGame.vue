<template>
    <v-row justify="center">
        <v-dialog v-model="getNewGameDialog" persistent max-width="500">
            <v-card>
                <v-card-title>
                    <span class="text-h5">새 게임 등록하기</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="게임이름" required v-model="gameName"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-btn block class="text-none mb-4" color="indigo-darken-3" size="x-large" variant="flat"
                                    @click="addGame()">
                                    등록하기
                                </v-btn>
                                <v-btn block class="text-none" color="grey-lighten-3" size="x-large" variant="flat" @click="setNewGameDialog(false)">
                                    취소
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
    name: "NewGame",
    props: {
        newGameDialog: Boolean
    },
    data: () => ({
        gameName: "",
    }),
    methods: {
        addGame() {
            let form = new FormData();
            form.append('gameName', this.gameName);

            this.axios.post('/api/web/game', form)
                .then(res => {
                    console.log(res.data);
                    if (res.data.code == '200') { //정상 
                        this.$emit("setNewGameDialog", false);
                        this.gameName = "";
                    }
                })
                .catch(error => { console.log(error) })
        },
        setNewGameDialog(bool){
            this.$emit("setNewGameDialog", bool);
        },
    },
    computed: {
        getNewGameDialog() {
            return this.newGameDialog;
        }
    },

}
</script>
