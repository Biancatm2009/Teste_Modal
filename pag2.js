var modal = document.getElementById("modal");


function abrir(){
    modal.showModal()
}

function fechar(){
    modal.close()
}

function show_telefone(){
  let telSalvo = localStorage.getItem("storage_tel");
 document.getElementById("show").innerHTML = telSalvo;
 console.log("show");
}


function show_nome(){
  let nomeSalvo = localStorage.getItem("storage_nome");
 document.getElementById("showNome").innerText ="NOME- " + nomeSalvo;
 console.log("show");
}


function executarTudo() {
  show_nome();
  
  funcao3();
}