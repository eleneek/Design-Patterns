import {
    AcrylicInk,
    AlcoholInk,
    EpsonPrinter,
    HPprinter,
    Ink,
} from "./classes";

export abstract class Printer {
    constructor(public ink: Ink) {
        this.ink = ink;
    }
}

export {
    EpsonPrinter,
    HPprinter,
    AcrylicInk,
    AlcoholInk,
};
