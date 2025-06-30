"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Listagem_1 = __importDefault(require("./Listagem"));
var ProdutosMaisConsumidos = /** @class */ (function (_super) {
    __extends(ProdutosMaisConsumidos, _super);
    function ProdutosMaisConsumidos(empresa) {
        var _this = _super.call(this) || this;
        _this.empresa = empresa;
        return _this;
    }
    ProdutosMaisConsumidos.prototype.listar = function () {
        var mapaProdutos = new Map();
        var mapaServicos = new Map();
        this.empresa.getClientes().forEach(function (cliente) {
            cliente.getProdutos().forEach(function (produto) {
                var nome = produto.getNome();
                mapaProdutos.set(nome, (mapaProdutos.get(nome) || 0) + 1);
            });
            cliente.getServicos().forEach(function (servico) {
                var nome = servico.getNome();
                mapaServicos.set(nome, (mapaServicos.get(nome) || 0) + 1);
            });
        });
        var produtosOrdenados = Array.from(mapaProdutos.entries())
            .map(function (_a) {
            var nome = _a[0], quantidade = _a[1];
            return ({ nome: nome, quantidade: quantidade });
        })
            .sort(function (a, b) { return b.quantidade - a.quantidade; });
        var servicosOrdenados = Array.from(mapaServicos.entries())
            .map(function (_a) {
            var nome = _a[0], quantidade = _a[1];
            return ({ nome: nome, quantidade: quantidade });
        })
            .sort(function (a, b) { return b.quantidade - a.quantidade; });
        console.log("\nProdutos mais consumidos:");
        produtosOrdenados.forEach(function (p, i) {
            console.log("".concat(i + 1, ". ").concat(p.nome, " - ").concat(p.quantidade, "x"));
        });
        console.log("\nServiços mais consumidos:");
        servicosOrdenados.forEach(function (s, i) {
            console.log("".concat(i + 1, ". ").concat(s.nome, " - ").concat(s.quantidade, "x"));
        });
    };
    return ProdutosMaisConsumidos;
}(Listagem_1.default));
exports.default = ProdutosMaisConsumidos;
