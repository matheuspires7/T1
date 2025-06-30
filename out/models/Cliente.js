"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, nomeSocial, genero, cpf) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.genero = genero;
        this.cpf = cpf;
        this.rgs = [];
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
        this.dataCadastro = new Date();
    }
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.getGenero = function () {
        return this.genero;
    };
    Cliente.prototype.getCPF = function () {
        return this.cpf;
    };
    Cliente.prototype.getDataCadastro = function () {
        return this.dataCadastro;
    };
    Cliente.prototype.getRgs = function () {
        return this.rgs;
    };
    Cliente.prototype.getTelefones = function () {
        return this.telefones;
    };
    Cliente.prototype.getProdutos = function () {
        return this.produtosConsumidos;
    };
    Cliente.prototype.getServicos = function () {
        return this.servicosConsumidos;
    };
    Cliente.prototype.adicionarRG = function (rg) {
        this.rgs.push(rg);
    };
    Cliente.prototype.adicionarTelefone = function (telefone) {
        this.telefones.push(telefone);
    };
    Cliente.prototype.adicionarProduto = function (produto) {
        this.produtosConsumidos.push(produto);
    };
    Cliente.prototype.adicionarServico = function (servico) {
        this.servicosConsumidos.push(servico);
    };
    Cliente.prototype.getTotalConsumido = function () {
        var totalProdutos = this.produtosConsumidos.length;
        var totalServicos = this.servicosConsumidos.length;
        return totalProdutos + totalServicos;
    };
    Cliente.prototype.getValorTotalConsumido = function () {
        var totalProdutos = this.produtosConsumidos.reduce(function (acc, p) { return acc + p.getPreco(); }, 0);
        var totalServicos = this.servicosConsumidos.reduce(function (acc, s) { return acc + s.getPreco(); }, 0);
        return totalProdutos + totalServicos;
    };
    return Cliente;
}());
exports.default = Cliente;
