import { Cabinet } from "./cabinet";
import { Equipment } from "./equipment";
import { FloppyDisk } from "./floppyDisk";
import { HardDrive } from "./hardDrive";
import { CompositeInterface, EquipmentInterface } from "./interfaces";
import {Memory} from "./memory";

export abstract class Composite extends Equipment implements CompositeInterface {
    public equipments: EquipmentInterface[];

    constructor() {
        super();
        this.equipments = [];
    }

    public add(equipment: EquipmentInterface) {
        this.equipments.push(equipment);
    }

    public getPrice() {
        return this.equipments.map((equipment) => {
            return equipment.getPrice();
        }).reduce((a, b) => {
            return a + b;
        });
    }
}

export {
    Cabinet,
    FloppyDisk,
    HardDrive,
    Memory,
};
