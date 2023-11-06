
<template>
    <div id="parent">
        <img src="../assets/background2.jpg" alt="background" id="background">
    </div>

    <div id="Signin">
        <br><br><br><br><br><br><br><br><br><br><br><br>
        <h1 id="text" style="font-size:xxx-large;">Sign in</h1>
        <form>

            <input type="text" id="textbar" name="Username" placeholder="  Username"><br>
            <br><br><br>

            <input type="password" id="textbar" name="Password" placeholder="  Password">
        </form> <br><br><br>
        <router-link to='/' ><button id="signin" style="background-color: aliceblue;">Sign in</button> </router-link>
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
#signin{
    border: none;
    cursor: pointer;
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

}
#text{
    padding: 25px;
    color: aliceblue;
}
#signin{
    background-color: white;
    width: 9vh;
    height: 3vh;
    border-radius: 50px;
    border-color: black solid;
    
}


</style>