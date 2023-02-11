"use-strict";
export class FloatMinField {
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }

  //checks if the parameters are correct
  validate() {
    let value = parseFloat(this.field);
    if (value > this.min) {
      return true;
    } else {
      return false;
    }
  }

  // structures the message
  getMessage() {
    return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
  }
}
