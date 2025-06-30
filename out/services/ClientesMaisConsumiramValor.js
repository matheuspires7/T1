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
var ClientesMaisConsumiramValor = /** @class */ (function (_super) {
    __extends(ClientesMaisConsumiramValor, _super);
    function ClientesMaisConsumiramValor(empresa) {
        var _this = _super.call(this) || this;
        _this.empresa = empresa;
        return _this;
    }
    ClientesMaisConsumiramValor.prototype.listar = function () {
        var clientes = this.empresa.getClientes();
        var clientesOrdenados = clientes
            .map(function (cliente) { return ({
            cliente: cliente,
            totalValor: cliente.getValorTotalConsumido()
        }); })
            .sort(function (a, b) { return b.totalValor - a.totalValor; }) // decrescente
            .slice(0, 5);
        console.log("\nTop 5 clientes que mais consumiram (em valor):");
        clientesOrdenados.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item.cliente.getNome(), " - R$ ").concat(item.totalValor.toFixed(2)));
        });
    };
    return ClientesMaisConsumiramValor;
}(Listagem_1.default));
exports.default = ClientesMaisConsumiramValor;
