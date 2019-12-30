import Drive from './interfaces/drive';
export declare class Car implements Drive {
    _engine: string;
    protected name: string;
    private age;
    constructor(_engine: string, name: string, age: number);
    get engine(): string;
    set engine(value: string);
    aFunction(aParam?: number, aOptionalParam?: number): number;
    klm(num: number): void;
}
