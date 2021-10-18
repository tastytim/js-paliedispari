let word = prompt("Inserisci parola");

function palindroma(parola){
    if(parola === parola.split("").reverse().join("")){
        alert("Palindroma");
    }else{
        alert("non è palindroma");
    }
}

palindroma(word);