<template>
  <div>
  <Navigation></Navigation>
    <v-content>
      <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex v-for="(game,index) in Allgames" :key="index" xs12 md6 lg2>
              <v-hover>
                    <v-card slot-scope="{ hover }" class="mx-auto"
            color="grey lighten-4">
                      <v-img class="cover" v-bind:src="game.cover">
                      <v-expand-transition>
                        <div v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal display-0 white--text" style="height: 100%;">
                          <router-link v-bind:to="game.route">
                          <v-btn color="red darken-4" style="width:100%; height:100%;padding:0;margin:0">
                            <v-icon medium>info</v-icon>
                            {{game.name}}
                          </v-btn>
                          </router-link>
                        </div>
                      </v-expand-transition>
                      </v-img>
                    </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </v-container>
    </v-content>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  components: {
    Navigation,
    Footer
  },
  data() {
    return{
      Allgames:[]
    }
  },
  methods: {
    getAllgames:function(){
        axios.get('https://bridge.buddyweb.fr/api/residentevildata/games')
        .then(response => {
          this.Allgames = response.data
          //console.log(this.Allgames);
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
    mounted(){
      this.getAllgames()
    }
  }
</script>
<style scope>
body{background: black;}
.cover{
  height:400px !important;
}
.v-toolbar__content>:first-child, .v-toolbar__extension>:first-child span {
  margin-top:-40px
}
</style>
