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

//allows us to calculate our values with interest over a length of time
export class FinanceCalculator {
  static MONTHS_IN_YEAR = 12;
  static calculateFutureValue(monthlyPayment, rate, years) {
    let month = years * this.MONTHS_IN_YEAR;
    let interestRate = 1 + rate / 100;
    let presentValue = monthlyPayment * month;
    //prettier-ignore
    let futureValue = presentValue * (Math.pow(interestRate, month));
    return futureValue.toPrecision(15);
  }
  static convertToCurrency(field) {
    let currencyFormatter = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    });
    return currencyFormatter.format(field);
  }
}
