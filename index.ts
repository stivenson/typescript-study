import { Car } from './car/car';
const { info } = console;

const car = new Car("a engine name", "Stivenson", 29);

car.engine = "other engine name";

info(`Car: ${car.engine}`);
info("a Car Function: " + car.aFunction(2, 4));