"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abortablepromise = void 0;
var Abort_1 = require("./utils/Abort");
var PromiseWrapper_1 = require("./utils/PromiseWrapper");
function Abortablepromise(promise) {
    var abort = new Abort_1.Abort();
    return { abort: abort, promise: (0, PromiseWrapper_1.Wrapper)(promise, abort) };
}
exports.Abortablepromise = Abortablepromise;
