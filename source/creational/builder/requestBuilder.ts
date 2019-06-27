import { Request } from "./index";
import { BuilderInterface } from "./interfaces";

export class RequestBuilder implements BuilderInterface {
    public request: Request;
    public url: string;
    public method: string;
    constructor() {
        this.request = new Request();
    }

    public forUrl(url: string) {
        this.request.url = url;
        return this;
    }

    public useMethod(method: string) {
        this.request.method = method;
        return this;
    }

    public payload(payload: {} ) {
        this.request.payload = payload;
        return this;
    }

    public build() {
        return this.request;
    }

}
