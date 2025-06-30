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
var Cadastro_1 = __importDefault(require("./Cadastro"));
var Entrada_1 = __importDefault(require("./Entrada"));
var Produto_1 = __importDefault(require("../models/Produto"));
var CadastroProduto = /** @class */ (function (_super) {
    __extends(CadastroProduto, _super);
    function CadastroProduto(empresa) {
        var _this = _super.call(this) || this;
        _this.empresa = empresa;
        _this.entrada = new Entrada_1.default();
        return _this;
    }
    CadastroProduto.prototype.cadastrar = function () {
        console.log("\nCadastro de Produto:");
        var nome = this.entrada.receberTexto("Nome do produto: ");
        var preco = this.entrada.receberNumero("Preço do produto: ");
        var produto = new Produto_1.default(nome, preco);
        this.empresa.adicionarProduto(produto);
        console.log("Produto cadastrado com sucesso!\n");
    };
    return CadastroProduto;
}(Cadastro_1.default));
exports.default = CadastroProduto;
