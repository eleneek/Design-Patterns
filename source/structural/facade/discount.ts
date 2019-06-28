import { DiscountInterface } from "./interfaces";
export class Discount implements DiscountInterface {

    public calc(value: number) {
        return value * 0.9;
    }
}
