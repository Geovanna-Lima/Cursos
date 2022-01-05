function adicionarJogador(){ 
  var foto = '<img class="ajustar" src="' + document.getElementById('foto').value + '">';
  var nome = document.getElementById('nome').value.toUpperCase();
  var foto1 = document.getElementById('foto').value;
  //console.log(foto);
  if(nome != "" && foto1.endsWith('.png')) {
    var jogadorNovo = {
        foto: foto,
        nome: nome,
        jogos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0,
    }
    jogadores.push(jogadorNovo);
    document.getElementById('nome').value = "";
    document.getElementById('foto').value = "";
    //console.log(jogadores)
    exibirJogadoresNaTela(jogadores);
  } else {
    alert("URL da imagem está inválida, coloque uma imagem .png");
    document.getElementById('foto').value = ""
  }
}

function calculaPontos (jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

var jogadores = []

exibirJogadoresNaTela(jogadores);

function exibirJogadoresNaTela(jogadores) {
    var html = "";
    for(var i = 0; i < jogadores.length; i++){
        html += "<tr><td>" + jogadores[i].foto + "</td>";
        html += "<td>" + jogadores[i].nome + "</td>";
        html += "<td>" + jogadores[i].jogos + "</td>";
        html += "<td>" + jogadores[i].vitorias + "</td>";
        html += "<td>" + jogadores[i].empates + "</td>";
        html += "<td>" + jogadores[i].derrotas + "</td>";
        html += "<td>" + jogadores[i].pontos + "</td>";
        html += "<td><button class='vitoria' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        html += "<td><button class='empate' onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        html += "<td><button class='derrota' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>";
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = html;
}

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.jogos++;
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.jogos++;
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.jogos++;
    exibirJogadoresNaTela(jogadores);
}