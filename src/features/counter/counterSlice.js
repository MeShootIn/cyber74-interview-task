"use strict";
exports.__esModule = true;
exports.selectCount = exports.incrementByAmount = exports.counterSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    value: 0
};
exports.counterSlice = (0, toolkit_1.createSlice)({
    name: 'counter',
    initialState: initialState,
    reducers: {
        incrementByAmount: function (state, action) {
            state.value += action.payload;
        }
    }
});
exports.incrementByAmount = exports.counterSlice.actions.incrementByAmount;
var selectCount = function (state) { return state.counter.value; };
exports.selectCount = selectCount;
exports["default"] = exports.counterSlice.reducer;
