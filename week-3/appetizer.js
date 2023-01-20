/*
=================================================================================================================
; Title: Assignment 3.2 Restaurant App
; Author: Shane Hingtgen
; Bellevue University
; Date: 01/20/23
; Description: In this assignment we create an app to order food for a restaurant. Using classes, object methods, and multiple exports of different .js files
; Work Cited:
    Web 330 HTML, CSS, and JavaScript Requirements
    Web 300 Assign 3
    W3 Schools: https://www.w3schools.com/js/js_object_methods.asp
    W3 Schools: https://www.w3schools.com/css/css_grid.asp
    W3 Schools: https://www.w3schools.com/js/js_object_properties.asp
    W3 Schools: https://www.w3schools.com/js/js_object_constructors.asp
    W3 Schools: https://www.w3schools.com/js/js_objects.asp
    W3 Schools: https://www.w3schools.com/jsref/jsref_foreach.asp
    mdn web docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
=================================================================================================================
*/
'use-strict'
import { Product } from "./product.js";
//exporting our appetizer class through product
export class Appetizer extends Product {
    constructor(name, price){
        super(name, price);
    }
}