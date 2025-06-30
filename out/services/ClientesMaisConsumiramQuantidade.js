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
var ClientesMaisConsumiramQuantidade = /** @class */ (function (_super) {
    __extends(ClientesMaisConsumiramQuantidade, _super);
    function ClientesMaisConsumiramQuantidade(empresa) {
        var _this = _super.call(this) || this;
        _this.empresa = empresa;
        return _this;
    }
    ClientesMaisConsumiramQuantidade.prototype.listar = function () {
        var clientes = this.empresa.getClientes();
        var clientesOrdenados = clientes
            .map(function (cliente) { return ({
            cliente: cliente,
            total: cliente.getProdutos().length + cliente.getServicos().length
        }); })
            .sort(function (a, b) { return b.total - a.total; }) // decrescente
            .slice(0, 10);
        console.log("\nTop 10 clientes que mais consumiram (quantidade):");
        clientesOrdenados.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item.cliente.getNome(), " - ").concat(item.total, " itens"));
        });
    };
    return ClientesMaisConsumiramQuantidade;
}(Listagem_1.default));
exports.default = ClientesMaisConsumiramQuantidade;
