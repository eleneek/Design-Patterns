import { BMWInterface, CarModel} from "./interfaces";

export class Bmw implements BMWInterface {
    public model: CarModel;
    public price: number;
    public maxSpeed: number;

    constructor(model: CarModel, price: number, maxSpeed: number) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}
