import { Pasta } from "./index";

export abstract class PastaDecorator extends Pasta {
    constructor(public pasta: Pasta) {
        super();
        this.pasta = pasta;
    }

    public getPrice() {
        return this.pasta.getPrice();
    }
}
