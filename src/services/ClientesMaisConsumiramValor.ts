import Listagem from "./Listagem"
import Empresa from "../models/Empresa"

export default class ClientesMaisConsumiramValor extends Listagem {
  private empresa: Empresa

  constructor(empresa: Empresa) {
    super()
    this.empresa = empresa
  }

  public listar(): void {
    const clientes = this.empresa.getClientes()

    const clientesOrdenados = clientes
      .map(cliente => ({
        cliente: cliente,
        totalValor: cliente.getValorTotalConsumido()
      }))
      .sort((a, b) => b.totalValor - a.totalValor) // decrescente
      .slice(0, 5)

    console.log("\nTop 5 clientes que mais consumiram (em valor):")
    clientesOrdenados.forEach((item, index) => {
      console.log(`${index + 1}. ${item.cliente.getNome()} - R$ ${item.totalValor.toFixed(2)}`)
    })
  }
}
