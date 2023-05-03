<template>
  <v-container fluid>
    <!-- GAME ID & API KEY -->
    <v-row>
      <v-col cols="4" md="2">
        <div class="text-subtitle-1 text-medium-emphasis">Game ID</div>
        <v-text-field  density="compact"  variant="outlined" readonly  :value="selectedGame.gameId"></v-text-field>
      </v-col>
      <v-col cols="8" md="10">
        <div class="text-subtitle-1 text-medium-emphasis">API KEY</div>
        <v-text-field density="compact" variant="outlined"  readonly :value="selectedGame.gameApikey"
          prepend-inner-icon="mdi-key"></v-text-field>
      </v-col>
    </v-row>
    <!-- APIs -->
    <v-row>
      <v-col cols="12">
        <div>

          <div class="text-subtitle-1 text-medium-emphasis">APIs</div>

          <v-expansion-panels multiple>
            <v-expansion-panel>
              <v-expansion-panel-title>게임 플레이 결과 저장하기</v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row>
                  <v-col cols="4">
                    <div class="text-subtitle-1 text-medium-emphasis">Method</div>
                    <v-text-field readonly density="compact" placeholder="Method" variant="outlined"
                      value="GET"></v-text-field>
                  </v-col>
                  <v-col cols="8">
                    <div class="text-subtitle-1 text-medium-emphasis">URL</div>
                    <v-text-field readonly density="compact" placeholder="Method" variant="outlined"
                      value="https://gamehub.dait.co.kr/api/play"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <div class="text-subtitle-1 text-medium-emphasis">Form Params</div>

                    <v-table density="compact">
                      <thead>
                        <tr>
                          <th class="text-left">
                            이름
                          </th>
                          <th class="text-left">
                            필수
                          </th>
                          <th class="text-left">
                            범위
                          </th>
                          <th class="text-left">
                            설명
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>gameId</td>
                          <td>O</td>
                          <td>주어진값</td>
                          <td>위에보시오</td>
                        </tr>
                        <tr>
                          <td>gameApikey</td>
                          <td>O</td>
                          <td>주어진값</td>
                          <td>위에보시오</td>
                        </tr>
                        <tr>
                          <td>playerName</td>
                          <td>X</td>
                          <td>100자</td>
                          <td>플레이어명</td>
                        </tr>
                        <tr>
                          <td>playerComment</td>
                          <td>X</td>
                          <td>길어도됨</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>playScore</td>
                          <td>X</td>
                          <td>큰수가능</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>playUuid</td>
                          <td>X</td>
                          <td>100자</td>
                          <td>중복방지</td>
                        </tr>
                        <tr>
                          <td>etcText</td>
                          <td>X</td>
                          <td>길어도됨</td>
                          <td>아무거나</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </v-col>

                </v-row>

              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title>게임 플레이 결과 불러오기(랭킹)</v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row>
                  <v-col cols="4">
                    <div class="text-subtitle-1 text-medium-emphasis">Method</div>
                    <v-text-field readonly density="compact" placeholder="Method" variant="outlined"
                      value="POST"></v-text-field>
                  </v-col>
                  <v-col cols="8">
                    <div class="text-subtitle-1 text-medium-emphasis">URL</div>
                    <v-text-field readonly density="compact" placeholder="Method" variant="outlined"
                      value="https://gamehub.dait.co.kr/api/play"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <div class="text-subtitle-1 text-medium-emphasis">Form Params</div>

                    <v-table density="compact">
                      <thead>
                        <tr>
                          <th class="text-left">
                            이름
                          </th>
                          <th class="text-left">
                            필수
                          </th>
                          <th class="text-left">
                            범위
                          </th>
                          <th class="text-left">
                            설명
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>gameId</td>
                          <td>O</td>
                          <td>주어진값</td>
                          <td>위에보시오</td>
                        </tr>
                        <tr>
                          <td>gameApikey</td>
                          <td>O</td>
                          <td>주어진값</td>
                          <td>위에보시오</td>
                        </tr>
                        <tr>
                          <td>playMinusDays</td>
                          <td>X(기본:7)</td>
                          <td>숫자</td>
                          <td>ex. 0:오늘<br/>1:어제부터<br/>7:일주일전부터</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </v-col>

                </v-row>

              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>

      </v-col>


    </v-row>
    <!-- Play List -->
    <v-row>
      <v-col cols="12">
        <div class="text-subtitle-1 text-medium-emphasis">Play List</div>
        <v-table density="compact" fixed-header height="300px" >
          <thead>
            <tr>
              <th class="text-left">
                ID
              </th>
              <th class="text-left">
                플레이어명
              </th>
              <th class="text-left">
                코멘트
              </th>
              <th class="text-left">
                점수
              </th>
              <th class="text-left">
                게임시간
              </th>
              <th class="text-left">
                등록일
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="play in plays" :key="play.playId">
              <td>{{ play.playId }}</td>
              <td>{{ play.playerName }}</td>
              <td>{{ play.playerComment }}</td>
              <td>{{ play.playScore }}</td>
              <td>{{ play.playTime }}</td>
              <td>{{ play.regTime }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>

  </v-container>
</template>
   
<script>


export default {
  name: 'MainContents',
  props: {
    selectedGame: Object,
  },
  methods:{
    getPlays() {
      //playMinusDays
      this.axios.get('/api/play', {
        params: {
          gameId : this.selectedGame.gameId,
          gameApikey: this.selectedGame.gameApikey,
          //playMinusDays: 3
        }
      }).then(res => {
          if (res.data.code == '200') { //정상
            this.plays = res.data.data;
          }
      }).catch(error => { console.log(error) })
    },
  },
  data: () => ({
    plays:[],
  }),
  watch:{
    selectedGame: function(value){
      this.getPlays();
      console.log(value)
    }
  }
}
</script>
   
<style>
table{
  white-space: nowrap;
}
</style>