"use-strict";
export class FloatMaxField {
  constructor(name, field, max) {
    this.name = name;
    this.field = field;
    this.max = max;
  }
  // needs work, what is the max parameter???
  validate() {
    if (!isNaN(field)) {
      if (this.field < this.max) {
        return parseFloat(field);
      }
    } else {
      return false;
    }
  }

  getMessage() {
    return "<name> must be less than <max>. You entered <field>";
  }
}
