import { EquipmentInterface } from ".";

export interface CompositeInterface {
    equipments: EquipmentInterface[];
    add: (equipment: EquipmentInterface) => void;
}
