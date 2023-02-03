"use strict";
exports.__esModule = true;
exports.selectFileNameObject = exports.setFileNameObject = exports.fileNameSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    fileNameObject: null
};
exports.fileNameSlice = (0, toolkit_1.createSlice)({
    name: 'fileName',
    initialState: initialState,
    reducers: {
        setFileNameObject: function (state, action) {
            state.fileNameObject = action.payload.fileNameObject;
        }
    }
});
exports.setFileNameObject = exports.fileNameSlice.actions.setFileNameObject;
var selectFileNameObject = function (state) { return state.fileName; };
exports.selectFileNameObject = selectFileNameObject;
exports["default"] = exports.fileNameSlice.reducer;
