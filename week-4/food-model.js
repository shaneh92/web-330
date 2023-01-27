/*
=================================================================================================================
; Title: Assignment 4.2 Calorie app
; Author: Shane Hingtgen
; Bellevue University
; Date: 01/26/23
; Description: In this assignment we create an app that shows the a table that has the input of the food name and calories, with a keyup function
; Work Cited:
    Web 330 HTML, CSS, and JavaScript Requirements
    Web 330 Assign 4
    W3 Schools: https://www.w3schools.com/js/js_object_methods.asp
    W3 Schools: https://www.w3schools.com/js/js_object_properties.asp
    W3 Schools: https://www.w3schools.com/js/js_object_constructors.asp
    W3 Schools: https://www.w3schools.com/js/js_objects.asp
    W3 Schools: https://www.w3schools.com/jsref/jsref_tolowercase.asp
    W3 Schools: https://www.w3schools.com/jsref/jsref_filter.asp
    mdn web docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    mdn web docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
    mdn web docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
    mdn web docs: https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
    mdn web docs: https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event
=================================================================================================================
*/
"use-strict";
//exporting our FoodModel class
export class FoodModel {
  constructor(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
}
