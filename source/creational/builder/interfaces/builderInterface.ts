import RequestBuilder from "../index";
import { Request } from "../index";
export interface BuilderInterface {
    request: Request;
    forUrl: (url: string) => RequestBuilder;
    useMethod: (method: string) => RequestBuilder;
    payload: (payload: {}) => RequestBuilder;
    build: (a: string) => Request;
}
