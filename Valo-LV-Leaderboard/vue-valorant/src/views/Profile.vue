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
      <a href="https://tracker.gg/valorant/profile/riot/Jertix%23ists/overview" target="_blank" id="name" class="font-huge">Jertix </a>
      <img src="../assets/immo2.png" alt="rank" id="rank">
    </div>
    <div id="userstats">
      <div id="stats" class="font-huge">Augstākā vieta LV leaderboard</div>
      <div id="stats" class="font-huge">Augstākā vieta pasaules leaderboard</div>
      <div id="stats" class="font-huge">Augstākais ranks</div>
    </div>
    <div id="statdata">
      <div id="dati" class="font-huge">12</div>
      <div id="dati" class="font-huge">14098</div>
      <div id="dati" class="font-huge"><img src="../assets/immo2.png" alt="rank" id="rank"></div>
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
    text-decoration: none;
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
    align-items: center;
  }

  #userstats{
    position: absolute;
    display: flex;
  }
  #stats{
    max-width: 46vh;
    color: aliceblue;
    padding: 0.3vh;
    text-align: center;
  }

  #statdata{
    position: absolute;
    display: flex;
    justify-content: space-between;
    height: 50px;
    top: 450px;
    width:max-content;
  }
</style>