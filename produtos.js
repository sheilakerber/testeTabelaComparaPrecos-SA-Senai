//funcao que gera os tipos de produtos possiveis de inserir no sistema
var dataTiposProdutos = ["Leite", "Arroz", "Feijão", "Macarrão", "Sal", "Açúcar", "Farinha"]

function gerarTiposProdutos() {
    for (i = 0; i < dataTiposProdutos.length; i++) {
        var opcao = document.createElement('option')
        opcao.setAttribute('value', `${dataTiposProdutos[i]}`)
        document.getElementById('tipoProdutoInserido').appendChild(opcao)
    }
}

//Funcao para criar lista de produtos cadastrados
var listaProdutos = []
var listaDeProdutosObjeto = []

//pega os dados do html
//var produto = document.getElementById("produtoInserido")
var tipoProduto = document.getElementById("tipoProduto")
var marcaProduto = document.getElementById("marcaProdutoInserido")
var volumePesoProduto = document.getElementById("volumePesoProdutoInserido")
var dataCompraProduto = document.getElementById("dataCompra")
var estabelecimentoProduto = document.getElementById("estabelecimentoProduto")
var bairroProduto = document.getElementById("bairroProduto")
var valorProduto = document.getElementById("valorProduto")

//cria um novo produto
function criaProduto(tipoProduto, marcaProduto, volumePesoProduto, dataCompraProduto, estabelecimentoProduto, bairroProduto, valorProduto) {
    this.tipoProduto = tipoProduto
    this.marcaProduto = marcaProduto
    this.volumePesoProduto = volumePesoProduto
    this.dataCompraProduto = dataCompraProduto
    this.estabelecimentoProduto = estabelecimentoProduto
    this.bairroProduto = bairroProduto
    this.valorProduto = valorProduto
}
//adicionar novo produto ao Array listaProdutos[]
function inserirProduto() {
    //validar entrada de dados
    if ((tipoProduto.value == "") || (listaProdutos.includes(tipoProduto.value) !== true)) {
        alert("O campo Produto está em branco!")
    }

    if (marcaProduto.value == "") {
        alert("O campo Marca está em branco!")
    }

    if (volumePesoProduto.value == "") {
        alert("O campo Volume/peso está em branco!")
    }

    if (dataCompraProduto.value == "") {
        alert("O campo Data da compra está em branco!")
    }

    if (estabelecimentoProduto.value == "") {
        alert("O campo Estabelecimento está em branco!")
    }

    if (bairroProduto.value == "") {
        alert("O campo bairro não foi selecionado!")
    }

    if (valorProduto.value == "") {
        alert("O campo Valor unitário está em branco!")
    }

    //Fazer a validação das validações para rodar a função construtura e dar push no array
    if ((tipoProduto.value !== "") && (marcaProduto.value !== "") && (volumePesoProduto.value !== "") && (dataCompraProduto.value !== "") && (estabelecimentoProduto.value !== "") && (bairroProduto.value !== "") && (valorProduto.value !== "")) {

        let novoCadastroProduto = new criaProduto(tipoProduto.value, marcaProduto.value, volumePesoProduto.value, dataCompraProduto.value, estabelecimentoProduto.value, bairroProduto.value, valorProduto.value)
        listaProdutos.push(document.getElementById("tipoProduto").value)
        listaDeProdutosObjeto.push(novoCadastroProduto)
        alert("Produto inserido com sucesso!")
        localStorage.setItem("listaTodosProdutos", JSON.stringify(listaProdutos))
        localStorage.setItem("novoCadastroProduto", JSON.stringify(novoCadastroProduto))
        localStorage.setItem("listaDeProdutosObjeto", JSON.stringify(listaDeProdutosObjeto))
    }

    //limpar todos os campos para facilitar a add do próximo produto
    document.forms[0].reset();

}