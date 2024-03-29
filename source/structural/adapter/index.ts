import { AdapterInterface } from "./interfaces";
import { Jedi } from "./jedi";
import {Soldier} from "./soldier";

class JediAdapter implements AdapterInterface {
    constructor(public jedi: Jedi) {
        this.jedi = jedi;
    }
    public attack() {
        return this.jedi.attackWithSaber();
    }
}

export {
    Soldier,
    Jedi,
    JediAdapter,
};
