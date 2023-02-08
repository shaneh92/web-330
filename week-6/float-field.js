"use-strict";

export class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  //   Needs work,
  validate() {
    if (!isNaN(value)) {
      return parseFloat(value);
    } else {
      return false;
    }
  }
  //   validate() {
  //     if (parseFloat(value) === true) {
  //       return true;
  //     } else if (parseFloat(value) === false) {
  //     }
  //   }

  getMessage() {
    return "<name> must be a float value. You entered <field>";
  }
}
