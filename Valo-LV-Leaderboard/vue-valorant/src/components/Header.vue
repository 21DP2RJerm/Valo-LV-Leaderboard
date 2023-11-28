<script>
    export default{
        name:'toolbar'
    }
</script>

<template>
    <div id="toolbar">
        <img src="../assets/valologo.png" id="logo">
        <div id="links">
            <img src="../assets/leaderboard.png" id="image"> <router-link to='/' class="routers" > <a href="url" id="title" class="font-head">Leaderboard</a> </router-link> 
            <img src="../assets/plus.png" id="image"> <router-link to='/lft' class="routers" > <a href="url" id="title" class="font-head">LFT/LFG    </a> </router-link>   
            <img src="../assets/info.png" id="image"> <router-link to='/about' class="routers"> <a href="url" id="title" class="font-head">About      </a> </router-link>  
            <img src="../assets/profile.png" id="image"> <router-link to='/signin' class="routers"> <a href="url"  id="title" class="font-head">Sign In    </a> </router-link> 
        </div>
        
    </div>
</template>

<style>

#toolbar{
    width: 10vh;
    height: 100vh;
    position: absolute;
    background: rgba(0,0,0,0.3);
    top: 0px;
    left: 0px;
    transition: width 300ms ease;
}
#toolbar:hover{
    width: 30vh;
}
#toolbar:hover #title{
    display:contents;
}

#logo{
    max-width: 8vh;
    padding: 1vh;
    
}
#links{
    list-style: none;
    padding: 0px;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    
}

#links a {
   text-decoration: none;
}

#title{
    padding-top: 30px;
    padding-bottom: 30px;
    text-decoration: none;
    cursor: pointer;
    color:white ;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    display: none;
}
#image{
    max-width: 40px;
    display: contents;
}
</style>