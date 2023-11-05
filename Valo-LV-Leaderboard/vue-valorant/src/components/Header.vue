<script>
    export default{
        name:'toolbar'
    }
</script>

<template>
    <div id="toolbar">
        <img src="../assets/valologo.png" id="logo">
        <div id="links">
            <router-link to='/' class="routers" > <a href="url" id="title" class="font-head">Leaderboard</a> </router-link>
            <router-link to='/lft' class="routers" > <a href="url" id="title" class="font-head">LFT/LFG    </a> </router-link>   
            <router-link to='/about' class="routers"> <a href="url" id="title" class="font-head">About      </a> </router-link>   
            <router-link to='/signin' class="routers"> <a href="url"  id="title" class="font-head">Sign In    </a> </router-link>
        </div>
        
    </div>
</template>

<style>
#logo{
    max-width: 100px;
    position: absolute;
}
#toolbar{
    backdrop-filter: blur(20px);
    width: 100%;
    height: 13vh;
    position: absolute;
    left: 0px;
    top: 0px;

    



}
#routers{
    width:0px;
}
#links {
    position: absolute;
    display:grid;
    grid-template-columns: auto auto auto auto;
    width: 50%;
    right: 0px;
    top: 20px;
    
}
#title{
    top: 15px;
    height: 40px;
    width: 200px;
    text-decoration: none;
    cursor: pointer;
    position: absolute;
    text-align: center;
    color:white ;
    background-color: transparent;
    border:3px solid white;
   
    
   


    

}
</style>