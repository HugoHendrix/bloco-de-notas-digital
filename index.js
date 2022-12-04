// ESSA FUNÇÃO É PARA COPIAR O CNPJ, OBSERVAR QUE É O MESMO ID DEFINIDO NO HTML (GÊNIO RSRS).

function cnpj() {
  let cnpj = document.getElementById("cnpj");
  cnpj.select();
  cnpj.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

// PASSAGEM DE TURNO
function copiar_texto_anotacoes() {
  var textoCopiado = document.getElementById("anotacoes");
  textoCopiado.select();
  document.execCommand("copy");
}

document.querySelector("#anotacoes").value = localStorage.getItem("anotacoes");
function salvar() {
  localStorage.setItem("anotacoes", document.querySelector("#anotacoes").value);
}


// MENSAGENS FREQUENTES
function copiarTexto() {
  let textoCopiado = document.getElementById("texto");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  document.execCommand("copy");

}

function normal() {
  let normal = document.getElementById("normal")
  normal.select();
  normal.setSelectionRange(0, 99999);
  document.execCommand("copy")

}


function naorec() {
  let naorec = document.getElementById("naorec");
  naorec.select();
  naorec.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function qual() {
  let qual = document.getElementById("qual");
  qual.select();
  qual.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
function tempo() {
  let tempo = document.getElementById("tempo");
  tempo.select();
  tempo.setSelectionRange(0, 99999);
  document.execCommand("copy");

}

function pendente() {
  let pendente = document.getElementById("pendente");
  pendente.select();
  pendente.setSelectionRange(0, 99999);
  document.execCommand("copy");


}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 1

function copiarTexto1() {
  let textoCopiado = document.getElementById("an1");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an1").value = localStorage.getItem("an1")
function salvar1() {
  localStorage.setItem("an1", document.querySelector("#an1").value)
}



// FUNÇÃO PARA COPIAR A ANOTAÇÃO 2

function copiarTexto2() {
  let textoCopiado = document.getElementById("an2");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an2").value = localStorage.getItem("an2")
function salvar2() {
  localStorage.setItem("an2", document.querySelector("#an2").value)
}


// FUNÇÃO PARA COPIAR A ANOTAÇÃO 3

function copiarTexto3() {
  let textoCopiado = document.getElementById("an3");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an3").value = localStorage.getItem("an3")
function salvar3() {
  localStorage.setItem("an3", document.querySelector("#an3").value)
}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 4

function copiarTexto4() {
  let textoCopiado = document.getElementById("an4");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an4").value = localStorage.getItem("an4")
function salvar4() {
  localStorage.setItem("an4", document.querySelector("#an4").value)

}



// FUNÇÃO PARA COPIAR A ANOTAÇÃO 5

function copiarTexto5() {
  let textoCopiado = document.getElementById("an5");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an5").value = localStorage.getItem("an5")
function salvar5() {
  localStorage.setItem("an5", document.querySelector("#an5").value)

}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 6

function copiarTexto6() {
  let textoCopiado = document.getElementById("an6");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an6").value = localStorage.getItem("an6")
function salvar6() {
  localStorage.setItem("an6", document.querySelector("#an6").value)

}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 7

function copiarTexto7() {
  let textoCopiado = document.getElementById("an7");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an7").value = localStorage.getItem("an7")
function salvar7() {
  localStorage.setItem("an7", document.querySelector("#an7").value)

}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 8

function copiarTexto8() {
  let textoCopiado = document.getElementById("an8");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an8").value = localStorage.getItem("an8")
function salvar8() {
  localStorage.setItem("an8", document.querySelector("#an8").value)

}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 9

function copiarTexto9() {
  let textoCopiado = document.getElementById("an9");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an9").value = localStorage.getItem("an9")
function salvar9() {
  localStorage.setItem("an9", document.querySelector("#an9").value)

}
// FUNÇÃO PARA COPIAR A ANOTAÇÃO 10

function copiarTexto10() {
  let textoCopiado = document.getElementById("an10");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an10").value = localStorage.getItem("an10")
function salvar10() {
  localStorage.setItem("an10", document.querySelector("#an10").value)

}
// FUNÇÃO PARA COPIAR A ANOTAÇÃO 11

function copiarTexto11() {
  let textoCopiado = document.getElementById("an11");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an11").value = localStorage.getItem("an11")
function salvar11() {
  localStorage.setItem("an11", document.querySelector("#an11").value)

}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 12

function copiarTexto12() {
  let textoCopiado = document.getElementById("an12");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an12").value = localStorage.getItem("an12")
function salvar12() {
  localStorage.setItem("an12", document.querySelector("#an12").value)

}
// FUNÇÃO PARA COPIAR A ANOTAÇÃO 13

function copiarTexto13() {
  let textoCopiado = document.getElementById("an13");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an13").value = localStorage.getItem("an13")
function salvar13() {
  localStorage.setItem("an13", document.querySelector("#an13").value)

}
// FUNÇÃO PARA COPIAR A ANOTAÇÃO 14

function copiarTexto14() {
  let textoCopiado = document.getElementById("an14");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an14").value = localStorage.getItem("an14")
function salvar14() {
  localStorage.setItem("an14", document.querySelector("#an14").value)

}


// FUNÇÃO PARA COPIAR A ANOTAÇÃO 15

function copiarTexto15() {
  let textoCopiado = document.getElementById("an15");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an15").value = localStorage.getItem("an15")
function salvar15() {
  localStorage.setItem("an15", document.querySelector("#an15").value)

}


//    SEÇÃO -  Saudações Skype, WhatsApp ou Telegram 


// FUNÇÃO PARA COPIAR A ANOTAÇÃO 16

function copiarTexto16() {
  let textoCopiado = document.getElementById("an16");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an16").value = localStorage.getItem("an16")
function salvar16() {
  localStorage.setItem("an16", document.querySelector("#an16").value)

}



// FUNÇÃO PARA COPIAR A ANOTAÇÃO 17

function copiarTexto17() {
  let textoCopiado = document.getElementById("an17");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an17").value = localStorage.getItem("an17")
function salvar17() {
  localStorage.setItem("an17", document.querySelector("#an17").value)

}




// FUNÇÃO PARA COPIAR A ANOTAÇÃO 18

function copiarTexto18() {
  let textoCopiado = document.getElementById("an18");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an18").value = localStorage.getItem("an18")
function salvar18() {
  localStorage.setItem("an18", document.querySelector("#an18").value)

}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 19

function copiarTexto19() {
  let textoCopiado = document.getElementById("an19");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an19").value = localStorage.getItem("an19")
function salvar19() {
  localStorage.setItem("an19", document.querySelector("#an19").value)

}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 20

function copiarTexto20() {
  let textoCopiado = document.getElementById("an20");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// PARA SALVAR TEXTO

document.querySelector("#an20").value = localStorage.getItem("an20")
function salvar20() {
  localStorage.setItem("an20", document.querySelector("#an20").value)

}




// SEÇÃO Ocorrências mais usadas



// FUNÇÃO PARA COPIAR A ANOTAÇÃO 21

function copiarTexto21() {
  let textoCopiado = document.getElementById("an21");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}



// FUNÇÃO PARA COPIAR A ANOTAÇÃO 22

function copiarTexto22() {
  let textoCopiado = document.getElementById("an22");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// FUNÇÃO PARA COPIAR A ANOTAÇÃO 23

function copiarTexto23() {
  let textoCopiado = document.getElementById("an23");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// FUNÇÃO PARA COPIAR A ANOTAÇÃO 24

function copiarTexto24() {
  let textoCopiado = document.getElementById("an24");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// FUNÇÃO PARA COPIAR A ANOTAÇÃO 25

function copiarTexto25() {
  let textoCopiado = document.getElementById("an25");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 26

function copiarTexto26() {
  let textoCopiado = document.getElementById("an26");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}



// FUNÇÃO PARA COPIAR A ANOTAÇÃO 27

function copiarTexto27() {
  let textoCopiado = document.getElementById("an27");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// FUNÇÃO PARA COPIAR A ANOTAÇÃO 28

function copiarTexto28() {
  let textoCopiado = document.getElementById("an28");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}




// FUNÇÃO PARA COPIAR A ANOTAÇÃO 29

function copiarTexto29() {
  let textoCopiado = document.getElementById("an29");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// FUNÇÃO PARA COPIAR A ANOTAÇÃO 30

function copiarTexto30() {
  let textoCopiado = document.getElementById("an30");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}
// FUNÇÃO PARA COPIAR A ANOTAÇÃO 31

function copiarTexto31() {
  let textoCopiado = document.getElementById("an31");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 32

function copiarTexto32() {
  let textoCopiado = document.getElementById("an32");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 33

function copiarTexto33() {
  let textoCopiado = document.getElementById("an33");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// FUNÇÃO PARA COPIAR A ANOTAÇÃO 34

function copiarTexto34() {
  let textoCopiado = document.getElementById("an34");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 35

function copiarTexto35() {
  let textoCopiado = document.getElementById("an35");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 36

function copiarTexto36() {
  let textoCopiado = document.getElementById("an36");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 37

function copiarTexto37() {
  let textoCopiado = document.getElementById("an37");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 38

function copiarTexto38() {
  let textoCopiado = document.getElementById("an38");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}
// FUNÇÃO PARA COPIAR A ANOTAÇÃO 39

function copiarTexto39() {
  let textoCopiado = document.getElementById("an39");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 40

function copiarTexto40() {
  let textoCopiado = document.getElementById("an40");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 41

function copiarTexto41() {
  let textoCopiado = document.getElementById("an41");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 42

function copiarTexto42() {
  let textoCopiado = document.getElementById("an42");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// FUNÇÃO PARA COPIAR A ANOTAÇÃO 43


function copiarTexto43() {
  let textoCopiado = document.getElementById("an43");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// FUNÇÃO PARA COPIAR A ANOTAÇÃO 44


function copiarTexto44() {
  let textoCopiado = document.getElementById("an44");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// FUNÇÃO PARA COPIAR A ANOTAÇÃO 45


function copiarTexto45() {
  let textoCopiado = document.getElementById("an45");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

// FUNÇÃO PARA COPIAR A ANOTAÇÃO 46


function copiarTexto46() {
  let textoCopiado = document.getElementById("an46");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// FUNÇÃO PARA COPIAR A ANOTAÇÃO 47


function copiarTexto47() {
  let textoCopiado = document.getElementById("an47");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}


// FUNÇÃO PARA COPIAR A ANOTAÇÃO 48


function copiarTexto48() {
  let textoCopiado = document.getElementById("an48");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
}



// ESCONDER BOTÃO DE VOLTA AO TOPO
const btnTop = document.querySelector("#backToTop");

// quando rolar a página 100px do topo para baixo, o botão aparece

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

// quando clicar no botão, a pagina voltará para o inicio

btnTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
