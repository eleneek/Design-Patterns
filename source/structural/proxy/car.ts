import { DriveInterface } from "./interfaces";
export class Car implements DriveInterface {
    public drive() {
        return "driving";
    }
}
