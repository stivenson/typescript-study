export class Car {

    constructor(
        public _engine: string,
        protected name: string,
        private age: number
        ) {
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
}
