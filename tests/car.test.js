const { Mcar } = require("../car");

test('Car Module - klm', () => {
    const objCar = new Mcar.Car("a test engine", 29);
    const klm = objCar.klm(80);
    expect(klm).toBe(80);
});

test('Car Module - name', () => {
    const objCar = new Mcar.Car("a test engine", 29);
    objCar._age = 15;
    expect(objCar._age).toBe(15);
});