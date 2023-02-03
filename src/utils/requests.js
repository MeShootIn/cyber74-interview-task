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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.fileAddRequest = exports.fileRemoveRequest = exports.fileChangeRequest = exports.fileContentRequest = exports.fileNamesRequest = void 0;
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
    })["catch"](function (error) {
        throw error;
    })["finally"](function () {
        clearTimeout(timer);
    });
}
exports["default"] = request;
var SERVER = 'http://localhost:3001';
var SERVER_FILE_NAMES = "".concat(SERVER, "/file_names");
var SERVER_FILE_CONTENTS = "".concat(SERVER, "/file_contents");
// TODO https://github.com/typicode/json-server#paginate
function fileNamesRequest() {
    return __awaiter(this, void 0, void 0, function () {
        var requestInfo, fileNames;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestInfo = {
                        url: "".concat(SERVER_FILE_NAMES, "?_limit=1234"),
                        options: {
                            method: 'GET'
                        }
                    };
                    return [4 /*yield*/, request(requestInfo.url, requestInfo.options)];
                case 1:
                    fileNames = _a.sent();
                    return [4 /*yield*/, fileNames.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.fileNamesRequest = fileNamesRequest;
function fileContentRequest(id) {
    return __awaiter(this, void 0, void 0, function () {
        var requestInfo, fileContent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestInfo = {
                        url: "".concat(SERVER_FILE_CONTENTS, "/").concat(id),
                        options: {
                            method: 'GET'
                        }
                    };
                    return [4 /*yield*/, request(requestInfo.url, requestInfo.options)];
                case 1:
                    fileContent = _a.sent();
                    return [4 /*yield*/, fileContent.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.fileContentRequest = fileContentRequest;
function fileChangeRequest(fileContent) {
    return __awaiter(this, void 0, void 0, function () {
        var requestInfo, fileChangeResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requestInfo = {
                        url: "".concat(SERVER_FILE_CONTENTS, "/").concat(fileContent.id),
                        options: {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json;charset=utf-8'
                            },
                            body: JSON.stringify({
                                content: fileContent.content
                            })
                        }
                    };
                    return [4 /*yield*/, request(requestInfo.url, requestInfo.options)];
                case 1:
                    fileChangeResponse = _a.sent();
                    return [4 /*yield*/, fileChangeResponse.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.fileChangeRequest = fileChangeRequest;
function fileRemoveRequest(id) {
    return __awaiter(this, void 0, void 0, function () {
        var fileNamesRequestInfo, fileNamesRequest, fileContentsRequestInfo, fileContentsRequest;
        return __generator(this, function (_a) {
            fileNamesRequestInfo = {
                url: "".concat(SERVER_FILE_NAMES, "/").concat(id),
                options: {
                    method: 'DELETE'
                }
            };
            fileNamesRequest = request(fileNamesRequestInfo.url, fileNamesRequestInfo.options).then(function (response) { return response.json(); });
            fileContentsRequestInfo = {
                url: "".concat(SERVER_FILE_CONTENTS, "/").concat(id),
                options: {
                    method: 'DELETE'
                }
            };
            fileContentsRequest = request(fileContentsRequestInfo.url, fileContentsRequestInfo.options).then(function (response) { return response.json(); });
            return [2 /*return*/, Promise.all([fileNamesRequest, fileContentsRequest])];
        });
    });
}
exports.fileRemoveRequest = fileRemoveRequest;
function fileAddRequest(_a) {
    var name = _a.name, content = _a.content;
    return __awaiter(this, void 0, void 0, function () {
        var fileNamesRequestInfo, fileNamesRequest, fileContentsRequestInfo, fileContentsRequest;
        return __generator(this, function (_b) {
            fileNamesRequestInfo = {
                url: SERVER_FILE_NAMES,
                options: {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        name: name
                    })
                }
            };
            fileNamesRequest = request(fileNamesRequestInfo.url, fileNamesRequestInfo.options).then(function (response) { return response.json(); });
            fileContentsRequestInfo = {
                url: SERVER_FILE_CONTENTS,
                options: {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        content: content
                    })
                }
            };
            fileContentsRequest = request(fileContentsRequestInfo.url, fileContentsRequestInfo.options).then(function (response) { return response.json(); });
            return [2 /*return*/, Promise.all([fileNamesRequest, fileContentsRequest])];
        });
    });
}
exports.fileAddRequest = fileAddRequest;
