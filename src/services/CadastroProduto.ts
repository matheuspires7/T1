import Cadastro from "./Cadastro"
import Entrada from "./Entrada"
import Produto from "../models/Produto"
import Empresa from "../models/Empresa"

export default class CadastroProduto extends Cadastro {
  private empresa: Empresa
  private entrada: Entrada

  constructor(empresa: Empresa) {
    super()
    this.empresa = empresa
    this.entrada = new Entrada()
  }

  public cadastrar(): void {
    console.log("\nCadastro de Produto:")
    const nome = this.entrada.receberTexto("Nome do produto: ")
    const preco = this.entrada.receberNumero("Preço do produto: ")

    const produto = new Produto(nome, preco)
    this.empresa.adicionarProduto(produto)

    console.log("Produto cadastrado com sucesso!\n")
  }
}
