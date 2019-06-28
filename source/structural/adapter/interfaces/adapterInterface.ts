import { Jedi } from "..";

export interface AdapterInterface {
    jedi: Jedi;
    attack: () => number;
}
