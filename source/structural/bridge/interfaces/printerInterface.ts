import { Ink } from "../classes";

export interface PrinterInterface {
    ink: Ink;
    print: () => string;
}
