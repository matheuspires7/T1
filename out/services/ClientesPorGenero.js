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
var ClientesPorGenero = /** @class */ (function (_super) {
    __extends(ClientesPorGenero, _super);
    function ClientesPorGenero(empresa) {
        var _this = _super.call(this) || this;
        _this.empresa = empresa;
        return _this;
    }
    ClientesPorGenero.prototype.listar = function () {
        var clientes = this.empresa.getClientes();
        var generos = ["F", "M", "O"];
        generos.forEach(function (genero) {
            console.log("\nClientes do g\u00EAnero ".concat(genero, ":"));
            var filtrados = clientes.filter(function (c) { return c.getGenero().toUpperCase() === genero; });
            if (filtrados.length === 0) {
                console.log("  Nenhum cliente encontrado.");
            }
            else {
                filtrados.forEach(function (cliente, i) {
                    console.log("  ".concat(i + 1, ". ").concat(cliente.getNome()));
                });
            }
        });
    };
    return ClientesPorGenero;
}(Listagem_1.default));
exports.default = ClientesPorGenero;
