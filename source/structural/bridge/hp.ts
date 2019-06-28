import { Printer } from "./index";
import { Ink } from "./ink";
import { PrinterInterface } from "./interfaces";

export class HPprinter extends Printer implements PrinterInterface {
    constructor(public ink: Ink) {
        super(ink);
    }

    public print() {
        return "Printer: HP, Ink: " + this.ink.get();
    }
}
