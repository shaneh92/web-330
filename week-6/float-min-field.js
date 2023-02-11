/*
=================================================================================================================
; Title: Assignment 6.2 Future Value Calculator
; Author: Shane Hingtgen
; Bellevue University
; Date: 02/1/23
; Description: We created a calculator that calculates a total with interest of years
; Work Cited:
    Web 330 HTML, CSS, and JavaScript Requirements
    Web 330 Assign 6
=================================================================================================================
*/

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
