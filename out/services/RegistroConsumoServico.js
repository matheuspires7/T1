"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Entrada_1 = __importDefault(require("./Entrada"));
var RegistroConsumoServico = /** @class */ (function () {
    function RegistroConsumoServico(empresa) {
        this.empresa = empresa;
        this.entrada = new Entrada_1.default();
    }
    RegistroConsumoServico.prototype.registrar = function () {
        console.log("\nRegistro de consumo de serviço:");
        var nomeCliente = this.entrada.receberTexto("Nome do cliente: ");
        var cliente = this.empresa.getClientes().find(function (c) { return c.getNome() === nomeCliente; });
        if (!cliente) {
            console.log("Cliente não encontrado.");
            return;
        }
        var servicos = this.empresa.getServicos();
        servicos.forEach(function (s, i) {
            console.log("".concat(i + 1, " - ").concat(s.getNome(), " (R$ ").concat(s.getPreco(), ")"));
        });
        var opcao = this.entrada.receberNumero("Escolha o serviço (número): ");
        var servicoSelecionado = servicos[opcao - 1];
        if (servicoSelecionado) {
            cliente.adicionarServico(servicoSelecionado);
            console.log("Serviço registrado com sucesso!");
        }
        else {
            console.log("Serviço inválido.");
        }
    };
    return RegistroConsumoServico;
}());
exports.default = RegistroConsumoServico;
