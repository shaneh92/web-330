'use-strict'
import { Product } from "./product.js";
//exporting our appetizer class through product
export class Appetizer extends Product {
    constructor(name, price){
        super(name, price);
    }
}