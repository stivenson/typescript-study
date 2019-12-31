import Drive from './interfaces/drive';
import Conssecionaire from './interfaces-generic/conssecionarie';
import Chevrolet from './chevrolet';
import Vehicle from './interfaces-generic/vehicle';
const { log } = console;

export module Mcar {
    
    export class Car extends Vehicle implements Drive, Conssecionaire<Chevrolet> {
    
        constructor(
            public _engine: string,
            private age: number
            ) {
            super();
            this.engine = _engine;
        }
    
        get engine() {
            return this._engine;
        }
    
        set engine(value: string) {
            this._engine = value;
        }
    
        aFunction(aParam: number = 2, aOptionalParam?: number): number {
            return aParam * aOptionalParam;
        }
    
        klm(num: number): number {
            log(`Num from interface: ${num}`);
            return num;
        }
    }

}
