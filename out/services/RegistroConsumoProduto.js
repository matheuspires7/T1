"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Entrada_1 = __importDefault(require("./Entrada"));
var RegistroConsumoProduto = /** @class */ (function () {
    function RegistroConsumoProduto(empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada_1.default();
    }
    RegistroConsumoProduto.prototype.registrar = function () {
        console.log("\nRegistro de consumo de produto:");
        var nomeCliente = this.entrada.receberTexto("Nome do cliente: ");
        var cliente = this.empresa.getClientes().find(function (c) { return c.getNome() === nomeCliente; });
        if (!cliente) {
            console.log("Cliente não encontrado.");
            return;
        }
        var produtos = this.empresa.getProdutos();
        produtos.forEach(function (p, i) {
            console.log("".concat(i + 1, " - ").concat(p.getNome(), " (R$ ").concat(p.getPreco(), ")"));
        });
        var opcao = this.entrada.receberNumero("Escolha o produto (número): ");
        var produtoSelecionado = produtos[opcao - 1];
        if (produtoSelecionado) {
            cliente.adicionarProduto(produtoSelecionado);
            console.log("Produto registrado com sucesso!");
        }
        else {
            console.log("Produto inválido.");
        }
    };
    return RegistroConsumoProduto;
}());
exports.default = RegistroConsumoProduto;
