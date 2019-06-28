import { MainChain } from "./interfaces";
export class PriceDiscount implements MainChain {
    public next: null | MainChain;
    constructor() {
        this.next = null;
    }

    public setNext(fn: MainChain) {
        this.next = fn;
    }

    public exec(products: number[]) {
        let result = 0;
        const total = products.reduce((a, b) => a + b);

        if (total >= 500)  {
            result = 0.1;
        }

        if (this.next) {
            return result + this.next.exec(products);
        } else {
            return 0;
        }
    }
}
