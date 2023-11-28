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

  <div id="profileblock">

    <img src="../assets//pfp.png " alt="pfp" id="pfp">
    <div id="userdata">
      <div id="name" class="font-head">Jertix</div>
      <img src="../assets/immo2.png" alt="rank" id="rank">
    </div>
    

  </div>



  <img src="../assets/valorantbck.jpg" alt="background" id="background">

  <toolbar>

  </toolbar>
  
</template>

<style>

  #profileblock{
    width: 140vh;
    height: 80vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.3);
    border-radius: 50px;
  }
  #pfp{
    width: 150px;
    padding: 30px;
  }
  #name{
    color: aliceblue;
    margin-right: 15px;
  }
  #rank{
    top: -2px;
  }
  #userdata{
    position: absolute;
    display: flex;
    height: 50px;
    left: 200px;
    top: 130px;
  }
</style>