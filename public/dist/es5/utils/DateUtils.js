"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Time = _interopRequire(require("react-time"));

var React = _interopRequire(require("react"));

module.exports = {

    formattedDate: function (timestamp) {
        // var now = new Date()
        var timestamp = new Date(timestamp);
        return React.createElement(Time, { value: timestamp, titleFormat: "YYYY/MM/DD HH:mm", relative: true });
    }

};