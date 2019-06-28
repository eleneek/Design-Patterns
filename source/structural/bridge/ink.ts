import { InkInterface } from "./interfaces";
export abstract class Ink implements InkInterface {
    constructor(public type: string) {
        this.type = type;
    }
    public get() {
        return this.type;
    }
}
