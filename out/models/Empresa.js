"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Empresa = /** @class */ (function () {
    function Empresa() {
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];
    }
    // CLIENTES
    Empresa.prototype.getClientes = function () {
        return this.clientes;
    };
    Empresa.prototype.adicionarCliente = function (cliente) {
        this.clientes.push(cliente);
    };
    Empresa.prototype.removerCliente = function (nome) {
        this.clientes = this.clientes.filter(function (c) { return c.getNome() !== nome; });
    };
    // PRODUTOS
    Empresa.prototype.getProdutos = function () {
        return this.produtos;
    };
    Empresa.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
    };
    // SERVIÇOS
    Empresa.prototype.getServicos = function () {
        return this.servicos;
    };
    Empresa.prototype.adicionarServico = function (servico) {
        this.servicos.push(servico);
    };
    return Empresa;
}());
exports.default = Empresa;
