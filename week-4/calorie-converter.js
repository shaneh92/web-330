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
import { FoodModel } from "./food-model.js"; //imports the class
export class CalorieConverter extends FoodModel {
  //exports the class through FoodModel class
  static data = [
    //the 6 objects from our table, id, name, calories constructor from FoodModel
    new FoodModel(1007, "Egg", 78),
    new FoodModel(1008, "Apple", 95),
    new FoodModel(1009, "Hamburger", 354),
    new FoodModel(1010, "Fries", 400),
    new FoodModel(1011, "Banana", 105),
    new FoodModel(1012, "Soda", 150),
  ];

  //method, finds the correct name
  static find(name) {
    return CalorieConverter.data.filter(
      (CalorieConverter) => CalorieConverter.name.includes(name) //fixed to includes instead of ===
    );
  }
}
