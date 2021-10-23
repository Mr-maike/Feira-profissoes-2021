function leiaMais(){
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var btnLeiaMais = document.getElementById("btnLeiaMais");

    if(pontos.style.display === "none"){
      pontos.style.display = "inline";
      btnLeiaMais.innerHTML = "Carregar Mais";
      maisTexto.style.display = "none";
    }else{
      pontos.style.display = "none";
      btnLeiaMais.innerHTML = "Carregar Menos";
      maisTexto.style.display = "inline";
    }
  }