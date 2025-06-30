import Cadastro from "./Cadastro"
import Entrada from "./Entrada"
import Servico from "../models/Servico"
import Empresa from "../models/Empresa"

export default class CadastroServico extends Cadastro {
  private empresa: Empresa
  private entrada: Entrada

  constructor(empresa: Empresa) {
    super()
    this.empresa = empresa
    this.entrada = new Entrada()
  }

  public cadastrar(): void {
    console.log("\nCadastro de Serviço:")
    const nome = this.entrada.receberTexto("Nome do serviço: ")
    const preco = this.entrada.receberNumero("Preço do serviço: ")

    const servico = new Servico(nome, preco)
    this.empresa.adicionarServico(servico)

    console.log("Serviço cadastrado com sucesso!\n")
  }
}
