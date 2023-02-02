"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var fileNameSlice_1 = require("../features/fileName/fileNameSlice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        fileName: fileNameSlice_1["default"]
    }
});
