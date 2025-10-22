
const botao = document.getElementById("checkBranco");
const body = document.body;


botao.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
   botao.classList.toggle("ativo");
});



var modal = document.getElementById("modal");
function abrir(){
    modal.showModal()
}

function fechar(){
    modal.close()
}

function pegarNome(){
let nome =document.getElementById("nome").value 
localStorage.setItem("storage_nome",nome)
}

function mascara_telefone(){
  var tel = document.getElementById("telefone").value
  console.log(tel)
tel=tel.slice(0,14)
console.log(tel)
document.getElementById("telefone").value = tel;
var tel_formatado = document.getElementById("telefone").value
          if (tel_formatado[0]!="(")
          {
              if(tel_formatado[0]!=undefined)
              {
                  document.getElementById("telefone").value="("+tel_formatado[0];
              }
          }

          if (tel_formatado[3]!=")")
          {
              if(tel_formatado[3]!=undefined)
              {
                  document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
              }
          }

          if (tel_formatado[9]!="-")
          {
              if(tel_formatado[9]!=undefined)
              {
                  document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
              }
          }
          localStorage.setItem("storage_tel",tel_formatado)
          
      }


      function mascara_cpf(){
        var cpf = document.getElementById("cpf").value
        console.log(cpf)
        cpf=cpf.slice(0,14)
        console.log(cpf)
        document.getElementById("cpf").value = cpf;
        var cpf_formatado = document.getElementById("cpf").value

        if(cpf_formatado[3]!="."){
          
            if(cpf_formatado[3]!=undefined){
              document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
            }
          
        }

        if(cpf_formatado[7]!="."){
          
          if(cpf_formatado[7]!=undefined){
            document.getElementById("cpf").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7];
          }       
      }

      if (cpf_formatado[11]!="-")
        {
            if(cpf_formatado[11]!=undefined)
            {
                document.getElementById("cpf").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11]
            }
        }
      localStorage.setItem("storage_cpf",cpf_formatado)
       
      }


       function mascara_rg(){
        var rg = document.getElementById("rg").value
        console.log(rg)
        rg=rg.slice(0,14)
        console.log(cpf)
        document.getElementById("rg").value = rg;
        var rg_formatado = document.getElementById("rg").value

        if(rg_formatado[3]!="."){
          
            if(rg_formatado[3]!=undefined){
              document.getElementById("rg").value=rg_formatado.slice(0,3)+"."+rg_formatado[3];
            }
          
        }

        if(rg_formatado[7]!="."){
          
          if(rg_formatado[7]!=undefined){
            document.getElementById("rg").value=rg_formatado.slice(0,7)+"."+rg_formatado[7];
          }       
      }

      if (rg_formatado[11]!="-")
        {
            if(rg_formatado[11]!=undefined)
            {
                document.getElementById("rg").value=rg_formatado.slice(0,11)+"-"+rg_formatado[11]
            }
        }
      localStorage.setItem("storage_rg",rg_formatado)

      }

      