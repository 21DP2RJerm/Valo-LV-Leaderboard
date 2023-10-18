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
        <img src="../assets/pfp.png" alt="profilepic" id="pfp">
        <div id="username">Jertixsdsdsds</div>
        <img src="../assets/immo2.png" alt="rank" id="rank">
      <div id="bio">Mekleju forsus cilvecinus ar kuriem casualy paspelet speliti. Gaidu atbildes no jebkura</div>
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
    width: 60vh;
    height: 15vh;
    background-color: aliceblue;
    position: absolute;
    top: 35%;
    left: 20%;
    transform: translate(-50%, -50%);
    border-radius: 50px;
    display: flex;
    justify-content:left;
    
  }
  #pfp{
    max-width: 100px;
    max-height: 100px;
    border-radius: 20px;
    left: 10px;
    top: 10px;
    position: relative;
    padding: 10px;
  }
  #username{
    font-size:xx-large;
    position: relative;
    padding: 4px;
    top: 16px;
  }
  #rank{
    top: 16px;

    max-width: 50px;
    max-height: 50px;
    padding: 4px;
    position: relative;
  }
  #bio{
    position: relative;
    top: 10px;
  }
</style>