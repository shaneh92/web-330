'use-strict'
import { Product } from "./product.js";
//exporting our beverage class through product
export class Beverage extends Product {
    constructor(name, price){
        super(name, price)
    }
}
