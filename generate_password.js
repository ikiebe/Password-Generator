const makePassword = () => {

    var gen = document.getElementById("generate");
    gen.innerHTML = "Generating....";

    setTimeout(()=>{
        gen.innerHTML = "";
    }, 2000)

    setTimeout(() => {
        
    var password = document.getElementById("password");

    let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+}{<>?~1';,./-=zazzuZehABCDEFGHIJKLMNOPQRSTUVWXYZ~jdfjasjhU74(*^^$#$$666";

    var password = "";

    for(let i=0; i<=10; i++){
        var genRandom = Math.floor(Math.random()*characters.length);
        password = password + characters.substring(genRandom, genRandom+1);
    }

    document.getElementById("password").value = password;

    }, 2000);
}

const copyPassword = () => {
    let copy = document.getElementById("password");
    copy.select();
    document.execCommand("copy");
    password.blur();
    
    if(!password.value==""){
        alert("copied");
    }
    else{
        alert("guy press make password nah");
    }
}



