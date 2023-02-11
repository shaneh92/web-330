"use-strict";

export class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  validate() {
    // if not NaN return true, else return false
    if (!Number.isNaN(parseFloat(this.field))) {
      return true;
    } else {
      return false;
    }
  }

  //structures the message
  getMessage() {
    return `${this.name} must be a float value. You entered ${this.field}`;
  }
}
