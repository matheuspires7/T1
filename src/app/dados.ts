import Cliente from "../models/Cliente"
import CPF from "../models/CPF"
import RG from "../models/RG"
import Telefone from "../models/Telefone"
import Produto from "../models/Produto"
import Servico from "../models/Servico"

const clientes: Cliente[] = []
const produtos: Produto[] = []
const servicos: Servico[] = []

const nomesClientes = [
  ["Lucas Tavares", "Lucas", "M"],
  ["Isabela Moura", "Isa", "F"],
  ["Diego Nascimento", "Diego", "M"],
  ["Carolina Vasques", "Carol", "F"],
  ["Gabriel Rocha", "Gabi", "M"],
  ["Marina Duarte", "Mari", "F"],
  ["Eduardo Ramos", "Dudu", "M"],
  ["Juliana Afonso", "Juli", "F"],
  ["Vinícius Braga", "Vini", "M"],
  ["Letícia Gonçalves", "Let", "F"],
  ["Otávio Souza", "Otto", "M"],
  ["Beatriz Oliveira", "Bia", "F"],
  ["André Barbosa", "André", "M"],
  ["Natália Alves", "Nati", "F"],
  ["Thiago Cardoso", "Th", "M"],
  ["Camila Ribeiro", "Cami", "F"],
  ["Felipe Lima", "Fel", "M"],
  ["Aline Martins", "Aline", "F"],
  ["Rafael Pires", "Rafa", "M"],
  ["Bruna Costa", "Bru", "F"],
  ["Daniel Fonseca", "Dani", "M"],
  ["Fernanda Torres", "Fe", "F"],
  ["Pedro Cunha", "Pedro", "M"],
  ["Lorena Amaral", "Lore", "F"],
  ["Caio Silva", "Caio", "M"],
  ["Tatiane Melo", "Tati", "F"],
  ["Marcelo Vieira", "Mar", "M"],
  ["Patrícia Nogueira", "Pathy", "F"],
  ["João Guilherme", "Jota", "O"],
  ["Érica Monteiro", "Eri", "O"]
]

nomesClientes.forEach(([nome, social, genero], i) => {
  const cpf = new CPF(`111.111.111-${i.toString().padStart(2, "0")}`, new Date(2010 + (i % 10), 1, 10))
  const rg = new RG(`22.222.222-${i}`, new Date(2005 + (i % 10), 6, 15))
  const tel = new Telefone("9" + (80 + (i % 20)).toString(), `9${i.toString().padStart(8, "0")}`)
  const cliente = new Cliente(nome, social, genero, cpf)
  cliente.adicionarRG(rg)
  cliente.adicionarTelefone(tel)
  clientes.push(cliente)
})

// Produtos reais para estética/barbearia
const nomesProdutosWB = [
  ["Shampoo Antiqueda", 35],
  ["Condicionador Hidratante", 30],
  ["Máscara Capilar", 45],
  ["Óleo de Argan", 50],
  ["Creme para Pentear", 25],
  ["Gel Fixador", 20],
  ["Pomada para Cabelo", 28],
  ["Cera Modeladora", 22],
  ["Tônico Capilar", 40],
  ["Creme para Barba", 27],
  ["Espuma de Barbear", 18],
  ["Balm Pós-Barba", 24],
  ["Sabonete Facial", 15],
  ["Esfoliante Facial", 33],
  ["Protetor Solar Facial", 60],
  ["Hidratante Corporal", 38],
  ["Perfume Masculino", 70],
  ["Perfume Feminino", 75],
  ["Removedor de Maquiagem", 20],
  ["Sérum Facial", 55]
]

nomesProdutosWB.forEach(([nome, preco]) => {
  produtos.push(new Produto(nome as string, preco as number))
})

// Serviços reais oferecidos pelo Grupo WB
const nomesServicosWB = [
  ["Manicure", 40],
  ["Pedicure", 45],
  ["Design de sobrancelhas", 50],
  ["Corte feminino", 60],
  ["Pintura de cabelo", 100],
  ["Remoção de rugas", 200],
  ["Remoção de manchas", 180],
  ["Aplicação de Botox", 300],
  ["Tratamento para emagrecimento", 250],
  ["Redução de medidas", 230],
  ["Corte masculino", 50],
  ["Modelagem de barba", 35],
  ["Tratamento antiqueda", 120],
  ["Hidratação capilar", 70],
  ["Depilação a laser", 150],
  ["Massagem relaxante", 90],
  ["Peeling facial", 110],
  ["Limpeza de pele", 85],
  ["Maquiagem profissional", 95],
  ["Escova progressiva", 140]
]

nomesServicosWB.forEach(([nome, preco]) => {
  servicos.push(new Servico(nome as string, preco as number))
})

// Associação aleatória de produtos e serviços a cada cliente
clientes.forEach(cliente => {
  const qtdProdutos = Math.floor(Math.random() * 5) + 1
  const qtdServicos = Math.floor(Math.random() * 5) + 1

  for (let i = 0; i < qtdProdutos; i++) {
    const p = produtos[Math.floor(Math.random() * produtos.length)]
    cliente.adicionarProduto(p)
  }

  for (let i = 0; i < qtdServicos; i++) {
    const s = servicos[Math.floor(Math.random() * servicos.length)]
    cliente.adicionarServico(s)
  }
})

export { clientes, produtos, servicos }
