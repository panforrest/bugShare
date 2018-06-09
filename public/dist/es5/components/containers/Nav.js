"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var APIManager = require("../../utils").APIManager;
var actions = _interopRequire(require("../../actions"));

var connect = require("react-redux").connect;
var Nav = (function (Component) {
	function Nav() {
		_classCallCheck(this, Nav);

		if (Component != null) {
			Component.apply(this, arguments);
		}
	}

	_inherits(Nav, Component);

	_prototypeProperties(Nav, null, {
		componentDidMount: {
			value: function componentDidMount() {
				var _this = this;
				// console.log('Nav componentDidMount: ')
				APIManager.get("/account/currentuser", null, function (err, response) {
					if (err) {
						var msg = err.message || err;
						alert(msg);
						return;
					}

					console.log("Nav componentDidMount: currentuser is " + JSON.stringify(response.profile));
					_this.props.currentUserReceived(response.profile);
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var content = this.props.currentUser == null ? "" : this.props.currentUser.firstName;

				return React.createElement(
					"header",
					{ id: "header", className: "transparent-header dark" },
					React.createElement(
						"div",
						{ id: "header-wrap" },
						React.createElement(
							"div",
							{ className: "container clearfix" },
							React.createElement(
								"div",
								{ id: "primary-menu-trigger" },
								React.createElement("i", { className: "icon-reorder" })
							),
							React.createElement(
								"nav",
								{ id: "primary-menu" },
								React.createElement(
									"ul",
									null,
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "/" },
											React.createElement(
												"div",
												null,
												"Home"
											)
										)
									),
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "/register" },
											React.createElement(
												"div",
												null,
												"Register"
											)
										)
									),
									React.createElement(
										"li",
										null,
										React.createElement(
											"a",
											{ href: "/" },
											React.createElement(
												"div",
												null,
												content
											)
										)
									)
								)
							)
						)
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Nav;
})(Component);

var stateToProps = function (state) {
	return {
		currentUser: state.account.currentUser
	};
};

var dispatchToProps = function (dispatch) {
	return {
		currentUserReceived: function (profile) {
			return dispatch(actions.currentUserReceived(profile));
		}
	};
};

module.exports = connect(stateToProps, dispatchToProps)(Nav);