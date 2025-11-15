const btnBuscar = document.getElementById("btnBuscar")
const inputPesquisa = document.getElementById("pesquisa")


const ordenar = async (argument = "") => {
    
    const parms = new URLSearchParams(window.location.search)
    const idCliente = parms.get("idCliente")
    const fornecedor = parms.get("fornecedor")

    const body = {
        fornecedor: fornecedor,
        idCliente: idCliente,
        nome: argument
    }
    const resposta = await fetch(`${window.location.origin}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    const lista = await resposta.json()

    const container = document.getElementById("produtos-container")
    const template =  document.getElementById("produto-template")

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    const fragmento = document.createDocumentFragment()

    if ( lista.length === 0 ) { 
        document.getElementById("nproduto").style.display = "block"
    } else {
        lista.forEach(item => {
            const clone = template.content.cloneNode(true);

            clone.querySelector("p.codigo").textContent = item.codigo;
            clone.querySelector("p.produto").innerHTML = item.produto;
            clone.querySelector("p.marca").textContent = item.marca;
            clone.querySelector("p.estoque").textContent = `ESTQ ${item.estoque} - ${item.pesocaixa}`;
            if (fornecedor == "produtosmegag"){ clone.querySelector("p.validade").textContent = item.validade } // ALTERAR A COLUNA DE DATA PARA STRING NO SQL
            clone.querySelector("option.v1").textContent = `R$ ${item.valor1}`
            clone.querySelector("option.v2").textContent = `R$ ${item.valor2}`
            clone.querySelector("option.v3").textContent = `R$ ${item.valor3}`
            clone.querySelector("option.v4").textContent = `R$ ${item.valor4}`
            clone.querySelector("option.v5").textContent = `R$ ${item.valor5}`
            clone.querySelector("option.v6").textContent = `R$ ${item.valor6}`

            const img = clone.querySelector(".imgcaminho");
            const aTag = clone.querySelector(".link-img");
            let caminho = ""

            if(fornecedor == "produtosmegag") {
                caminho = `https://megag.com.br/imagens-consinco/${item.codigo}.jpg`
            } else {
                caminho = `../imgs/${item.codigo}.jpg`
            }

            img.src = caminho
            aTag.href = caminho
            img.alt = `Imagem do produto ${item.produto}`;
            
            //const btnAdd = clone.querySelector(".btnAdd").parentElement;
            //clone.querySelector(".faixapreco").value = valorSelecionado

            fragmento.appendChild(clone);
        });
        document.getElementById("nproduto").style.display = "none"
        container.appendChild(fragmento); 
    }
    inputPesquisa.value = ""
}
window.addEventListener("DOMContentLoaded", ordenar())

btnBuscar.addEventListener("click", () => {
    const argument = inputPesquisa.value.trim()
    ordenar(argument)
})

inputPesquisa.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        btnBuscar.click()
    }
})  


