import { EquipmentInterface } from "./interfaces";

export abstract class Equipment implements EquipmentInterface {
    public price: number;
    public name: string;

    public getPrice() {
        return this.price || 0;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }
}
