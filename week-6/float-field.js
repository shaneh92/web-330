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

  // validate() {
  //   if (isNaN(this.field) === true) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // validate() {
  //   if (isNaN(this.field) === true) {
  //     if (value > this.min) {
  //       return false;
  //     }
  //   } else {
  //     return true;
  //   }
  // }
  //   Needs work,
  // validate() {
  //   if (!isNaN(value)) {
  //     return parseFloat(value);
  //   } else {
  //     return false;
  //   }
  // }
  // validate() {
  //   if (parseFloat(value) === true) {
  //     return true;
  //   } else if (parseFloat(value) === false) {
  //   }
  // }

  getMessage() {
    return "<name> must be a float value. You entered <field>";
  }
}
