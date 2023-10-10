<script>
import { RouterLink } from 'vue-router';
import toolbar from '../components/Header.vue'; 

export default {
  components: {
    toolbar
  }
}

</script>

<template id="body">
 

    <div id="leaderboard">
        <div id="player">
          <div id="placement entity" class="text">1</div>
          <div id="Username entity" class="text">Jertix</div>
          <div id="rating entity" class="text">368</div>
          <div id="rank entity"><img src="../assets/immo2.png" alt="rank" id="rank"></div>
        </div>
    </div>

    
    <img src="../assets/valorantbck.jpg" alt="background" id="background">

    <toolbar>

    </toolbar>
</template>

<style scoped>
  #entity{
    padding-left: 10%;
  }
  .text{
    color: aliceblue;
    font-size: x-large;
  }
  #rank{
    max-width: 50px;
  }
  #body{
    padding: 0;
    margin: 0;


  }

  #background{
    
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: max-content;
   
  }

#leaderboard{
  backdrop-filter: blur(5px);
    width: 80vh;
    height: 90vh;
    border: 5px solid #495057;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    border-radius: 50px;
    box-shadow: 0px 0px 20px 2px black;
}
#player{
    position: inherit;
    width: 76vh;
    height: 10vh;
    left: 3vh;
    border-radius: 40px;
    display: flex;
    justify-content: space-between;
}
</style>