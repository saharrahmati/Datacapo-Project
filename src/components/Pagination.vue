<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="pagination-wrapper">
                    <div :class="[currentPage == 0 ? 'disabled' : 'previous']"  @click="updatePage(currentPage - 1)"> Previous </div>
                    <div class="first">{{ currentPage + 1 }} </div> 
                    <div class="text">of</div> 
                    <div class="end">{{ totalPages }}</div>
                    <div :class="[currentPage == totalPages - 1 ? 'disabled' : 'next']"  @click="updatePage(currentPage + 1)"> Next</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'pagination',
     props:{
        totalPages: Number,
        currentPage:Number,
        pageSize:Number
    },
    methods: {
        updatePage(pageNumber) {
            this.$emit('update-page', pageNumber);
        }
    }
}
</script>
<style scoped>
    .pagination-wrapper {
        margin-top: 10px;
        width: 25%;
        margin: 20px auto;
        display:flex;
        align-items:center;
        justify-content: space-between;
        flex-wrap: nowrap;
        background: #DAA520;
        color:#000;
        border-radius: 5px;
        padding: 0 7px;
    }
    .previous{
        cursor:pointer;
        padding: 10px;
        text-align: center;
        pointer-events: auto;
    }
    .next{
        cursor:pointer;
        padding: 10px;
        text-align: center;
        pointer-events: auto;
    }
    .disabled{
        color: gray;
        cursor:pointer;
        padding: 10px;
        text-align: center;
        pointer-events: none;
    }
    .first{
        padding: 5px;
        text-align: center;
        border-left: 1px solid #D6990C;
        
    }
    .end{
        padding: 5px;
        text-align: center;
        border-right: 1px solid #D6990C;
    }
    .text{
        padding: 5px;
        text-align: center 
    }
    @media screen and (max-width: 1199px){
        .pagination-wrapper{
            width: 45%
        }  
    }
     @media screen and (max-width: 992px){
        .pagination-wrapper{
            width: 40%
        }  
    }
    @media screen and (max-width: 767px){
        .pagination-wrapper{
            width: 60%
        }  
    }
    @media screen and (max-width: 576px){
        .pagination-wrapper{
            width: 60%
        }
    }
     @media screen and (max-width: 500px){
        .pagination-wrapper{
            width: 100%
        }
    }
</style>