export default class CPF {
  constructor(
    private valor: string,
    private dataEmissao: Date
  ) {}

  public getValor(): string {
    return this.valor
  }

  public getDataEmissao(): Date {
    return this.dataEmissao
  }
}
