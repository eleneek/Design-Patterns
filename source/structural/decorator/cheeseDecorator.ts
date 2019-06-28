import { Pasta } from "./index";
import { PastaDecorator } from "./pastaDecorator";

export class CheeseDecorator extends PastaDecorator {
    constructor(public pasta: Pasta) {
        super(pasta);
    }

    public getPrice() {
        return super.getPrice() + 3;
    }
}
