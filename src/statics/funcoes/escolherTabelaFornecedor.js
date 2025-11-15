//import { ordenar } from "./ordenar"
const escolherTabelaFornecedor = document.querySelectorAll(".incluirPedido")

    escolherTabelaFornecedor.forEach(item => {
        item.addEventListener("click", () => {
          const fornecedor = document.getElementById("fornecedorPedido").value
          const idCliente = item.querySelector(".idCliente")
          const idClienteText = idCliente.textContent
          
          if (fornecedor === "default") {
            alert("Escolha um Fonecedor!")
          } else {
            irParaPedido(idClienteText, fornecedor)
          }
        })
    })
    const irParaPedido = (idCliente, fornecedor) => {
        const url = `produtos.html?idCliente=${idCliente}&fornecedor=${fornecedor}`
        window.location.href = url
    }
    // FAZER UMA FUNCAO QUE TROQUE A PAGINA E MANDE COM ELA UM PARAMETRO QUE SEJA UMA FUNCAO