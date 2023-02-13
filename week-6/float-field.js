/*
=================================================================================================================
; Title: Assignment 6.2 Future Value Calculator
; Author: Shane Hingtgen
; Bellevue University
; Date: 02/10/23
; Description: We created a calculator that calculates a total with interest of years
; Work Cited:
    Web 330 HTML, CSS, and JavaScript Requirements
    Web 330 Assign 6
=================================================================================================================
*/

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
