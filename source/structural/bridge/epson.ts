import { Ink } from "./classes";
import {Printer} from "./index";
import { PrinterInterface } from "./interfaces";

export class EpsonPrinter extends Printer implements PrinterInterface {
    constructor(public ink: Ink) {
        super(ink);
    }

    public print() {
        return "Printer: Epson, Ink: " + this.ink.get();
    }
}
