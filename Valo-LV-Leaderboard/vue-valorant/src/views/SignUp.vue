
<template>
    <div id="parent">
        <img src="../assets/background2.jpg" alt="background" id="background">
    </div>

    <div id="Signin">
        <br><br><br><br><br><br><br><br><br><br><br><br>
        <h1 id="text" style="font-size:xxx-large;" class="text font-normal">Sign up</h1>
        <form>

            <input type="text" id="textbar" name="Username" placeholder="  Username" class="text font-normal"><br>
            <br><br><br>

            <input id="textbar" name="Password" placeholder="  Password" class="text font-normal">
            <br><br><br>

            <input type="text" id="textbar" name="tracker" placeholder="  tracker.gg link" class="text font-normal">
        </form> <br><br><br>
        <div id="buttons">
            <router-link to='/' ><button id="button" style="background-color: aliceblue;" class="text font-normal">Sign up</button> </router-link>
        </div>
        
    </div>

    <div id="thing">

    </div>
    

</template>
<script>

</script>
<style>
body{
    overflow: hidden;
}
#parent{
    max-width: 100%;
    max-height: 100%;
    position: absolute;
}

#Signin{
    position: absolute;
    width: 80vh;
    height: 100vh;
    background-color: transparent;
    left: 0%;
    top: 50%;
    transform: translate(0%, -50%);
    text-align: center;
    backdrop-filter: blur(10px);
    
    border-radius: 50px;
    border: none;
}
#background{
    margin: 0;
    padding: 0;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
}
#thing{
    background-color: #212529;
    width: 7vh;
    height: 100vh;
    position: absolute;
    left: 37%;
    top: 0;
}
#textbar{
    border-radius: 50px;
    border: none;
    background-color: aliceblue;
    height: 4vh;
    width: 25vh;
    padding-left: 10px;

}
#text{
    padding: 25px;
    color: aliceblue;
}
#button{
    background-color: white;
    width: 9vh;
    height: 3vh;
    border-radius: 50px;
    border-color: black solid;
    border: none;
    cursor: pointer;
    
}
#buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}


</style>