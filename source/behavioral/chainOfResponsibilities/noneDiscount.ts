import { MainChain } from "./interfaces";

export class NoneDiscount implements MainChain {
    public next: null | MainChain;
    public exec() {
        return 0;
    }
}
