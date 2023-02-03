"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var file_name_slice_1 = require("../features/file-name/file-name-slice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        fileName: file_name_slice_1["default"]
    }
});
