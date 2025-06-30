import Listagem from "./Listagem"
import Empresa from "../models/Empresa"

export default class ClientesMaisConsumiramQuantidade extends Listagem {
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
        total: cliente.getProdutos().length + cliente.getServicos().length
      }))
      .sort((a, b) => b.total - a.total) // decrescente
      .slice(0, 10)

    console.log("\nTop 10 clientes que mais consumiram (quantidade):")
    clientesOrdenados.forEach((item, index) => {
      console.log(`${index + 1}. ${item.cliente.getNome()} - ${item.total} itens`)
    })
  }
}
