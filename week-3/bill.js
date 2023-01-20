// 'use-strict'

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
