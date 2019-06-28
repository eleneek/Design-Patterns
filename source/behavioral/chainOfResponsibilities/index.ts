import {NoneDiscount, NumberDiscount, PriceDiscount } from "./classes";
import { ShoppingCart } from "./classes";
class Discount {

    public calc(products: number[]) {
        const ndiscount = new NumberDiscount();
        const pdiscount = new PriceDiscount();
        const none = new NoneDiscount();
        ndiscount.setNext(pdiscount);
        pdiscount.setNext(none);
        return ndiscount.exec(products);
    }
}

export {
    ShoppingCart,
    Discount,
};
