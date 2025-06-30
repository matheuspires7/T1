import Cliente from "./Cliente"
import Produto from "./Produto"
import Servico from "./Servico"

export default class Empresa {
  private clientes: Cliente[]
  private produtos: Produto[]
  private servicos: Servico[]

  constructor() {
    this.clientes = []
    this.produtos = []
    this.servicos = []
  }

  // CLIENTES
  public getClientes(): Cliente[] {
    return this.clientes
  }

  public adicionarCliente(cliente: Cliente): void {
    this.clientes.push(cliente)
  }

  public removerCliente(nome: string): void {
    this.clientes = this.clientes.filter(c => c.getNome() !== nome)
  }

  // PRODUTOS
  public getProdutos(): Produto[] {
    return this.produtos
  }

  public adicionarProduto(produto: Produto): void {
    this.produtos.push(produto)
  }

  // SERVIÇOS
  public getServicos(): Servico[] {
    return this.servicos
  }

  public adicionarServico(servico: Servico): void {
    this.servicos.push(servico)
  }
}
