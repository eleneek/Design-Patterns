import { Droid, droidKind } from "./interfaces";
import {Rx24} from "./rx24";

function droidProducer(kind: droidKind): () => Droid {
    if (kind === "battle") {
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

function battleDroidFactory(): Droid {
    return new B1();
}

function pilotDroidFactory(): Droid {
    return new Rx24();
}

class B1 implements Droid {
    public info() {
        return "B1, Battle Droid";
    }
}
export default droidProducer;
