import { MainChain } from "./interfaces";
export class NumberDiscount implements MainChain {
    public next: null | MainChain;
    constructor() {
        this.next = null;
    }

    public setNext(fn: MainChain) {
        this.next = fn;
    }

    public exec(products: number[]) {
        let result = 0;
        if (products.length > 3) {
            result = 0.05;
        }
        if (this.next) {
            return result + this.next.exec(products);
        } else {
            return 0;
        }
    }
}
