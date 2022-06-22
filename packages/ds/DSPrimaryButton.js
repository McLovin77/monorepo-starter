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
import Button from "@mui/material/Button";
import React from "react";
var DSPrimaryButton = function (props) { return (React.createElement(Button, __assign({ variant: 'contained', color: 'primary' }, props))); };
export default DSPrimaryButton;
