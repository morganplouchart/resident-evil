<template>
  <div>
  <video id="video" style="position:fixed" width="100%" :src="video" type="mp4" loop :muted="isMuted" autoplay="autoplay"></video>
  <v-btn id="info" v-if="MouseTop" style="margin-top:46%; margin-left:46%; position:fixed; z-index:999" color="error" fab large dark v-scroll-to="'#element'" @click="VideoautoPlay()">
     <v-icon>info</v-icon>
   </v-btn>
   <v-btn id="computer" v-if="MouseBottom" style="margin-top:46%; margin-left:46%; position:fixed; z-index:999" color="red" fab large dark v-scroll-to="'#video'"@click="VideoPlay()">
      <v-icon>computer</v-icon>
    </v-btn>
    <NavigationGames></NavigationGames>
    <v-content>
      <v-container grid-list-md text-xs-center style="margin-top:48%; margin-bottom:6%;" id="element">
          <v-layout row wrap>
              <v-flex xs12 md12 lg3>
                <v-card>
                  <v-card>
                    <v-img
                      class="img" v-bind:src="OneGame.cover"
                    ></v-img>
                    <a href="https://www.supersoluce.com/soluce/resident-evil-zero-hd-remaster/soluce-resident-evil-0-hd-remaster" target="_blank">
                      <v-btn color="error" style="width:100%; padding:0;margin:0">Soluce</v-btn>
                      </a>
                    <!--PERSONNAGES-->
                      <v-dialog v-model="personnages" scrollable persistent max-width="50%">
                      <v-btn style="width:100%; margin:0;padding:0;" slot="activator" color="orange darken-4" >Personnages</v-btn>
                      <v-card>

                        <v-card-text v-html="OneGame.characters"></v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="green darken-1" flat @click="personnages = false">J'ai lu</v-btn>
                          <v-btn color="green darken-1" flat @click="personnages = false">Rien à foutre</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>

                    <!--Histoire-->
                    <v-dialog v-model="Histoire" scrollable persistent max-width="50%">
                    <v-btn style="width:100%; margin:0;padding:0;" slot="activator" color="orange darken-1" >Histoire</v-btn>
                    <v-card>
                      <v-card-text v-html="OneGame.history"></v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" flat @click="Histoire = false">J'ai lu</v-btn>
                        <v-btn color="green darken-1" flat @click="Histoire = false">Rien à foutre</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  </v-card>
                  </v-card>
              </v-flex>
              <v-flex xs12 md12 lg5>
                <v-img class="borderWhite" v-bind:src="OneGame.screenshot4"
                ></v-img>
                <v-card>
                  <v-card-title>
                    <h4 v-html="OneGame.intro"></h4>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs12 md12 lg4>
                <iframe width="100%" height="400" v-bind:src="OneGame.gameplay" class="borderWhite" frameborder="0" allowfullscreen></iframe>
                <iframe width="100%" height="350" style="margin-top:10px;" :src="this.Saveroom" class="borderWhite" frameborder="0" allowfullscreen></iframe>
              </v-flex>
          </v-layout>
        </v-container>
    </v-content>
    <Footer></Footer>
  </div>
</template>
<script>
import axios from 'axios'
import NavigationGames from '../components/NavigationGames'
import Footer from '../components/Footer'

export default {
  name: 'ResidentEvil2',
  components: {
    NavigationGames,
    Footer
  },
  data() {
    return{
      video: "../../videos/ResidentEvil2.mp4",
      OneGame:[],
      params: "?autoplay=1",
      Saveroom:"",
      isMuted:false,
      MouseTop: false,
      MouseBottom: false,
      Histoire:false,
      personnages:false
    }
  },
  methods: {
      getOneGame:function(){
          axios.get('https://bridge.buddyweb.fr/api/residentevildata/games/3')
          .then(response => {
            this.OneGame = response.data
            //console.log(this.OneGame);
          })
          .catch(error => {
            console.log(error)
          })
        },
        VideoautoPlay:function(){
          this.Saveroom = this.OneGame.saveroom + this.params
          //console.log(this.Saveroom)
          this.isMuted = true
        },
        VideoPlay:function(){
          this.Saveroom = this.OneGame.saveroom
          this.isMuted = false
        },
        handleScroll (event) {
          if (window.scrollY > 100) {
            this.MouseTop = false
            this.MouseBottom = true
            this.VideoautoPlay()
            //console.log(this.isHidden);
          }
          if (window.scrollY < 100){
            this.MouseTop = true
            this.MouseBottom = false
            this.VideoPlay()
            //console.log(this.isHidden);
          }
        },
    },
    mounted(){
      this.getOneGame()
      this.handleScroll()
      //console.log(this.autoPlay);
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  </script>
  <style scope>
  .v-dialog__container{
    width:100% !important;
  }
  span{
    color:red;
  }
  .img{
    width:428px;
    height:600px !important;
    border:1px solid red;
    text-align:center;
  }
  h1{
    margin:0px 0px 20px 0px;
  }
  h4{
    margin:0px 0px 20px 0px;
    font-weight: bold;
    font-size: 1.2em;
    padding:0 10% 0 10%;
  }
  p{
    margin:50px 0px 20px 0px;
    font-size: 1.5em;
    padding:0 10% 0 10%;
  }
  .theme--dark.v-sheet {
  	background-color: #FFF !important;
  	border-color: #424242;
  	color: #333 !important;
  }
  .borderWhite{
    border:1px solid white;
  }
  @media only screen and (max-width: 600px){
    span {
      font-size: 0.7em;
    }
    #info{
      display:none;
    }
    #computer{
      display:none;
    }
    #video{
      display:none;
    }
    .img{
      width:100%;
      margin-top:-180px;
      background-size: contain !important;
    }
  }
  </style>
