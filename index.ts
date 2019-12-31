import { Mcar } from './car';
const { info } = console;

const car = new Mcar.Car("a engine name", 29);

car.engine = "other engine name";

info(`Car: ${car.engine}`);
info("a Car Function: " + car.aFunction(2, 4));
info("a Car Interface: " + car.klm(2));
