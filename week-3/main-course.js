'use-strict'
import { Product } from "./product.js";
//exporting our maincourse class through the product
export class MainCourse extends Product {
    constructor(name, price){
        super(name, price);
    }
}