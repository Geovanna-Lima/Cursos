document.getElementById("btnSubmit").onclick = function() {
  
  var resposta = document.getElementById("pikachu").value.toLowerCase();
  
  if(resposta == "pikachu"){ 
    var result = "Correto!!!";
    document.getElementById("resultadoPikachu").innerHTML = result;
  }
  else{
    var result = "Errado, é Pikachu!";
    document.getElementById("resultadoPikachu").innerHTML = result;
  }
}

document.getElementById("btnSubmit2").onclick = function() {
  
  var resposta = document.getElementById("charmander").value.toLowerCase();
  
  if(resposta == "charmander"){ 
    var result = "Correto!!!";
    document.getElementById("resultadoCharmander").innerHTML = result;
  }
  else {
    var result = "Errado, é Charmander!";
    document.getElementById("resultadoCharmander").innerHTML = result;
  }
}

document.getElementById("btnSubmit3").onclick = function() {
  
  var resposta = document.getElementById("squirtle").value.toLowerCase();
  
  if(resposta == "squirtle"){ 
    var result = "Correto!!!";
    document.getElementById("resultadoSquirtle").innerHTML = result;
  }
  else {
    var result = "Errado, é Squirtle!";
    document.getElementById("resultadoSquirtle").innerHTML = result;
  }
}

document.getElementById("btnSubmit4").onclick = function() {
  
  var resposta = document.getElementById("bulbasaur").value.toLowerCase();
  
  if(resposta == "bulbasaur"){ 
    var result = "Correto!!!";
    document.getElementById("resultadoBulbasaur").innerHTML = result;
  }
  else {
    var result = "Errado, é Bulbasaur!";
    document.getElementById("resultadoBulbasaur").innerHTML = result;
  }
}

