"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Telefone = /** @class */ (function () {
    function Telefone(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    Telefone.prototype.getNumero = function () {
        return "(".concat(this.ddd, ") ").concat(this.numero);
    };
    Telefone.prototype.getDDD = function () {
        return this.ddd;
    };
    return Telefone;
}());
exports.default = Telefone;
