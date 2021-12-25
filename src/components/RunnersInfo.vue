<template>
<div class="container">
  <div class="row">
    <div class="col">
      <div class="table-responsive">
      <table class="table table-bordered table-borderless">
        <thead>
          <tr>
             <td class="align-middle">Name</td>
            <td class="align-middle">Gender</td>
            <td class="align-middle">Country</td>
            <td class="align-middle">City</td>
            <td class="align-middle">Runners Staus</td>
            <td class="align-middle">Runners Track</td> 
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in visibleTodos" :key="index">
            <td class="align-middle">{{item.name}}</td>
            <td class="align-middle">{{item.gender === 'm' ? 'Male' : 'Female'}}</td>
            <td class="align-middle">{{item.country_iso2}}</td>
            <td class="align-middle">{{item.city}}</td>
            <td class="align-middle">{{item.runner_status}}</td>
            <td>
              <router-Link :to="'/history/'+item.tractalis_run_reference">
                <img src="../assets/map.png"/>
              </router-Link>
            </td>
          </tr>
        </tbody>
    </table>
  </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <Pagination :totalPages="totalPages"  :currentPage='currentPage' :pageSize='pageSize' @update-page='updatePage' />
    </div>
  </div>
</div> 
</template>

<script>
import Pagination from './Pagination'
export default {
  name: 'HelloWorld',
  data(){
    return {
       nextId: 13,
        currentPage:0,
        pageSize:8,
        visibleTodos:[],
        totalPages:0
    }
  },
  components : {
    Pagination
  },
  props:{
    participantInfo: Array
  },
  watch:{
    participantInfo: function(newValue){
      if(newValue){
        this.updateVisibleToods()
      }
    }
  },
  methods:{
    getParticipantID(id){
      this.$emit('get-id' , id)
    },
    updatePage(pageNumber){
      this.currentPage = pageNumber
      this.updateVisibleToods()
    },
    updateVisibleToods(){
      this.visibleTodos= this.participantInfo.slice(this.currentPage*this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
      if(this.visibleTodos === 0 && this.currentPage>0){
        this.updatePage(this.currentPage-1)
      }
      this.totalPages = Math.ceil(this.participantInfo && this.participantInfo.length / this.pageSize);
    }
  }
}
</script>
<style>
  thead {
    border-color:goldenrod;
    background-color: #908FE0
  }
  tbody tr:nth-child(2n+2){
    background: #DBDEFF
  }
  tbody tr:nth-child(2n+1){
    background:#E5E8FF
  }
  tbody tr:hover{
    background: #EDEFFF
  }
</style>
