var numeros = document.getElementById("numeros");

var letras = document.getElementById("letras");

// Números

function funcion1() {
    var aux =numeros.innerText;
    if (aux=="1,2,3,4,5,6,7,8,9,0") {
        letras.innerHTML="A";
    } else {
        
    }
    if (aux == '') {
        numeros.innerHTML="1";
    
    }
    
}

function funcion2() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 =="A") {
        letras.innerText="A,B";
    } else {
        if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("Falta una letra");
        }
    }
    if (aux == "1") {
        numeros.innerHTML="1,2";    
    } else {
        if (aux == '') {
            alert("falta un numero");
        }
    }
}

function funcion3() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 =="A,B") {
        letras.innerText="A,B,C";
    } else {
        if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("Falta una letra");
        }
    }
    if (aux =="1,2") {
        numeros.innerHTML="1,2,3";    
    } else {
        if (aux == '') {
            alert("faltan numeros");
        }
       
    }
}

function funcion4() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 =="A,B,C") {
        letras.innerText="A,B,C,D";
    } else {
        if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("Falta una letra");
        }
    }
    if (aux =="1,2,3") {
        numeros.innerHTML="1,2,3,4";    
    } else {
        if (aux == '') {
            alert("faltan numeros");
        }
       
    }
}

function funcion5() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 =="A,B,C,D") {
        letras.innerText="A,B,C,D,E";
    } else {
        if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("Falta una letra");
        }
    }
    if (aux =="1,2,3,4") {
        numeros.innerHTML="1,2,3,4,5";    
    } else {
        if (aux == '') {
            alert("faltan numeros");
        }
        
    }
}

function funcion6() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 =="A,B,C,D,E") {
        letras.innerText="A,B,C,D,E,F";
    } else {
        if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("Falta una letra");
        }
    }
    if (aux =="1,2,3,4,5") {
        numeros.innerHTML="1,2,3,4,5,6";    
    } else {
        if (aux == '') {
            alert("faltan numeros");
        }
        
    }
}

function funcion7() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 =="A,B,C,D,E,F") {
        letras.innerText="A,B,C,D,E,F,G";
    } else {
        if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("Falta una letra");
        }
    }
    if (aux =="1,2,3,4,5,6") {
        numeros.innerHTML="1,2,3,4,5,6,7";    
    } else {
        if (aux == '') {
            alert("faltan numeros");
        }
        
    }
}
function funcion8() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 =="A,B,C,D,E,F,G") {
        letras.innerText="A,B,C,D,E,F,G,H";
    } else {
        if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("Falta una letra");
        }
    }
    if (aux =="1,2,3,4,5,6,7") {
        numeros.innerHTML="1,2,3,4,5,6,7,8";    
    } else {
        if (aux == '') {
            alert("faltan numeros");
        }
        
    }
}

function funcion9() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 =="A,B,C,D,E,F,G,H") {
        letras.innerText="A,B,C,D,E,F,G,H,I";
    } else {
        if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("Falta una letra");
        }
    }
    if (aux =="1,2,3,4,5,6,7,8") {
        numeros.innerHTML="1,2,3,4,5,6,7,8,9";    
    } else {
        if (aux == '') {
            alert("faltan numeros");
        }
        
    }
}

function funcion0() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;
    if (aux2 =="A,B,C,D,E,F,G,H,I") {
        letras.innerText="A,B,C,D,E,F,G,H,I,J";
    } else {
        if (aux2 == '' && aux == "1,2,3,4,5,6,7,8,9,0") {
            alert("Falta una letra");
        }
    }
    if (aux =="1,2,3,4,5,6,7,8,9") {
        numeros.innerHTML="1,2,3,4,5,6,7,8,9,0";    
    } else {
        if (aux == '') {
            alert("faltan numeros");
        }
       
    }
}

// Letras