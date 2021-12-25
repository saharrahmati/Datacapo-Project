<template>
<transition name="slide">
  <div class="container">
    <div class="row">
      <div class="col">
       <RunnersInfo 
          :participantInfo="participantInfo" 
        />
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import RunnersInfo from '@/components/RunnersInfo.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    RunnersInfo,
  },
  data() {
    return {
      fields: ['name', 'gender', 'city', 'runner_status'],
      participantInfo:[],
      baseUrl: process.env.VUE_APP_BASE_URL,
    }
  }, 
  methods:{
    async getRunnersInfo(){
      await axios.get(this.baseUrl + 'runs.json').then(response => {
         this.participantInfo = response.data
      })
    }
  },
  mounted(){
    this.getRunnersInfo()
  }
}
</script>
