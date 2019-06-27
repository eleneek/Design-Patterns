import { RequestInterface } from "./interfaces/";
import {RequestBuilder} from "./requestBuilder";

export class Request implements RequestInterface {
    public url: string;
    public method: string;
    public payload: {};
    constructor() {
        this.url = "";
        this.method = "";
        this.payload = {};
    }
}

export default RequestBuilder;
