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
var Servico_1 = __importDefault(require("../models/Servico"));
var CadastroServico = /** @class */ (function (_super) {
    __extends(CadastroServico, _super);
    function CadastroServico(empresa) {
        var _this = _super.call(this) || this;
        _this.empresa = empresa;
        _this.entrada = new Entrada_1.default();
        return _this;
    }
    CadastroServico.prototype.cadastrar = function () {
        console.log("\nCadastro de Serviço:");
        var nome = this.entrada.receberTexto("Nome do serviço: ");
        var preco = this.entrada.receberNumero("Preço do serviço: ");
        var servico = new Servico_1.default(nome, preco);
        this.empresa.adicionarServico(servico);
        console.log("Serviço cadastrado com sucesso!\n");
    };
    return CadastroServico;
}(Cadastro_1.default));
exports.default = CadastroServico;
