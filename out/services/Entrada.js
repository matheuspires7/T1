"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var prompt = (0, prompt_sync_1.default)();
var Entrada = /** @class */ (function () {
    function Entrada() {
    }
    Entrada.prototype.receberNumero = function (mensagem) {
        var valor = prompt(mensagem);
        var numero = Number(valor);
        return numero;
    };
    Entrada.prototype.receberTexto = function (mensagem) {
        var texto = prompt(mensagem);
        return texto;
    };
    return Entrada;
}());
exports.default = Entrada;
