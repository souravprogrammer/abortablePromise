import { AbortPromsie, ErrorCallback } from "../../Types";
export class Abort implements AbortPromsie {

    reject?: ErrorCallback | undefined;
    controller: AbortController
    constructor() {
        this.controller = new AbortController();
    }
    abort() {
        this.controller.abort();
        if (this.reject)
            this.reject(new Error("Promise Aborted"))
    }
    attach(callBack: ErrorCallback) {
        this.reject = callBack
    };

}