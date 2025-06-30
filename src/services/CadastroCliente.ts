import Cadastro from "./Cadastro"
import Cliente from "../models/Cliente"
import CPF from "../models/CPF"
import Entrada from "../services/Entrada"
import Empresa from "../models/Empresa"

export default class CadastroCliente extends Cadastro {
  private empresa: Empresa
  private entrada: Entrada

  constructor(empresa: Empresa) {
    super()
    this.empresa = empresa
    this.entrada = new Entrada()
  }

  public cadastrar(): void {
    console.log("\nCadastro de novo cliente:")
    const nome = this.entrada.receberTexto("Nome: ")
    const nomeSocial = this.entrada.receberTexto("Nome social: ")
    const genero = this.entrada.receberTexto("Gênero (M/F/O): ")
    const valorCpf = this.entrada.receberTexto("CPF: ")
    const dataCpf = this.entrada.receberTexto("Data de emissão do CPF (yyyy-mm-dd): ")

    const partesData = dataCpf.split("-")
    const dataEmissao = new Date(
      parseInt(partesData[0]),
      parseInt(partesData[1]) - 1,
      parseInt(partesData[2])
    )

    const cpf = new CPF(valorCpf, dataEmissao)
    const cliente = new Cliente(nome, nomeSocial, genero, cpf)

    this.empresa.adicionarCliente(cliente)

    console.log("Cliente cadastrado com sucesso!\n")
  }
}
