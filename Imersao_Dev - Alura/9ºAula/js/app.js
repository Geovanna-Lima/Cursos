var cartaValente = {
  nome: "Valente",
  imagem: "https://i.pinimg.com/originals/55/83/ce/5583ced1af9d017a07d80472b4f6a86b.jpg",
  texto: "Independente",
  atributos: {
   Simpatia: 90,
   Determinação: 70,
   Heroísmo: 85
  }
}

var cartaMoana = {
  nome: "Moana",
  imagem: "https://i.pinimg.com/originals/6b/86/dd/6b86dd27422a7415d85fefe26cf94c1b.jpg",
  texto: "Aventureira",
  atributos: {
   Simpatia: 74,
   Determinação: 75,
   Heroísmo: 70 
  }
}

var cartaTiana = {
  nome: "Princesa Tiana",
  imagem: "https://www.justlia.com.br/wp-content/uploads/2016/11/disney-ilustracao-coroadeflores-012.jpg",
  texto: "Sonhadora",
  atributos: {
   Simpatia: 76,
   Determinação: 75,
   Heroísmo: 70
  }
}

var cartaRapunzel = {
  nome: "Rapunzel",
  imagem: "https://i.pinimg.com/originals/86/c2/16/86c216c18af799f6ff3f5f14a7e4954a.jpg",
  texto: "Carismática",
  atributos: {
   Simpatia: 80,
   Determinação: 78,
   Heroísmo: 82
  }
}

var cartaBela = {
  nome: "Bela",
  imagem: "https://www.justlia.com.br/wp-content/uploads/2016/11/disney-ilustracao-coroadeflores-001.jpg",
  texto: "Realista",
  atributos: {
   Simpatia: 74,
   Determinação: 75,
   Heroísmo: 72
  }
}

var cartaCinderela = {
  nome: "Cinderela",
  imagem: "https://www.justlia.com.br/wp-content/uploads/2016/11/disney-ilustracao-coroadeflores-005.jpg",
  texto: "Atenciosa",
  atributos: {
   Simpatia: 70,
   Determinação: 74,
   Heroísmo: 60
  }
}

var cartaBranca = {
  nome: "Branca de Neve",
  imagem: "https://www.justlia.com.br/wp-content/uploads/2016/11/disney-ilustracao-coroadeflores-004.jpg",
  texto: "Ingênua",
  atributos: {
   Simpatia: 78,
   Determinação: 80,
   Heroísmo: 79
  }
}

var cartaGalinho = {
  nome: "Galinho Hei Hei - SURPER TRUNFO",
  imagem: "https://i.ytimg.com/vi/tfVezGh2S0U/maxresdefault.jpg",
  texto: "CÓ CÓ",
  atributos: {
   Simpatia: 100,
   Determinação: 100,
   Heroísmo: 100
  }
}

var cartaMulan = {
  nome: "Mulan",
  imagem: "https://i.pinimg.com/originals/de/98/a5/de98a5c04f722228af7d5d44f903f9ab.jpg",
  texto: "Desastrada",
  atributos: {
   Simpatia: 40,
   Determinação: 49,
   Heroísmo: 10
  }
}

var cartaElsa= {
  nome: "Elsa",
  imagem: "https://i.pinimg.com/originals/0b/35/4f/0b354faeb3d9cee5534b73310622bd12.jpg",
  texto: "Calma",
  atributos: {
   Simpatia: 60,
   Determinação: 62,
   Heroísmo: 49
  }
}

var cartaMaquina;
var cartaJogador;
var cartas = [cartaValente, cartaMoana, cartaTiana, cartaRapunzel, cartaBela, cartaCinderela, cartaBranca, cartaGalinho, cartaMulan, cartaElsa];
// 0          1           2

var pontosJogador = 0;
var pontosMaquina = 0;

atualizaPlacar();

atualizaQuantidadeDeCartas();

function atualizaQuantidadeDeCartas(){
    var divQuantidadeCartas = document.getElementById('quantidade-cartas');
    var html = "Quantidade de Cartas no Jogo: " + cartas.length;
    
    divQuantidadeCartas.innerHTML = html;
}

function atualizaPlacar(){
    var divPlacar = document.getElementById('placar');
    var html = "Jogador " + pontosJogador + " X " + pontosMaquina + " Máquina";
    
    divPlacar.innerHTML = html;
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];

    cartas.splice(numeroCartaMaquina, 1);
    
    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    cartaJogador = cartas[numeroCartaJogador];
    
    cartas.splice(numeroCartaJogador, 1);
   
    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;
  
    exibeCartaJogador();
}

function exibeCartaJogador(){
    var divCartaJogador = document.getElementById('carta-jogador');
    
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    
    var texto = `<p class="carta-texto">${cartaJogador.texto}</p>`;
    
    var opcoesTexto = "";
    
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaJogador.atributos[atributo] + "<br>";
    }  
    var html = "<div id='opcoes' class='carta-status'>";
    
    divCartaJogador.innerHTML = moldura+nome+texto+html+opcoesTexto+"</div>";
    
    
    var divCartaMaquina = document.getElementById("carta-maquina");
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`; 
    var opcoesTexto = "";
    
    for (var atributo in cartaMaquina.atributos) {
            opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ": " +"???"+"<br>" ;
        }
        //opcoes.innerHTML = opcoesTexto;
    
    var html = "<div id='opcoes' class='carta-status'>";
    
    divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>';
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById('resultado');
    var atributoSelecionado = obtemAtributoSelecionado();

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        Swal.fire({
            icon: 'success',
            title: 'Parabéns',
            text: 'Você venceu essa rodada!'
        })
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        Swal.fire({
            icon: 'error',
            title: 'Não foi dessa vez',
            text: 'Você perdeu essa rodada!'
        })
      pontosMaquina++
    } else {
        Swal.fire({
            icon: 'info',
            title: 'Vocês empataram',
            text: 'Tente novamente.'
        })
    }
    atualizaPlacar();
    exibeCartaMaquina();
    atualizaQuantidadeDeCartas();
  
    if(cartas.length == 0){
       alert("O jogo acabou!")
       document.getElementById('btnJogar').disabled = true;
      if(pontosJogador > pontosMaquina){
        Swal.fire({
            imageUrl: 'https://media0.giphy.com/media/l0Iyn7lXkxJvgyurK/giphy.gif',
            imageWidth: 200,
            imageHeight: 200,
            title: 'Parabéns',
            text: 'Você venceu!'
        })
      }
      else if(pontosJogador < pontosMaquina){
         Swal.fire({
            imageUrl: 'https://data.whicdn.com/images/133129620/original.gif',
            imageWidth: 200,
            imageHeight: 200,
            title: 'Perdeu!',
            text: 'Você perdeu para a máquina!'
        })
      }
      else{
        Swal.fire({
            icon: 'info',
            title: 'Empate!',
            text: 'Você empatou com a máquina!'
        })
      }
    } else{
      document.getElementById('btnProximaRodada').disabled = false;
    }
    
    divResultado.innerHTML = htmlResultado;
    document.getElementById('btnJogar').disabled = true;

}

function exibeCartaMaquina(){
    var divCartaMaquina = document.getElementById('carta-maquina');
    
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    
;
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    
    var texto = `<p class="carta-texto">${cartaMaquina.texto}</p>`;
    
    var opcoesTexto = "";
    
    for (var atributo in cartaMaquina.atributos) {
            opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + "<br>";
        }  
    var html = "<div id='opcoes' class='carta-status'>";
    
    divCartaMaquina.innerHTML = moldura+nome+texto+html+opcoesTexto+"</div>";
}

function proximaRodada(){
    var divCartas = document.getElementById('cartas');
    
    divCartas.innerHTML = `<div class="cartaUm"> <h2>A sua carta é:</h2> <div id="carta-jogador" class="carta"></div></div> <div class="botoes"> <button class="button-jogar" type="button" id="btnJogar" onclick="jogar()" disabled="false">Jogar</button> <button type="button" id="btnProximaRodada" onclick="proximaRodada()" disabled="true">Proxima rodada</button></div> <div class="cartaDois"><h2>A carta da máquina é:</h2><div id="carta-maquina" class="carta"></div></div>`;
    
    document.getElementById('btnSortear').disabled = false;
    document.getElementById('btnJogar').disabled = true;
    document.getElementById('btnProximaRodada').disabled = true;
    
    var divResultado = document.getElementById('resultado');
    divResultado.innerHTML = "";
}