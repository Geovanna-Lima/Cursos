var tentativas = 3;
var resposta;

document.getElementById("btnSubmit1").onclick = function() { ;
    
    if(tentativas > 0) {
        console.log("ok");
        var result = parseInt(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
        document.getElementById("resultadoMes").innerHTML = result;
        
        document.getElementById("btnSubmit3").onclick = function() {
            alert("Olha, eu sou muito esperto!");

        }  
        document.getElementById("btnSubmit4").onclick = function() {
            if(tentativas> 0){
                tentativas = tentativas - 1;
                document.getElementById("tentativas").innerHTML = " Tentativas: " +tentativas;
                alert("Dessa vez eu não consegui, clique em " +'"SIM" ' +"novamente!");
            }
            else{
                alert("Minhas tentativas acabaram!");
            }
            
        }
        
    }
    else {
        alert("Minhas tentativas acabaram!");
    }
}

document.getElementById("btnSubmit2").onclick = function() { 

    if(tentativas > 0) {
        var result = parseInt(Math.floor(Math.random() * (12 - 7 + 1)) + 7);
        document.getElementById("resultadoMes").innerHTML = result; 
        
        document.getElementById("btnSubmit3").onclick = function() {
            alert("Olha, eu sou muito esperto!");
            
        }
        document.getElementById("btnSubmit4").onclick = function() {
            if(tentativas> 0){
                tentativas = tentativas - 1;
                document.getElementById("tentativas").innerHTML = " Tentativas: " +tentativas;
                alert("Dessa vez eu não consegui, clique em " +'"NÃO" '  +"novamente!");
            }
            else{
                alert("Minhas tentativas acabaram!");
            }
            
        }
        
    }
    else {
        alert("Minhas tentativas acabaram!");
    }
}
  
