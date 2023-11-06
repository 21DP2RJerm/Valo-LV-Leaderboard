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
   
    <toolbar>

    </toolbar>

    

    <div id="post">
      <div id="username" class="font-normal">Jertixsdsdsds</div>
      <img src="../assets/immo2.png" alt="rank" id="rank">    
      <div id="bio" class="font-normal">Mekleju forsus cilvecinus ar kuriem casualy paspelet speliti. Gaidu atbildes no jebkura</div>
    </div>
    <img src="../assets/valorantbck.jpg" alt="background" id="background">
    
</template>

<style>
#background{
    
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: max-content;
   
  }
  #post{
    width: 32vh;
    height: 20vh;
    background-color: aliceblue;
    position: absolute;
    top: 35%;
    left: 20%;
    transform: translate(-50%, -50%);
    border-radius: 50px;
    display: flex;
    white-space: normal;
  }
  #username{
    font-size:xx-large;
    position: relative;
    padding: 10px;
    top: 5px;
  }
  #rank{
    top: 5px;
    max-width: 50px;
    max-height: 50px;
    padding: 4px;
    position: relative;
  }
  #bio{
    position: absolute;
    top: 5vh;;
    padding: 10px;
  }

</style>