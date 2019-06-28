import { Color } from "./color";
import { ColorsInterface } from "./interfaces/index";

class ColorFactory {
    public colors: ColorsInterface;
    constructor(name: string) {
        this.colors = {};
    }
    public create(name: string) {
        const color = this.colors[name];
        if (color) { return color; }
        this.colors[name] = new Color(name);
        return this.colors[name];
    }
}

export {
    ColorFactory,
};
