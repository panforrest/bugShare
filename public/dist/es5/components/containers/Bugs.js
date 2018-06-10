"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var actions = _interopRequire(require("../../actions"));

var connect = require("react-redux").connect;
// import { Signup } from '../presentation'
var APIManager = require("../../utils").APIManager;
var Bugs = (function (Component) {
	function Bugs() {
		_classCallCheck(this, Bugs);

		_get(Object.getPrototypeOf(Bugs.prototype), "constructor", this).call(this);
		this.state = {
			bugs: []
		};
	}

	_inherits(Bugs, Component);

	_prototypeProperties(Bugs, null, {
		componentDidMount: {
			value: function componentDidMount() {
				var _this = this;
				// console.log('componentDidMount: ')
				APIManager.get("/api/bug", null, function (err, response) {
					if (err) {
						var msg = err.message || err;
						alert(msg);
						return;
					}

					console.log(JSON.stringify(response.results));
					var results = response.results;
					// this.setState({
					// 	bugs: results
					// })
					_this.props.bugsReceived(results);
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var bugs = this.props.bugs.map(function (bug, i) {
					return React.createElement(
						"li",
						{ key: i },
						bug.title
					);
				});

				return React.createElement(
					"div",
					{ className: "container clearifx" },
					React.createElement(
						"div",
						{ className: "col_three_fifth bothsidebar nobottommargin" },
						React.createElement(
							"div",
							{ className: "fancy-title title-border" },
							React.createElement(
								"h3",
								null,
								"Bugs that are recorded by bugShare users:"
							)
						),
						React.createElement(
							"div",
							{ id: "posts", className: "events small-thumbs" },
							bugs
						)
					),
					React.createElement(Admin, null)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Bugs;
})(Component);

var stateToProps = function (state) {
	return {
		bugs: state.bug.list
	};
};

var dispatchToProps = function (dispatch) {
	return {
		bugsReceived: function (bugs) {
			return dispatch(actions.bugsReceived(bugs));
		}

	};
};

module.exports = connect(stateToProps, dispatchToProps)(Bugs);