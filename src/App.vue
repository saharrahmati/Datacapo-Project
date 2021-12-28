<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="navLink">Runners Information</router-link>
      <router-link to="/AllTrack" class="navLink">All Traks of Runners</router-link>
    </div>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
        return {
            transitionName:''
        }
    },
    watch: {
      $route(to, from) {
        if(to.meta.index > from.meta.index){
          this.transitionName = 'slide-left';
        }else{
          this.transitionName = 'slide-right';
        }
      }
    }
  }
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none
  }
  .navLink  {
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    background:#DAA520;
    color:#000;
  }

  #nav a.router-link-exact-active {
    color: #3535DD;
    background:#D8B45F
  }
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  body{
    z-index:1
  }
  body:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity:.5;
    background-image: url('./assets/bg-3.jpg');
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    z-index:-1
  }
  @media screen and (max-width: 576px){
    #nav {
      display: inline-grid;
      padding: 10px
    }
  }
</style>
