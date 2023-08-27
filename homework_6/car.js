class Car {
  #brand = '';
  #model = '';
  #yearOfManufacturing = null;
  #maxSpeed = null;
  #maxFuelVolume = null;
  #fuelConsumption = null;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  set brand(brandName) {
    this.checkForType(brandName, 'string');
    this.checkForRange(brandName.length, 0, 50);

    this.#brand = brandName;
  }

  get brand() {
    return this.#brand;
  }

  set model(modelName) {
    this.checkForType(modelName, 'string');
    this.checkForRange(modelName.length, 0, 50);

    this.#model = modelName;
  }

  get model() {
    return this.#model;
  }

  set yearOfManufacturing(year) {
    this.checkForType(year, 'number');
    this.checkForRange(year, 1900, new Date().getFullYear());

    this.#yearOfManufacturing = year;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set maxSpeed(speed) {
    this.checkForType(speed, 'number');
    this.checkForRange(speed, 100, 300);

    this.#maxSpeed = speed;
  }

  get maxSpeed() {
    return `${this.#maxSpeed} km/h`;
  }

  set maxFuelVolume(maxFuel) {
    this.checkForType(maxFuel, 'number');
    this.checkForRange(maxFuel, 5, 20);

    this.#maxFuelVolume = maxFuel;
  }

  get maxFuelVolume() {
    return `${this.#maxFuelVolume} l`;
  }

  set fuelConsumption(fuelValue) {
    this.checkForType(fuelValue, 'number');
    this.checkForRange(fuelValue, 0, null);

    this.#fuelConsumption = fuelValue;
  }

  get fuelConsumption() {
    return `${this.#fuelConsumption} l/100km`;
  }

  get currentFuelVolume() {
    return `${this.#currentFuelVolume} l`;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return `${this.#mileage} km`;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('The car is already running!');
    }

    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('The car is not running yet!');
    }

    this.#isStarted = false;
  }

  fillUpGasTank(fuelQuantity) {
    this.checkForType(fuelQuantity, 'number');

    if (fuelQuantity <= 0) {
      throw new Error('Incorrect fuel amount to refuel!');
    }

    if (this.#currentFuelVolume + fuelQuantity > this.#maxFuelVolume) {
      throw new Error('Fuel tank is full!');
    }

    this.#currentFuelVolume = this.#currentFuelVolume + fuelQuantity;
  }

  drive(speed, hours) {
    this.checkForType(speed, 'number');
    this.checkForType(hours, 'number');

    if (speed <= 0) {
      throw new Error('Wrong speed value!');
    }

    if (hours <= 0) {
      throw new Error('Wrong number of hours!');
    }

    if (speed > this.#maxSpeed) {
      throw new Error('The car can not drive so fast!');
    }

    if (!this.#isStarted) {
      throw new Error('The car must be running to drive!');
    }

    const distance = speed * hours;
    const fuelNeeded = distance * this.#fuelConsumption / 100;

    if (this.#currentFuelVolume < fuelNeeded) {
      throw new Error('The fuel is not enough!');
    }

    this.#mileage = this.#mileage + distance;
    this.#currentFuelVolume = this.#currentFuelVolume - fuelNeeded;
  }

  checkForType(value, type) {
    if (typeof value !== type) {
      throw new Error('Incorrect type!');
    }

    if (type === 'number') {
      if (isNaN(value) || !Number.isFinite(value)) {
        throw new Error('Incorrect type!');
      }
    }
  }

  checkForRange(value, min, max) {
    if (min && value < min) {
      throw new Error('Value is too small!');
    }

    if (max && value > max) {
      throw new Error('Value is too big!');
    }
  }
}

module.exports = { Car };
