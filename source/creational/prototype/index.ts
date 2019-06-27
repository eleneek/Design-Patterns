import {CloneInterface, SheepInterface} from "./interfaces";

class Sheep implements CloneInterface<Sheep>, SheepInterface  {

    constructor(public name: string, public weight: number) {
    }

    public clone() {
        return new Sheep(this.name, this.weight);
    }
}

export default Sheep;
