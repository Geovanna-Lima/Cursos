function colocarq() {
    alert("oi");
  var campoVideoFavorito = document.querySelector('#video').value;
  listaVideos(campoVideoFavorito);
  
  //validar(videoFavorito);
}

// function validar(video) {
//   var campoVideoFavorito = document.querySelector('#video');
//   var videoFavorito = campoVideoFavorito.value;
//   if (videoFavorito.endsWith('.jpg')) {
//     listaVideos(videoFavorito);
//   } else {
//     alert("Isso não é um link!");
//   }
//   campoVideoFavorito.value = "";
// }
  
function listaVideos(video) {
  var listaVideos = document.querySelector('#listaVideos');
  var elementoVideo= "<embed src=" + video +">";
  
  listaVideos.innerHTML = listaVideos.innerHTML + elementoVideo;
}