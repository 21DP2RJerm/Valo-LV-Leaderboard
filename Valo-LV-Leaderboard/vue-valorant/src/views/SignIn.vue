
<template>
    <div id="Signin">
        <br><br><br><br><br><br><br><br><br><br><br><br>
        <h1>Sign in</h1>
        <form>
            <label for="Username" id="text">Username:</label>
            <input type="text" id="textbar" name="Username"><br>
            <br><br><br>
            <label for="Password" id="text">Password:</label>
            <input type="text" id="textbar" name="Password">
        </form> <br><br><br>
        <button id="signin">Sign in</button>
    </div>
    <img src="../assets/background2.jpg" alt="background" id="background">

</template>
<script>

</script>
<style>

#Signin{
    position: absolute;
    width: 80vh;
    height: 100vh;
    background-color: transparent;
    right: 0%;
    top: 50%;
    transform: translate(0%, -50%);
    text-align: center;
    backdrop-filter: blur(5px);
    
    border-radius: 50px;
}
#background{
    margin: 0;
    padding: 0;
    width: 100%;
    

  }
#textbar{
    border-radius: 50px;
    border: none;
    background-color:#212529;
    height: 3vh;

}
#text{
    padding: 25px;
}
#signin{
    background-color: white;
    width: 9vh;
    height: 3vh;
    border-radius: 50px;
    border-color: black solid;
    
}

</style>