"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Entrada_1 = __importDefault(require("../services/Entrada"));
var Empresa_1 = __importDefault(require("../models/Empresa"));
var dados_1 = require("./dados");
var CadastroCliente_1 = __importDefault(require("../services/CadastroCliente"));
var CadastroProduto_1 = __importDefault(require("../services/CadastroProduto"));
var CadastroServico_1 = __importDefault(require("../services/CadastroServico"));
var RegistroConsumoProduto_1 = __importDefault(require("../services/RegistroConsumoProduto"));
var RegistroConsumoServico_1 = __importDefault(require("../services/RegistroConsumoServico"));
var ClientesMaisConsumiramQuantidade_1 = __importDefault(require("../services/ClientesMaisConsumiramQuantidade"));
var ClientesMenosConsumiramQuantidade_1 = __importDefault(require("../services/ClientesMenosConsumiramQuantidade"));
var ClientesMaisConsumiramValor_1 = __importDefault(require("../services/ClientesMaisConsumiramValor"));
var ClientesPorGenero_1 = __importDefault(require("../services/ClientesPorGenero"));
var ProdutosMaisConsumidos_1 = __importDefault(require("../services/ProdutosMaisConsumidos"));
var ProdutosMaisConsumidosPorGenero_1 = __importDefault(require("../services/ProdutosMaisConsumidosPorGenero"));
var empresa = new Empresa_1.default();
var entrada = new Entrada_1.default();
dados_1.clientes.forEach(function (c) { return empresa.adicionarCliente(c); });
dados_1.produtos.forEach(function (p) { return empresa.adicionarProduto(p); });
dados_1.servicos.forEach(function (s) { return empresa.adicionarServico(s); });
var execucao = true;
while (execucao) {
    console.log("\n=== Sistema WB ===");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Cadastrar produto");
    console.log("3 - Cadastrar servi\u00E7o");
    console.log("4 - Registrar consumo de produto");
    console.log("5 - Registrar consumo de servi\u00E7o");
    console.log("6 - Listar 10 clientes que mais consumiram (quantidade)");
    console.log("7 - Listar clientes por g\u00EAnero");
    console.log("8 - Listar produtos/servi\u00E7os mais consumidos");
    console.log("9 - Listar produtos/servi\u00E7os mais consumidos por g\u00EAnero");
    console.log("10 - Listar 10 clientes que menos consumiram (quantidade)");
    console.log("11 - Listar 5 clientes que mais consumiram em valor");
    console.log("0 - Sair");
    var opcao = entrada.receberNumero("\nEscolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            new CadastroCliente_1.default(empresa).cadastrar();
            break;
        case 2:
            new CadastroProduto_1.default(empresa).cadastrar();
            break;
        case 3:
            new CadastroServico_1.default(empresa).cadastrar();
            break;
        case 4:
            new RegistroConsumoProduto_1.default(empresa).registrar();
            break;
        case 5:
            new RegistroConsumoServico_1.default(empresa).registrar();
            break;
        case 6:
            new ClientesMaisConsumiramQuantidade_1.default(empresa).listar();
            break;
        case 7:
            new ClientesPorGenero_1.default(empresa).listar();
            break;
        case 8:
            new ProdutosMaisConsumidos_1.default(empresa).listar();
            break;
        case 9:
            new ProdutosMaisConsumidosPorGenero_1.default(empresa).listar();
            break;
        case 10:
            new ClientesMenosConsumiramQuantidade_1.default(empresa).listar();
            break;
        case 11:
            new ClientesMaisConsumiramValor_1.default(empresa).listar();
            break;
        case 0:
            execucao = false;
            console.log("Saindo do sistema. Até mais!");
            break;
        default:
            console.log("Opção inválida.");
    }
}
