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

import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator {
  validators = [];
  messages = [];

  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
  }

  addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
  }

  addFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
  }

  addFloatMaxField(max) {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
  }

  //allows a message to be pushed if its not within parameters of min/max
  validate() {
    for (let i of this.validators) {
      if (i.validate() === false) {
        this.messages.push(i.getMessage());
        return false;
      }
    }
    return true;
  }
}
