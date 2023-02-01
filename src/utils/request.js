"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function request(url, params, timeout) {
    if (timeout === void 0) { timeout = 3000; }
    var abortController = new AbortController();
    var timer = setTimeout(function () {
        abortController.abort();
    }, timeout);
    return fetch(url, __assign({ signal: abortController.signal }, params))
        .then(function (response) {
        if (response.ok) {
            return response;
        }
        throw response;
    })["catch"](function (e) {
        throw e;
    })["finally"](function () {
        clearTimeout(timer);
    });
}
exports["default"] = request;
