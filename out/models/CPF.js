"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CPF = /** @class */ (function () {
    function CPF(valor, dataEmissao) {
        this.valor = valor;
        this.dataEmissao = dataEmissao;
    }
    CPF.prototype.getValor = function () {
        return this.valor;
    };
    CPF.prototype.getDataEmissao = function () {
        return this.dataEmissao;
    };
    return CPF;
}());
exports.default = CPF;
