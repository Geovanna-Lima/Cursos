var listaAlbuns = ["https://static.metacritic.com/images/products/music/2/153793c2d52b2c47819d169f2df5d230-98.jpg", 
                   "https://static.metacritic.com/images/products/music/7/37d41a1210252e00054ab77139189533-98.jpg", 
                   "https://static.metacritic.com/images/products/music/9/db45c5f14e2271eda363d1dcc264f384-98.jpg", 
                   "https://static.metacritic.com/images/products/music/5/336890da2587bab49fe6c899c333f722-98.jpg", 
                   "https://static.metacritic.com/images/products/music/2/1dc629a5c833f7d17be63980155cefb7-98.jpg",
                   "https://static.metacritic.com/images/products/music/0/5ab703f43374c176ca247856465dccad-98.jpg",
                   "https://static.metacritic.com/images/products/music/8/2b1095874788489df382db8218a4df41-98.jpg",
                   "https://static.metacritic.com/images/products/music/1/04c719ae11deda869458928cf15f2dd4-98.jpg",
                   "https://static.metacritic.com/images/products/music/4/b2f43dea47d5b0ec7a80d152482d9e30-98.jpg",
                   "https://static.metacritic.com/images/products/music/8/8c12349d68ea32a81dd4b6d2bbd5bcaf-98.jpg",
                   "https://static.metacritic.com/images/products/music/9/4bfe340c0d0c801dc3985d6aefac5e2d-98.jpg",
                   "https://static.metacritic.com/images/products/music/7/b21d9988ff4add234c9eb8db8f0b0625-98.jpg"];

var musica = ["https://www.youtube.com/playlist?list=OLAK5uy_kk162BW2lzsM8QE54N8nt6dvmsM9gdn4M&playnext=1&index=1", 
              "https://www.youtube.com/playlist?list=OLAK5uy_lglIKPOFCG5X9_Rf4Hxsmmh9GEeHL94Jo&playnext=1&index=1", 
              "https://www.youtube.com/playlist?list=OLAK5uy_m9dO997hqyquaE-xTYmZUqhm2pyKbQj-k&playnext=1&index=1", 
              "https://www.youtube.com/playlist?list=OLAK5uy_mjIISi65ovtKH354CMEnPtSbktEi-ZCRw&playnext=1&index=1", 
              "https://www.youtube.com/playlist?list=OLAK5uy_n4uwPMsdKXpeeyXCDgMmI-p6jdx5e3Phs&playnext=1&index=1",
              "https://www.youtube.com/playlist?list=OLAK5uy_nDFJQ8G2RNYuZriujUlrGlOWrfBW8ASdI&playnext=1&index=1",
              "https://www.youtube.com/playlist?list=OLAK5uy_mX9d9zsFckvzZEXQtDpdjnMdeZJrV9Wnc&playnext=1&index=1",
              "https://www.youtube.com/playlist?list=OLAK5uy_lnMdsGA9i4rd3GAgarcRAVTW1h4e82BjI&playnext=1&index=1",
              "https://www.youtube.com/playlist?list=OLAK5uy_lzx-lBv5o1PR9aG5hsk5T9ekXW5THQNd4&playnext=1&index=1",
              "https://www.youtube.com/playlist?list=OLAK5uy_mLBzyKhbG9yNsTXVMj0ruCwusJhUcc4JA&playnext=1&index=1",
              "https://www.youtube.com/playlist?list=OLAK5uy_lwaD8UXRautA8W9eWT4zZOvwf5Ktxpax8&playnext=1&index=1",
              "https://www.youtube.com/playlist?list=OLAK5uy_nDG2F1rgP_OVqXtQRjV260ZeuCiijByxs&playnext=1&index=1"];


var nomeAlbuns = ["AM", "1989", "LEMONADE", "IN UTERO", "Voicenotes", "Future Nostalgia", "Hollywood's Bleeding", "Anti", "Origins", "X", "After Hours", "Thank U, Next"];

for(var i = 0; i < listaAlbuns.length; i++){
  var $wrapper = document.querySelector('.nomeAlbuns'),

    HTMLNovo = "<div><a href=" + musica[i] + "class=nomeAlbuns>" +"<img class=grid-5 src=" + listaAlbuns[i] +"><p class=titulo>" + nomeAlbuns[i] + "</p></div>";
 
  $wrapper.insertAdjacentHTML('beforeend', HTMLNovo);
  
}