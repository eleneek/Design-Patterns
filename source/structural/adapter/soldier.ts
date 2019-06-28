import { SoldierInterface } from "./interfaces";
export class Soldier implements SoldierInterface {
    constructor(public level: number) {
        this.level = level;
    }
    public attack() {
        return this.level * 1;
    }
}
