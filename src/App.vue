<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <GameList 
        @setUserLoginDialog="setUserLoginDialog"
        @setNewGameDialog="setNewGameDialog"  
        @setSelectedGame="setSelectedGame"  
        :userInfo="userInfo"
        :newGameDialog="newGameDialog"
        :selectedGame="selectedGame"
      ></GameList>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ selectedGame.gameName }}</v-toolbar-title>
    </v-app-bar>

    <v-main>

      <MainContents
      :selectedGame="selectedGame"

      
      ></MainContents>

      <UserLogin 
        :userLoginDialog="userLoginDialog"
        @setUserLoginDialog="setUserLoginDialog"
        @setUserJoinDialog="setUserJoinDialog"
        @setUserInfo="setUserInfo"
        ></UserLogin>
      <NewGame
        :newGameDialog="newGameDialog"
        @setNewGameDialog="setNewGameDialog"
        @setSelectedGame="setSelectedGame"  
      ></NewGame>
      <UserJoin
        :userJoinDialog="userJoinDialog"
        @setUserJoinDialog="setUserJoinDialog"
        @setUserLoginDialog="setUserLoginDialog"

      ></UserJoin>
    </v-main>
  </v-app>
</template>

<script>
import GameList from './components/GameList.vue'
import MainContents from './components/MainContents.vue';
import NewGame from './dialogs/NewGame.vue';
import UserJoin from './dialogs/UserJoin.vue';
import UserLogin from './dialogs/UserLogin.vue';
//import axios from 'axios';

export default {
  name: 'App',
  methods:{
    setUserLoginDialog(value){
      this.userLoginDialog = value;
    },
    setUserJoinDialog(value){
      this.userJoinDialog = value;
    },
    setNewGameDialog(value){
      this.newGameDialog = value;
    },
    setUserInfo(value){
      this.userInfo = value;
    },
    setSelectedGame(value){
      this.selectedGame = value;
    },
  },

  components: {
    GameList,
    MainContents,
    NewGame,
    UserJoin,
    UserLogin,
  },

  data: () => ({
    drawer: null,
    userLoginDialog: false,
    userJoinDialog: false,
    newGameDialog: false,
    userInfo:{},
    selectedGame:{
      "gameId":"1", 
      "gameName":"돈되는게임",
      "gameApikey":"1234567890",
    },
      
  }),
  watch:{

  }
}
</script>

