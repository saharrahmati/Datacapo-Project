<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <l-map style="height: 600px" :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-polyline :lat-lngs="polyline.latlngs" :color="polyline.color"></l-polyline>
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'RunnersTrack',
    data () {
      return {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 11,
        center: [0,0],
        polyline: {
          latlngs: [],
          color: 'blue'
        },
        baseUrl: process.env.VUE_APP_BASE_URL,
        participantId:this.$route.params.id,
      };
    },
    methods:{
      async getTrackHistory(){
        await axios.get(this.baseUrl + 'history.json').then(response => {
          const data = response.data
          const filterItems = []
          data.filter((item)=>{
              if(this.participantId === item.tractalis_run_reference){
                filterItems.push(JSON.parse(item.history))
              }
          })
          for (let i = 0; i < filterItems.length; i++) {
            for (let j = 0; j < filterItems[i].length; j++) {
              this.polyline.latlngs.push([filterItems[i][j].lat,filterItems[i][j].lon])
            }
          } 
          this.center = this.polyline.latlngs[(this.polyline.latlngs.length / 2) | 0];
        })
      }
    },
    mounted() {
      this.getTrackHistory()
    }
  }
</script>

<style scoped>
</style>