export default class Produto {
  constructor(private nome: string, private preco: number) {}

  public getNome(): string {
    return this.nome
  }

  public getPreco(): number {
    return this.preco
  }
}
