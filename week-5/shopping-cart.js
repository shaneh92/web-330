/*
=================================================================================================================
; Title: Assignment 5.2 Bobs Automotive Repair Shop
; Author: Shane Hingtgen
; Bellevue University
; Date: 02/1/23
; Description: In this assignment we create an app that uses generators and iterators, using the data from a selection form to populate a shopping cart and display the total items, click on the cart to display a table of items
; Work Cited:
    Web 330 HTML, CSS, and JavaScript Requirements
    Web 330 Assign 5
    Web 330 GitHub https://github.com/buwebdev/web-330
    MDN web docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
    Digital Ocean https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript
=================================================================================================================
*/

"use-strict";
export class ShoppingCart {
  constructor() {
    this.products = [];
  }

  //counts how many in the array
  count() {
    return this.products.length;
  }

  //generator method
  add(product) {
    this.products.push(product);
  }
  *[Symbol.iterator]() {
    for (let product of this.products) {
      yield product;
    }
  }
}
