function an1(){
    close()
    document.getElementById("an1-info").style.display= "flex";
    document.getElementById("an1-info").style.justifyContent= "center";
    document.getElementById("an1-info").style.flexDirection= "column";
}

function an2(){
    close()
    document.getElementById("an2-info").style.display= "flex";
}

function an3(){
    close()
    document.getElementById("an3-info").style.display= "block";
}
function an4(){
    close()
    document.getElementById("an4-info").style.display= "block";
}
function an5(){
    close()
    document.getElementById("an5-info").style.display= "block";
}

function close(){
    document.getElementById("an1-info").style.display= "none";
    document.getElementById("an2-info").style.display= "none";
    document.getElementById("an3-info").style.display= "none";
    document.getElementById("an4-info").style.display= "none";
    document.getElementById("an5-info").style.display= "none";
}
