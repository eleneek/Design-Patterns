export class ShoppingCart {
    public products: number[];
    constructor() {
        this.products = [];
    }

    public addProduct(p: number) {
        this.products.push(p);
    }
}
