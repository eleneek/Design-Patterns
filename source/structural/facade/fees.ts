import { FeesInterface } from "./interfaces";
export class Fees implements FeesInterface {
    public calc(value: number) {
        return value * 1.05;
    }
}
