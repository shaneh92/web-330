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

//exporting Bill class
export class Bill {
    _beverages = [];//Empty arrays to be assigned by below
    _appetizers = [];
    _mainCourses = [];
    _desserts = [];

    addBeverage(beverage) {
        this._beverages.push(beverage);//To be assigned to the correct array
    }
    
    addAppetizer(appetizer) {
        this._appetizers.push(appetizer);
    }
    
    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }
    
    addDessert(dessert) {
        this._desserts.push(dessert);
    }
    
    //the function will calculate the total
    getTotal() {
        let total = 0;
        let beverageTotal = this._beverages.forEach(function(beverage) {
            total += parseFloat(beverage.price);
        })
    
        let appetizerTotal = this._appetizers.forEach(function(appetizer) {
            total += parseFloat(appetizer.price);
        })
    
        let mainCourseTotal = this._mainCourses.forEach(function(mainCourse) {
            total += parseFloat(mainCourse.price);
        })
    
        let dessertTotal = this._desserts.forEach(function(dessert) {
            total += parseFloat(dessert.price);
        }) 
        return total
    }

}
