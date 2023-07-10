"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abort = void 0;
var Abort = /** @class */ (function () {
    function Abort() {
        this.controller = new AbortController();
    }
    Abort.prototype.abort = function () {
        this.controller.abort();
        if (this.reject)
            this.reject(new Error("Promise Aborted"));
    };
    Abort.prototype.attach = function (callBack) {
        this.reject = callBack;
    };
    ;
    return Abort;
}());
exports.Abort = Abort;
