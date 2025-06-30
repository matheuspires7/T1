import Listagem from "./Listagem"
import Empresa from "../models/Empresa"
import Cliente from "../models/Cliente"

type Genero = "F" | "M" | "O"

export default class ClientesPorGenero extends Listagem {
  private empresa: Empresa

  constructor(empresa: Empresa) {
    super()
    this.empresa = empresa
  }

  public listar(): void {
    const clientes = this.empresa.getClientes()
    const generos: Genero[] = ["F", "M", "O"]

    generos.forEach(genero => {
      console.log(`\nClientes do gênero ${genero}:`)
      const filtrados = clientes.filter(c => c.getGenero().toUpperCase() === genero)

      if (filtrados.length === 0) {
        console.log("  Nenhum cliente encontrado.")
      } else {
        filtrados.forEach((cliente, i) => {
          console.log(`  ${i + 1}. ${cliente.getNome()}`)
        })
      }
    })
  }
}
