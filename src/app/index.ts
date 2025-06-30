import Entrada from "../services/Entrada"
import Empresa from "../models/Empresa"
import { clientes, produtos, servicos } from "./dados"

import CadastroCliente from "../services/CadastroCliente"
import CadastroProduto from "../services/CadastroProduto"
import CadastroServico from "../services/CadastroServico"
import RegistroConsumoProduto from "../services/RegistroConsumoProduto"
import RegistroConsumoServico from "../services/RegistroConsumoServico"

import ClientesMaisConsumiramQuantidade from "../services/ClientesMaisConsumiramQuantidade"
import ClientesMenosConsumiramQuantidade from "../services/ClientesMenosConsumiramQuantidade"
import ClientesMaisConsumiramValor from "../services/ClientesMaisConsumiramValor"
import ClientesPorGenero from "../services/ClientesPorGenero"
import ProdutosMaisConsumidos from "../services/ProdutosMaisConsumidos"
import ProdutosMaisConsumidosPorGenero from "../services/ProdutosMaisConsumidosPorGenero"

const empresa = new Empresa()
const entrada = new Entrada()

clientes.forEach(c => empresa.adicionarCliente(c))
produtos.forEach(p => empresa.adicionarProduto(p))
servicos.forEach(s => empresa.adicionarServico(s))

let execucao = true

while (execucao) {
  console.log(`\n=== Sistema WB ===`)
  console.log(`1 - Cadastrar cliente`)
  console.log(`2 - Cadastrar produto`)
  console.log(`3 - Cadastrar serviço`)
  console.log(`4 - Registrar consumo de produto`)
  console.log(`5 - Registrar consumo de serviço`)
  console.log(`6 - Listar 10 clientes que mais consumiram (quantidade)`)
  console.log(`7 - Listar clientes por gênero`)
  console.log(`8 - Listar produtos/serviços mais consumidos`)
  console.log(`9 - Listar produtos/serviços mais consumidos por gênero`)
  console.log(`10 - Listar 10 clientes que menos consumiram (quantidade)`)
  console.log(`11 - Listar 5 clientes que mais consumiram em valor`)
  console.log(`0 - Sair`)

  const opcao = entrada.receberNumero(`\nEscolha uma opção: `)

  switch (opcao) {
    case 1:
      new CadastroCliente(empresa).cadastrar()
      break
    case 2:
      new CadastroProduto(empresa).cadastrar()
      break
    case 3:
      new CadastroServico(empresa).cadastrar()
      break
    case 4:
      new RegistroConsumoProduto(empresa).registrar()
      break
    case 5:
      new RegistroConsumoServico(empresa).registrar()
      break
    case 6:
      new ClientesMaisConsumiramQuantidade(empresa).listar()
      break
    case 7:
      new ClientesPorGenero(empresa).listar()
      break
    case 8:
      new ProdutosMaisConsumidos(empresa).listar()
      break
    case 9:
      new ProdutosMaisConsumidosPorGenero(empresa).listar()
      break
    case 10:
      new ClientesMenosConsumiramQuantidade(empresa).listar()
      break
    case 11:
      new ClientesMaisConsumiramValor(empresa).listar()
      break
    case 0:
      execucao = false
      console.log("Saindo do sistema. Até mais!")
      break
    default:
      console.log("Opção inválida.")
  }
}
