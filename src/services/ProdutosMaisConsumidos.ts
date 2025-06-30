import Listagem from "./Listagem"
import Empresa from "../models/Empresa"

interface Consumo {
  nome: string
  quantidade: number
}

export default class ProdutosMaisConsumidos extends Listagem {
  private empresa: Empresa

  constructor(empresa: Empresa) {
    super()
    this.empresa = empresa
  }

  public listar(): void {
    const mapaProdutos = new Map<string, number>()
    const mapaServicos = new Map<string, number>()

    this.empresa.getClientes().forEach(cliente => {
      cliente.getProdutos().forEach(produto => {
        const nome = produto.getNome()
        mapaProdutos.set(nome, (mapaProdutos.get(nome) || 0) + 1)
      })

      cliente.getServicos().forEach(servico => {
        const nome = servico.getNome()
        mapaServicos.set(nome, (mapaServicos.get(nome) || 0) + 1)
      })
    })

    const produtosOrdenados: Consumo[] = Array.from(mapaProdutos.entries())
      .map(([nome, quantidade]) => ({ nome, quantidade }))
      .sort((a, b) => b.quantidade - a.quantidade)

    const servicosOrdenados: Consumo[] = Array.from(mapaServicos.entries())
      .map(([nome, quantidade]) => ({ nome, quantidade }))
      .sort((a, b) => b.quantidade - a.quantidade)

    console.log("\nProdutos mais consumidos:")
    produtosOrdenados.forEach((p, i) => {
      console.log(`${i + 1}. ${p.nome} - ${p.quantidade}x`)
    })

    console.log("\nServiços mais consumidos:")
    servicosOrdenados.forEach((s, i) => {
      console.log(`${i + 1}. ${s.nome} - ${s.quantidade}x`)
    })
  }
}
