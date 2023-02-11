"use-strict";
export class FloatMaxField {
  constructor(name, field, max) {
    this.name = name;
    this.field = field;
    this.max = max;
  }

  //checks if the parameters are correct
  validate() {
    let value = parseFloat(this.field);
    if (value < this.max) {
      //if the value is bigger than max it will throw a message based on boolean values
      return true;
    } else {
      return false;
    }
  }

  // structures the message
  getMessage() {
    return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
  }
}
