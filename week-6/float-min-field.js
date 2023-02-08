"use-strict";
export class FloatMinField {
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }

  validate() {
    if (!isNaN(field)) {
      if (this.field > this.min) {
        return parseFloat(value);
      }
    } else {
      return false;
    }
  }

  getMessage() {
    return "<name> must be more than <min>. You entered <field>";
  }
}
