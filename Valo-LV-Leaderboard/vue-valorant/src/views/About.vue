<script>
import { RouterLink } from 'vue-router';
import toolbar from '../components/Header.vue';

export default {
  components: {
    toolbar
  }
}
</script>

<template>
    
    <img src="../assets/valorantbck.jpg" alt="background" id="background">

    <div id="about">
       
    </div>
    <toolbar>

    </toolbar>
</template>

<style>
#about{
  backdrop-filter: blur(5px);
    width: 80vh;
    height: 90vh;
    border: 5px solid #495057;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    border-radius: 50px;
    box-shadow: 0px 0px 20px 2px black;
}
#background{
    margin: 0;
    padding: 0;
    width: 100%;

  }
</style>