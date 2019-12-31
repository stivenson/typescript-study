import Drive from './interfaces/drive';
import Conssecionaire from './interfaces-generic/conssecionarie';
import Chevrolet from './chevrolet';
import Vehicle from './interfaces-generic/vehicle';
export declare module Mcar {
    class Car extends Vehicle implements Drive, Conssecionaire<Chevrolet> {
        _engine: string;
        private age;
        constructor(_engine: string, age: number);
        get engine(): string;
        set engine(value: string);
        aFunction(aParam?: number, aOptionalParam?: number): number;
        klm(num: number): number;
    }
}
