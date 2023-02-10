"use-strict";

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
