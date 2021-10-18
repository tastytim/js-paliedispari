let sum;

const redbutton = document.getElementById("red");
const blubutton = document.getElementById("blu");

redbutton.addEventListener("click", function(){
    // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    const num = sceglinumero();
    console.log("num =" + num);
    // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    const pcr = pcrandomnumber();
    console.log("pcr = " + pcr);
    // Sommiamo i due numeri
    sum = parseInt(num)+parseInt(pcr);
    console.log("sum = " + sum);
    // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    let pod = pariodispari(sum);
    console.log("pod = " + pod)
    // Dichiariamo chi ha vinto.
    alert(parseInt(num) + " " + parseInt(pcr) + " " + parseInt(sum) + " " + parseInt(pod));
    if(pod == 0){
        alert("Hai vinto");
    }else{
        alert("Robot ha vinto");
    }
});


blubutton.addEventListener("click", function(){
   // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
   const num = sceglinumero();
   console.log("num =" + num);
   // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
   const pcr = pcrandomnumber();
   console.log("pcr = " + pcr);
   // Sommiamo i due numeri
   sum = parseInt(num)+parseInt(pcr);
   console.log("sum = " + sum);
   // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
   let pod = pariodispari(sum);
   console.log("pod = " + pod)
    // Dichiariamo chi ha vinto.
    alert(parseInt(num) + " " + parseInt(pcr) + " " + parseInt(sum) + " " + parseInt(pod));
    if(pod == 1){
        alert("Hai vinto");
    }else{
        alert("Robot ha vinto");
    }
});


function sceglinumero(){
    let num = prompt("Scegli numero da 1 a 5");
    if(isNaN(num) || num < 1 || num > 5){
        alert("numero non valido, riprova");
        sceglinumero();
    }else{
        return num;
    }
}


function pariodispari(sum){
    let n;
    if(sum % 2 === 0){
        n = 0;
        
    }else{
        n = 1;
        
     }
      return n;
}

function pcrandomnumber(){
    let pcrandomnumber = Math.floor((Math.random() * 5) + 1);
    return pcrandomnumber;
}

