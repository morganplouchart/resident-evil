<template>
    <v-toolbar app>
        <img style="width:40px;padding-top:40px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Umbrella_Corporation_logo.svg/1024px-Umbrella_Corporation_logo.svg.png" />
      <v-toolbar-title class="headline text-uppercase title">
        <router-link to="/"><span>Resident Evil </span>
        <span class="font-weight-light">APP</span></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-menu bottom left offset-y>
        <v-btn
          slot="activator"
          color="red darken-1"
          dark
        >
          Menu
        </v-btn>
        <v-list>
          <v-list-tile
          v-for="(game,index) in Allgames" :key="index"
          >
            <v-list-tile-title>
              <router-link v-bind:to="game.route">{{game.name}}</router-link>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
</template>
<script>
import axios from 'axios'

export default {
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
          console.log(this.Allgames);
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
a{
  text-decoration: none;
  color:white !important;
}
.v-list__tile:hover{
  background: #f44336;
}
@media only screen and (max-width: 600px) {
  span {
    font-size: 0.7em;
  }
}

</style>
