<template>
  <!-- 사용자 -->
  <v-sheet color="grey-lighten-4" class="pa-4">
    <h1>GameHub</h1>
    <div>{{userInfo.userEmail}}</div>
  </v-sheet>
  <v-divider></v-divider>
  <v-btn block prepend-icon="mdi-plus" @click="setNewGameDialog(true)">게임생성</v-btn>

  <!-- 게임 리스트 -->
  <v-list>
    <v-list-item v-for="game in games" :key="game.gameId" link @click="setSelectedGame(game)">
      <template v-slot:prepend>
        <v-icon>mdi-gamepad-variant</v-icon>
      </template>
      <v-list-item-title>{{ game.gameName }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>
  
<script>

export default {
  name: 'GameList',
  mounted() {
    this.getGames();
  },
  methods: {
    getGames() {
      this.axios.get('/api/web/game', {})
        .then(res => {
          console.log(res.data);
          if (res.data.code == '200') { //정상 권한
            this.games = res.data.data;
            if(res.data.data.length == 0){ //게임이 하나도 생성된게 없다면
              // 게임 생성 팝업 띄우기
              this.$emit("setNewGameDialog", true);
            }else{
              this.setSelectedGame(res.data.data[0])
            }
          }else if(res.data.code == '401'){ //로그인 전 권한 없음
            this.$emit("setUserLoginDialog", true);
          }else if(res.data.code == '500'){ //서버에러
            alert(res.data.message);
          }
        })
        .catch(error => { console.log(error) })
    },


    setNewGameDialog(bool){
      this.$emit("setNewGameDialog", bool);
    },

    setSelectedGame(game){
      this.$emit("setSelectedGame", game);
    },

  },
  props: {
    userInfo: Object,
    newGameDialog: Boolean,
    selectedGame: Object,
  },

  data: () => ({
    gameName:"",
    games: [
    ],
  }),
  watch:{
    userInfo: function () {
      this.getGames();
    },
    newGameDialog: function () {
      this.getGames();
    },
  },
}

</script>
  
