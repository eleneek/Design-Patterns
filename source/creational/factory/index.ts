import { Bmw } from "./bmw";
import {BMWInterface, CarModel} from "./interfaces";

class BmwFactory {
    public static create(type: CarModel): BMWInterface | undefined {
        if (type === "X5") {
            return new Bmw(type, 108000, 300);
        }

        if (type === "X6") {
            return new Bmw(type, 111000, 320);
        }
    }
}

export default BmwFactory;
