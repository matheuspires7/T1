export default class Telefone {
  constructor(private ddd: string, private numero: string) {}

  public getNumero(): string {
    return `(${this.ddd}) ${this.numero}`
  }

  public getDDD(): string {
    return this.ddd
  }
}
