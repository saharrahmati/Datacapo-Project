<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <l-map style="height: 500px" :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <div v-for="(item,index) in markerLatLng" :key="index">
            <l-marker :lat-lng="item" :icon="icon"></l-marker>
          </div>
        </l-map>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import L from 'leaflet';


export default {
  name: 'AllTrack',
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 3,
      center: [47.313220, -1.319482],
      markerLatLng: [],
      baseUrl: process.env.VUE_APP_BASE_URL,
      icon: L.icon({
        iconUrl: require('@/assets/icon.png'),
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
    }
  },
  methods:{
    async getPositionStart(){
      await axios.get(this.baseUrl + 'runs.json').then(response => {
         const data = response.data
         const positionFirst=[]
         data.map((item)=>{
           if(item.position_first){
             positionFirst.push(JSON.parse(item.position_first))
           }
         })
         positionFirst.map((item)=>{
           this.markerLatLng.push([item.lat,item.lon])
         })
      })
    }
  },
  mounted(){
    this.getPositionStart()
  }
  
}
</script>
