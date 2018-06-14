"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

// <img src={this.props.track.image}  />
// src={image+'=s200-c'} />
var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var DateUtils = require("../../utils").DateUtils;
var TrackPreview = (function (Component) {
    function TrackPreview() {
        _classCallCheck(this, TrackPreview);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(TrackPreview, Component);

    _prototypeProperties(TrackPreview, null, {
        render: {
            value: function render() {
                var image = this.props.track.image || null;
                var image = image == null ? "https://lh3.googleusercontent.com/LrqMbAmiROXMDDWg1RPy4t8WXf5DiMcm5zi-2rqqKM8LFPkszUph0OcNt1Eyz0evdb3PAeJY9nj6B74DnBT78RtWhag" + "=s200-c" : image;

                return React.createElement(
                    "div",
                    { className: "entry clearfix" },
                    React.createElement(
                        "div",
                        { className: "entry-image hidden-sm" },
                        React.createElement(
                            "a",
                            { href: "/track/" + this.props.track.slug },
                            React.createElement("img", { style: localStyle.trackImage, src: image })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "entry-c" },
                        React.createElement(
                            "div",
                            { className: "entry-title" },
                            React.createElement(
                                "h2",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "/track/" + this.props.track.slug },
                                    this.props.track.name
                                )
                            )
                        ),
                        React.createElement(
                            "ul",
                            { className: "entry-meta clearfix" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    this.props.track.url,
                                    " "
                                )
                            )
                        ),
                        React.createElement("hr", { style: { borderTop: "1px solid #ddd" } }),
                        React.createElement(
                            "div",
                            { className: "entry-content" },
                            React.createElement(
                                "p",
                                null,
                                "Description: ",
                                this.props.track.description
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return TrackPreview;
})(Component);

var localStyle = {
    trackImage: {
        // width:100+'%',
        width: 250,
        padding: 10,
        // border:'1px solid #ddd',
        background: "#ffffa"
    }
};

module.exports = TrackPreview;