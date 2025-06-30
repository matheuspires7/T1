import CPF from "./CPF"
import RG from "./RG"
import Telefone from "./Telefone"
import Produto from "./Produto"
import Servico from "./Servico"

export default class Cliente {
  private nome: string
  private nomeSocial: string
  private genero: string
  private cpf: CPF
  private rgs: RG[]
  private telefones: Telefone[]
  private produtosConsumidos: Produto[]
  private servicosConsumidos: Servico[]
  private dataCadastro: Date

  constructor(nome: string, nomeSocial: string, genero: string, cpf: CPF) {
    this.nome = nome
    this.nomeSocial = nomeSocial
    this.genero = genero
    this.cpf = cpf
    this.rgs = []
    this.telefones = []
    this.produtosConsumidos = []
    this.servicosConsumidos = []
    this.dataCadastro = new Date()
  }

  public getNome(): string {
    return this.nome
  }

  public getGenero(): string {
    return this.genero
  }

  public getCPF(): CPF {
    return this.cpf
  }

  public getDataCadastro(): Date {
    return this.dataCadastro
  }

  public getRgs(): RG[] {
    return this.rgs
  }

  public getTelefones(): Telefone[] {
    return this.telefones
  }

  public getProdutos(): Produto[] {
    return this.produtosConsumidos
  }

  public getServicos(): Servico[] {
    return this.servicosConsumidos
  }

  public adicionarRG(rg: RG): void {
    this.rgs.push(rg)
  }

  public adicionarTelefone(telefone: Telefone): void {
    this.telefones.push(telefone)
  }

  public adicionarProduto(produto: Produto): void {
    this.produtosConsumidos.push(produto)
  }

  public adicionarServico(servico: Servico): void {
    this.servicosConsumidos.push(servico)
  }

  public getTotalConsumido(): number {
    const totalProdutos = this.produtosConsumidos.length
    const totalServicos = this.servicosConsumidos.length
    return totalProdutos + totalServicos
  }

  public getValorTotalConsumido(): number {
    const totalProdutos = this.produtosConsumidos.reduce((acc, p) => acc + p.getPreco(), 0)
    const totalServicos = this.servicosConsumidos.reduce((acc, s) => acc + s.getPreco(), 0)
    return totalProdutos + totalServicos
  }
}
