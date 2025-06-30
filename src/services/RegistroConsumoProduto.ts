import Entrada from "./Entrada"
import Empresa from "../models/Empresa"
import Cliente from "../models/Cliente"
import Produto from "../models/Produto"

export default class RegistroConsumoProduto {
  private empresa: Empresa
  private entrada: Entrada

  constructor(empresa: Empresa) {
    this.empresa = empresa
    this.entrada = new Entrada()
  }

  public registrar(): void {
    console.log("\nRegistro de consumo de produto:")

    const nomeCliente = this.entrada.receberTexto("Nome do cliente: ")
    const cliente = this.empresa.getClientes().find(c => c.getNome() === nomeCliente)

    if (!cliente) {
      console.log("Cliente não encontrado.")
      return
    }

    const produtos = this.empresa.getProdutos()
    produtos.forEach((p, i) => {
      console.log(`${i + 1} - ${p.getNome()} (R$ ${p.getPreco()})`)
    })

    const opcao = this.entrada.receberNumero("Escolha o produto (número): ")
    const produtoSelecionado = produtos[opcao - 1]

    if (produtoSelecionado) {
      cliente.adicionarProduto(produtoSelecionado)
      console.log("Produto registrado com sucesso!")
    } else {
      console.log("Produto inválido.")
    }
  }
}
