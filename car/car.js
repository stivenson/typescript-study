"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(_engine, name, age) {
        this._engine = _engine;
        this.name = name;
        this.age = age;
        this.engine = _engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.aFunction = function (aParam, aOptionalParam) {
        if (aParam === void 0) { aParam = 2; }
        return aParam * aOptionalParam;
    };
    return Car;
}());
exports.Car = Car;
