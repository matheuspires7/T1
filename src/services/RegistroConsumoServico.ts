import Entrada from "./Entrada"
import Empresa from "../models/Empresa"
import Cliente from "../models/Cliente"
import Servico from "../models/Servico"

export default class RegistroConsumoServico {
  private empresa: Empresa
  private entrada: Entrada

  constructor(empresa: Empresa) {
    this.empresa = empresa
    this.entrada = new Entrada()
  }

  public registrar(): void {
    console.log("\nRegistro de consumo de serviço:")

    const nomeCliente = this.entrada.receberTexto("Nome do cliente: ")
    const cliente = this.empresa.getClientes().find(c => c.getNome() === nomeCliente)

    if (!cliente) {
      console.log("Cliente não encontrado.")
      return
    }

    const servicos = this.empresa.getServicos()
    servicos.forEach((s, i) => {
      console.log(`${i + 1} - ${s.getNome()} (R$ ${s.getPreco()})`)
    })

    const opcao = this.entrada.receberNumero("Escolha o serviço (número): ")
    const servicoSelecionado = servicos[opcao - 1]

    if (servicoSelecionado) {
      cliente.adicionarServico(servicoSelecionado)
      console.log("Serviço registrado com sucesso!")
    } else {
      console.log("Serviço inválido.")
    }
  }
}
