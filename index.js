"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car/car");
var info = console.info;
var car = new car_1.Car("a engine name", "Stivenson", 29);
car.engine = "other engine name";
info("Car: " + car.engine);
info("a Car Function: " + car.aFunction(2, 4));
