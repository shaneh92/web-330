"use-strict";
export class FloatMaxField {
  constructor(name, field, max) {
    this.name = name;
    this.field = field;
    this.max = max;
  }

  validate() {
    let value = parseFloat(this.field);
    if (value < this.max) {
      return true;
    } else {
      return false;
    }
  }

  // needs work, what is the max parameter???
  // validate() {
  //   if (!isNaN(field)) {
  //     if (this.field < this.max) {
  //       return parseFloat(field);
  //     }
  //   } else {
  //     return false;
  //   }
  // }

  getMessage() {
    return `${this.name} must be less than ${this.max}. You entered ${this.field}`;
  }
}
