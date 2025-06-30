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
var Cliente_1 = __importDefault(require("../models/Cliente"));
var CPF_1 = __importDefault(require("../models/CPF"));
var Entrada_1 = __importDefault(require("../services/Entrada"));
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(empresa) {
        var _this = _super.call(this) || this;
        _this.empresa = empresa;
        _this.entrada = new Entrada_1.default();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        console.log("\nCadastro de novo cliente:");
        var nome = this.entrada.receberTexto("Nome: ");
        var nomeSocial = this.entrada.receberTexto("Nome social: ");
        var genero = this.entrada.receberTexto("Gênero (M/F/O): ");
        var valorCpf = this.entrada.receberTexto("CPF: ");
        var dataCpf = this.entrada.receberTexto("Data de emissão do CPF (yyyy-mm-dd): ");
        var partesData = dataCpf.split("-");
        var dataEmissao = new Date(parseInt(partesData[0]), parseInt(partesData[1]) - 1, parseInt(partesData[2]));
        var cpf = new CPF_1.default(valorCpf, dataEmissao);
        var cliente = new Cliente_1.default(nome, nomeSocial, genero, cpf);
        this.empresa.adicionarCliente(cliente);
        console.log("Cliente cadastrado com sucesso!\n");
    };
    return CadastroCliente;
}(Cadastro_1.default));
exports.default = CadastroCliente;
