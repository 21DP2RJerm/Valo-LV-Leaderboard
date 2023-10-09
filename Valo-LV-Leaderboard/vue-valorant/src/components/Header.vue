<script>
    export default{
        name:'toolbar'
    }
</script>

<template>
    <div id="toolbar">
        <router-link to='/' id="title"> <a href="url" id="title">Leaderboard</a> </router-link>
        <router-link to='/lft' id="title"> <a href="url" id="title">LFT/LFG</a> </router-link>
        <router-link to='/about' id="title"> <a href="url" id="title">About</a> </router-link>
        <router-link to='/signin' id="title"> <a href="url"  id="title">Sign In</a> </router-link>
    </div>
</template>

<style>

#toolbar{
    backdrop-filter: blur(20px);
    width: 180vh;
    height: 13vh;
    position: absolute;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: space-between;
    padding: 0 12vh;
    border-style: solid;
    border-radius: 2px;
    border-color:#6c757d;
    box-shadow: 0px 0px 50px 10px black;
}
#title{
    top: 2.5vh;
    height: 20px;
    width: 100px;
    text-decoration: none;
    cursor: pointer;
    position: relative;

    text-align: center;
    color:#6c757d ;
    background-color: transparent;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>