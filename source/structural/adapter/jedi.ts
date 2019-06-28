import { JediInterface } from "./interfaces";
export class Jedi implements JediInterface {
    constructor(public level: number) {
        this.level = level;
    }

    public attackWithSaber() {
        return this.level * 100;
    }
}
