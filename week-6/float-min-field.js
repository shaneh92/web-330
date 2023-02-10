"use-strict";
export class FloatMinField {
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }

  validate() {
    let value = parseFloat(this.field);
    if (value > this.min) {
      return true;
    } else {
      return false;
    }
  }

  // validate() {
  //   if (!isNaN(field)) {
  //     if (this.field > this.min) {
  //       return parseFloat(value);
  //     }
  //   } else {
  //     return false;
  //   }
  // }

  getMessage() {
    return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
  }
}
