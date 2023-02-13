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

export class RequiredField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }
  validate() {
    return Boolean(this.field);
  }

  getMessage() {
    return `${this.name} is a required field.`;
  }
}
