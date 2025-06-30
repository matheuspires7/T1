import Listagem from "./Listagem"
import Empresa from "../models/Empresa"

export default class ListagemClientes extends Listagem {
  private empresa: Empresa

  constructor(empresa: Empresa) {
    super()
    this.empresa = empresa
  }

  public listar(): void {
    const clientes = this.empresa.getClientes()
    console.log("\nListagem de clientes:")
    clientes.forEach(cliente => {
      console.log(`- ${cliente.getNome()} (${cliente.getGenero()})`)
    })
    console.log(`\nTotal: ${clientes.length} clientes listados.`)
  }
}
