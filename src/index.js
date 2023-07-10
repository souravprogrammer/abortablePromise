"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Abortpromise_1 = require("./lib/Abortpromise");
var promise = new Promise(function (res) {
    setTimeout(function () {
        res("resolved the promise");
    }, 40000);
});
var res = (0, Abortpromise_1.Abortablepromise)(promise);
res.abort.abort();
res.promise.then(function (res) {
    console.log("success ", res);
});
// .catch(err => {
//     console.log("Tesing error")
// })
