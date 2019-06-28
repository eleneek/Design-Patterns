export interface MainChain {
    next: null | MainChain;
    setNext?: (fn: MainChain) => void;
    exec: (products: number[]) => number;
}
