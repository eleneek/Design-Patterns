import { CheeseDecorator } from "./cheeseDecorator";
import { PastaInterface } from "./interfaces";
import { Penne } from "./penne";
import { SauceDecorator } from "./sauceDecorator";

export abstract class Pasta implements PastaInterface {
    public price: number;
    constructor() {
        this.price = 0;
    }
    public getPrice() {
        return this.price;
    }
}

export {
    Penne,
    SauceDecorator,
    CheeseDecorator,
};
