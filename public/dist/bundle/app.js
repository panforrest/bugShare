/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "bundle/" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([52,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = { //export {

    PROFILES_RECEIVED: 'PROFILES_RECEIVED',
    PROFILE_CREATED: 'PROFILE_CREATED',
    CURRENT_USER_RECEIVED: 'CURRENT_USER_RECEIVED',
    BUGS_RECEIVED: 'BUGS_RECEIVED',
    BUG_CREATED: 'BUG_CREATED',
    TRACKS_RECEIVED: 'TRACKS_RECEIVED',
    TRACK_CREATED: 'TRACK_CREATED'

};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(3);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    profilesReceived: function profilesReceived(profiles) {
        return {
            type: _constants2.default.PROFILES_RECEIVED, //type: actions,
            profiles: profiles
        };
    },

    profileCreated: function profileCreated(profile) {
        //profileCreated: (action.type) => {
        return {
            type: _constants2.default.PROFILE_CREATED,
            profile: profile
        };
    },

    currentUserReceived: function currentUserReceived(profile) {
        return {
            type: _constants2.default.CURRENT_USER_RECEIVED,
            profile: profile
        };
    },

    bugsReceived: function bugsReceived(bugs) {
        return {
            type: _constants2.default.BUGS_RECEIVED,
            bugs: bugs
        };
    },

    bugCreated: function bugCreated(bug) {
        return {
            type: _constants2.default.BUG_CREATED,
            bug: bug
        };
    },

    tracksReceived: function tracksReceived(tracks) {
        return {
            type: _constants2.default.TRACKS_RECEIVED,
            tracks: tracks
        };
    },

    trackCreated: function trackCreated(track) {
        return {
            type: _constants2.default.TRACK_CREATED,
            track: track
        };
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.APIManager = undefined;

var _APIManager = __webpack_require__(38);

var _APIManager2 = _interopRequireDefault(_APIManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.APIManager = _APIManager2.default;

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(3);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {

	list: []

};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var updatedState = Object.assign({}, state);
	switch (action.type) {
		case _constants2.default.TRACKS_RECEIVED:
			console.log('TRACKS_RECEIVED: ' + JSON.stringify(action.tracks));
			updatedState['list'] = action.tracks;
			return updatedState;

		case _constants2.default.TRACK_CREATED:
			var updatedList = Object.assign([], updatedState.list);
			updatedList.push(action.track);
			updatedState['list'] = updatedList;
			return updatedState;

		default:
			return state;
	}
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(3);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {

    list: []

};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var updated = Object.assign({}, state);
    switch (action.type) {
        case _constants2.default.BUGS_RECEIVED:
            console.log('BUGS_RECEIVED: ' + JSON.stringify(action.bugs));
            updated['list'] = action.bugs;
            return updated;

        case _constants2.default.BUG_CREATED:
            var updatedList = Object.assign([], updated.list);
            updatedList.push(action.bug);
            updated['list'] = updatedList;
            return updated;

        default:
            return state;
    }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(3);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {

    currentUser: null //{}

};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    var updatedState = Object.assign({}, state);
    switch (action.type) {
        // let updatedState = Object.assign({}, state)
        case _constants2.default.PROFILE_CREATED:
            updatedState['currentUser'] = action.profile;
            return updatedState;

        case _constants2.default.CURRENT_USER_RECEIVED:
            updatedState['currentUser'] = action.profile;
            return updatedState;

        default:
            return state;

    }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(3);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  list: [] //profiles: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];
  //export default (state=initialState, actions){
  var updated = Object.assign({}, state);
  switch (action.type) {
    case _constants2.default.PROFILES_RECEIVED:
      // var updatedState = Object.assign([], state)
      console.log('PROFILES_RECEIVED: ' + JSON.stringify(action.profiles));
      updated['list'] = action.profiles;
      return updated; //return updatedState

    case _constants2.default.PROFILE_CREATED:
      console.log('PROFILE_CREATED: ' + JSON.stringify(action.profile));
      // updated['user'] = action.profile
      var updatedList = Object.assign([], updated.list); //let updatedList = Object.assign([], state)
      updatedList.push(action.profile);
      updated['list'] = updatedList; //DON'T FORGET THIS LINE
      return updated;

    default:
      return state;
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trackReducer = exports.bugReducer = exports.accountReducer = exports.profileReducer = undefined;

var _profileReducer = __webpack_require__(20);

var _profileReducer2 = _interopRequireDefault(_profileReducer);

var _accountReducer = __webpack_require__(19);

var _accountReducer2 = _interopRequireDefault(_accountReducer);

var _bugReducer = __webpack_require__(18);

var _bugReducer2 = _interopRequireDefault(_bugReducer);

var _trackReducer = __webpack_require__(17);

var _trackReducer2 = _interopRequireDefault(_trackReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.profileReducer = _profileReducer2.default;
exports.accountReducer = _accountReducer2.default;
exports.bugReducer = _bugReducer2.default;
exports.trackReducer = _trackReducer2.default;

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(15);

var _reduxThunk = __webpack_require__(22);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var store;

// export default {
// // configureStore
// // combineReducer

//     configureStore: () => {

//     	const reducers = combineReducers({
//     		profile: profileReducer,
//             account: accountReducer,
//             bug: bugReducer,
//             track: trackReducer
//     	}),

//     	store = createStore(
//     		reducers,
//     		applyMiddleware()
//     	)


//     	return store
//     },

//     currentStore: () => {
//     	return store
//     }

// }
var reducers = (0, _redux.combineReducers)({
    profile: _reducers.profileReducer,
    account: _reducers.accountReducer,
    bug: _reducers.bugReducer,
    track: _reducers.trackReducer
});

var store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.default = store;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(5);

var _actions = __webpack_require__(4);

var _actions2 = _interopRequireDefault(_actions);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // <li key={i}>{this.props.track.name}</li>


var Tracks = function (_Component) {
	_inherits(Tracks, _Component);

	function Tracks(context, props) {
		_classCallCheck(this, Tracks);

		var _this = _possibleConstructorReturn(this, (Tracks.__proto__ || Object.getPrototypeOf(Tracks)).call(this, context, props));

		_this.state = {
			tracks: []
		};
		return _this;
	}

	_createClass(Tracks, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			// console.log('Tracks container componentDidMount: ')
			_utils.APIManager.get('/api/track', null, function (err, response) {
				if (err) {
					var msg = err.message || err;
					alert(msg);
					return;
				}

				// console.log('Tracks container componentDidMount: '+JSON.stringify(response.results))
				var results = response.results;
				// this.setState({
				// 	tracks: results
				// })
				_this2.props.tracksReceived(response.results);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var list = this.props.tracks.map(function (track, i) {
				return _react2.default.createElement(
					'li',
					{ key: track._id },
					_react2.default.createElement(
						'a',
						{ href: '/track/' + track.slug },
						track.name
					)
				);
			});

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h2',
					null,
					'Track List'
				),
				_react2.default.createElement(
					'ol',
					null,
					list
				)
			);
		}
	}]);

	return Tracks;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	return {
		tracks: state.track.list
	};
};

var dispatchToProps = function dispatchToProps(dispatch) {
	return {
		tracksReceived: function tracksReceived(tracks) {
			return dispatch(_actions2.default.tracksReceived(tracks));
		}
	};
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Tracks);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(4);

var _actions2 = _interopRequireDefault(_actions);

var _reactRedux = __webpack_require__(2);

var _utils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Signup } from '../presentation'


var Bugs = function (_Component) {
	_inherits(Bugs, _Component);

	function Bugs() {
		_classCallCheck(this, Bugs);

		var _this = _possibleConstructorReturn(this, (Bugs.__proto__ || Object.getPrototypeOf(Bugs)).call(this));

		_this.state = {
			bugs: []
		};
		return _this;
	}

	_createClass(Bugs, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			// console.log('componentDidMount: ')
			_utils.APIManager.get('/api/bug', null, function (err, response) {
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
				_this2.props.bugsReceived(results);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var bugs = this.props.bugs.map(function (bug, i) {
				return _react2.default.createElement(
					'li',
					{ key: i },
					bug.title
				);
			});

			return _react2.default.createElement(
				'div',
				null,
				'This is Bugs List:',
				_react2.default.createElement(
					'ol',
					null,
					bugs
				)
			);
		}
	}]);

	return Bugs;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	return {
		bugs: state.bug.list
	};
};

var dispatchToProps = function dispatchToProps(dispatch) {
	return {
		bugsReceived: function bugsReceived(bugs) {
			return dispatch(_actions2.default.bugsReceived(bugs));
		}

	};
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Bugs);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(5);

var _actions = __webpack_require__(4);

var _actions2 = _interopRequireDefault(_actions);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_Component) {
  _inherits(Signup, _Component);

  function Signup() {
    _classCallCheck(this, Signup);

    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));

    _this.state = {
      visitor: {
        email: '',
        firstName: '',
        lastName: '',
        password: ''
      }
    };
    return _this;
  }

  _createClass(Signup, [{
    key: 'update',
    value: function update(event) {
      // console.log('updateProfile: ')
      event.preventDefault();
      // console.log(event.target.id+' == '+JSON.stringify(event.target.value))    //FORGOT target
      var updated = Object.assign({}, this.state.visitor); //var updated = Object.assign({}, this.state)//[]
      updated[event.target.id] = event.target.value;
      this.setState({
        visitor: updated
      });
      console.log(JSON.stringify(this.state.visitor));
    }
  }, {
    key: 'register',
    value: function register(event) {
      // event.preventDefault()
      //       // console.log('register: ')
      //       // APIManager.post('/api/profile', this.state.visitor, (err, response) => {
      //       APIManager.post('/account/register', this.state.visitor, (err, response) => {
      //           if (err) {
      //           	const msg = err.message || err
      //               alert(msg)
      //           	return
      //           }

      //           console.log('register: '+JSON.stringify(response))
      //           var result = response.profile  //var result = response.result
      //           this.props.profileCreated(result)
      //       })
      this.props.onRegister(this.state.visitor);
    }
  }, {
    key: 'login',
    value: function login(event) {
      // event.preventDefault()
      // APIManager.post('/account/login', this.state.visitor, (err, response) => {
      //     if (err) {
      //         const msg = err.message || err
      //         // console.log(msg)
      //         alert(msg)
      //         return
      //     }

      //     console.log(JSON.stringify(response))
      //     var result = response.profile
      //     this.props.currentUserReceived(result)
      // })
      this.props.onLogin(this.state.visitor);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.currentUser != null ? _react2.default.createElement(
          'p',
          null,
          'Welcome, ',
          this.props.currentUser.email
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            null,
            'Sign up'
          ),
          _react2.default.createElement('input', { onChange: this.update.bind(this), type: 'text', id: 'email', placeholder: 'Email' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('input', { onChange: this.update.bind(this), type: 'text', id: 'firstName', placeholder: 'First Name' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('input', { onChange: this.update.bind(this), type: 'text', id: 'lastName', placeholder: 'Last Name' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('input', { onChange: this.update.bind(this), type: 'text', id: 'password', placeholder: 'Password' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'button',
            { onClick: this.register.bind(this) },
            'Submit'
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Log in'
          ),
          _react2.default.createElement('input', { onChange: this.update.bind(this), type: 'text', id: 'email', placeholder: 'Email' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('input', { onChange: this.update.bind(this), type: 'text', id: 'password', placeholder: 'Password' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'button',
            { onClick: this.login.bind(this) },
            'Submit'
          )
        )
      );
    }
  }]);

  return Signup;
}(_react.Component);

var stateToProps = function stateToProps(state) {
  return {
    profile: state.profile.user,
    currentUser: state.account.currentUser
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    profileCreated: function profileCreated(profile) {
      return dispatch(_actions2.default.profileCreated(profile));
    },
    currentUserReceived: function currentUserReceived(profile) {
      return dispatch(_actions2.default.currentUserReceived(profile));
    }
  };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Signup);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Signup = undefined;

var _Signup = __webpack_require__(26);

var _Signup2 = _interopRequireDefault(_Signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Signup = _Signup2.default;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(4);

var _actions2 = _interopRequireDefault(_actions);

var _reactRedux = __webpack_require__(2);

var _presentation = __webpack_require__(27);

var _utils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // <h2>User is not logged in. </h2>
// export default connect(stateToProps, dispatchToProps)(Admin)


var Admin = function (_Component) {
    _inherits(Admin, _Component);

    function Admin() {
        _classCallCheck(this, Admin);

        var _this = _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this));

        _this.state = {
            bug: {
                title: '',
                details: '',
                response: ''
            },
            track: {
                name: '',
                slug: ''
            }
        };
        return _this;
    }

    _createClass(Admin, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _utils.APIManager.get('/account/currentuser', null, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    alert(msg);
                    return;
                }
                console.log('Admin.js: ' + JSON.stringify(response.profile));
                _this2.props.currentUserReceived(response.profile);
            });
        }
    }, {
        key: 'register',
        value: function register(visitor) {
            var _this3 = this;

            _utils.APIManager.post('/account/register', visitor, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    alert(msg);
                    return;
                }

                console.log('register: ' + JSON.stringify(response));
                _this3.props.profileCreated(response.profile);
            });
        }
    }, {
        key: 'login',
        value: function login(credentials) {
            var _this4 = this;

            _utils.APIManager.post('/account/login', credentials, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    // console.log(msg)
                    alert(msg);
                    return;
                }

                console.log(JSON.stringify(response));
                _this4.props.currentUserReceived(response.profile);
            });
        }
    }, {
        key: 'updateTrack',
        value: function updateTrack(event) {
            event.preventDefault();
            console.log('updateTrack: ' + event.target.id + ' == ' + event.target.value);
            var updatedTrack = Object.assign({}, this.state.track);
            updatedTrack[event.target.id] = event.target.value;
            this.setState({
                track: updatedTrack
            });
        }
    }, {
        key: 'submitTrack',
        value: function submitTrack(event) {
            var _this5 = this;

            event.preventDefault();
            console.log('to submitTrack: ' + JSON.stringify(this.state.track));
            var track = this.state.track;
            var name = track.name;
            var parts = name.split(' ');

            var slug = '';
            for (var i = 0; i < parts.length; i++) {
                var word = parts[i];
                slug += word;
                if (i != parts.length - 1) slug += '-';
            }

            // slug = slug.repalce('?', '-')
            track['slug'] = slug;
            console.log(JSON.stringify(track));

            _utils.APIManager.post('/api/track', track, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    alert(JSON.stringify(msg));
                    return;
                }

                console.log('track submitted: ' + JSON.stringify(response.result));
                _this5.props.trackCreated(response.result);
            });
        }
    }, {
        key: 'updateBug',
        value: function updateBug(event) {
            event.preventDefault();
            // console.log(event.target.id+" == "+event.target.value)
            var updatedBug = Object.assign({}, this.state.bug);
            updatedBug[event.target.id] = event.target.value; //updatedBug['event.target.id'] = event.target.value
            this.setState({
                bug: updatedBug
            });
            console.log('updatedBug: ' + JSON.stringify(this.state.bug));
        }
    }, {
        key: 'submitBug',
        value: function submitBug(event) {
            var _this6 = this;

            event.preventDefault();
            var bug = this.state.bug;
            bug['profile'] = this.props.currentUser.id;

            _utils.APIManager.post('/api/bug', bug, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    // console.log(msg)
                    alert(JSON.stringify(msg));
                    return;
                }
                console.log('submit: ' + JSON.stringify(response.result));
                var result = response.result;
                _this6.props.bugCreated(bug);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.currentUser == null ? _react2.default.createElement(_presentation.Signup, { onRegister: this.register.bind(this), onLogin: this.login.bind(this) }) : _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Welcome, ',
                        this.props.currentUser.email
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Create Bug'
                    ),
                    _react2.default.createElement('input', { onChange: this.updateBug.bind(this), type: 'text', id: 'title', placeholder: 'Title' }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('textarea', { onChange: this.updateBug.bind(this), type: 'text', id: 'detail', placeholder: 'Detail' }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('textarea', { onChange: this.updateBug.bind(this), type: 'text', id: 'response', placeholder: 'Response' }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', { onClick: this.submitBug.bind(this), type: 'submit', value: 'Submit' }),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Create Track'
                    ),
                    _react2.default.createElement('input', { onChange: this.updateTrack.bind(this), type: 'text', id: 'name', placeholder: 'Track Name' }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', { onClick: this.submitTrack.bind(this), type: 'submit', value: 'Submit' })
                )
            );
        }
    }]);

    return Admin;
}(_react.Component);

var stateToProps = function stateToProps(state) {
    return {
        profiles: state.profile.list,
        currentUser: state.account.currentUser
    };
};

var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        profileCreated: function profileCreated(profile) {
            return dispatch(_actions2.default.profileCreated(profile));
        },
        currentUserReceived: function currentUserReceived(profile) {
            return dispatch(_actions2.default.currentUserReceived(profile));
        },
        bugCreated: function bugCreated(bug) {
            return dispatch(_actions2.default.bugCreated(bug));
        },
        trackCreated: function trackCreated(track) {
            return dispatch(_actions2.default.trackCreated(track));
        }
    };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Admin);

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _superagent = __webpack_require__(37);

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

	get: function get(endpoint, params, callback) {
		_superagent2.default.get(endpoint).query(null).set('Accept', 'application/json') //.set('accepte', 'app/json')
		.end(function (err, response) {
			//.result((err, result)=>{
			if (err) {
				// var err = err.message || err
				callback(err, null); //alert(err)
				return;
			}

			callback(null, response.body); //console.log(JSON.stringify(response.body))
		});
	},

	post: function post(endpoint, params, callback) {
		_superagent2.default.post(endpoint) //.get(endpoint)
		.send(params) //.query(params)
		.set('Accept', 'application/json').end(function (err, response) {
			if (err) {
				callback(err, null);
				return;
			}
			console.log('APIManager: ' + JSON.stringify(response.body));
			var confirmation = response.body.confirmation;
			if (confirmation != 'success') {
				callback({ message: response.body.message }, null);
				return;
			}
			callback(null, response.body); //callback(null, response.result)
		});
	}
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(5);

var _actions = __webpack_require__(4);

var _actions2 = _interopRequireDefault(_actions);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profiles = function (_Component) {
    _inherits(Profiles, _Component);

    function Profiles() {
        _classCallCheck(this, Profiles);

        var _this = _possibleConstructorReturn(this, (Profiles.__proto__ || Object.getPrototypeOf(Profiles)).call(this));

        _this.state = {
            profiles: []
        };
        return _this;
    }

    _createClass(Profiles, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _utils.APIManager.get('/api/profile', null, function (err, response) {
                if (err) {
                    alert(err);
                    return;
                }

                console.log(JSON.stringify(response));
                var results = response.results;
                // this.setState({
                // 	profiles: results  //profile: response
                // })
                _this2.props.profilesReceived(results);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var list = this.props.profiles.map(function (profile, i) {
                return _react2.default.createElement(
                    'li',
                    { key: profile.id },
                    profile.email
                );
            });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'ol',
                    null,
                    list
                )
            );
        }
    }]);

    return Profiles;
}(_react.Component);

var stateToProps = function stateToProps(state) {
    //const stateToProps (state) => {
    return {
        profiles: state.profile.list //NOT SURE WHY? list: profile.profiles
    };
};

var dispatchToProps = function dispatchToProps(dispatch) {
    //constat dispatchToProps (dispatch) => {
    return {
        //profileReceived: (profiles) => this.props.actions.profileReceived(profiles)
        profilesReceived: function profilesReceived(profiles) {
            return dispatch(_actions2.default.profilesReceived(profiles));
        }
    };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Profiles);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Main = exports.Tracks = exports.Bugs = exports.Admin = exports.Profiles = undefined;

var _Profiles = __webpack_require__(39);

var _Profiles2 = _interopRequireDefault(_Profiles);

var _Admin = __webpack_require__(28);

var _Admin2 = _interopRequireDefault(_Admin);

var _Bugs = __webpack_require__(25);

var _Bugs2 = _interopRequireDefault(_Bugs);

var _Tracks = __webpack_require__(24);

var _Tracks2 = _interopRequireDefault(_Tracks);

var _Main = __webpack_require__(42);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Signup from './Signup'
exports.Profiles = _Profiles2.default;
exports.Admin = _Admin2.default;
exports.Bugs = _Bugs2.default;
exports.Tracks = _Tracks2.default;
exports.Main = _Main2.default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Track = function (_Component) {
	_inherits(Track, _Component);

	function Track() {
		_classCallCheck(this, Track);

		return _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).apply(this, arguments));
	}

	_createClass(Track, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'This is Track component.'
			);
		}
	}]);

	return Track;
}(_react.Component);

exports.default = Track;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Tracks = __webpack_require__(24);

var _Tracks2 = _interopRequireDefault(_Tracks);

var _Admin = __webpack_require__(28);

var _Admin2 = _interopRequireDefault(_Admin);

var _Track = __webpack_require__(41);

var _Track2 = _interopRequireDefault(_Track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // content = <div><Tracks /><Admin /></div>
// content = <Track slug={this.props.slug} />


// import { Track } from '../layout'

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('Main componentDidMount props.page: ' + this.props.page);
            // console.log('page: '+JSON.stringify(this.state.page))
            // alert('slug: '+JSON.stringify(this.state.slug))
        }
    }, {
        key: 'render',
        value: function render() {
            var content = null;
            var page = this.props.page;
            if (page == 'home') content = _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Tracks2.default, null),
                _react2.default.createElement(_Admin2.default, null)
            );

            if (page == 'track') content = _react2.default.createElement(_Track2.default, { slug: this.props.slug });

            return _react2.default.createElement(
                'div',
                null,
                content
            );
        }
    }]);

    return Main;
}(_react.Component);

exports.default = Main;

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(50);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _containers = __webpack_require__(40);

var _reactRedux = __webpack_require__(2);

var _store = __webpack_require__(23);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //     render() {
//         return (
//             <Provider store = {store.configureStore()}>
//                 <div>

//                     <Main page={this.state.page} slug={this.state.slug}/>
//                 </div>
//             </Provider>    
//         )
//     }
// } 

// ReactDom.render(<App />, document.getElementById('root'))

// import { Home } from './components/layout'


// class App extends Component {
//  render() {
//      return (
//          <Provider store = {store.configureStore()}>
//              <div>

//                  <Home />
//              </div>
//          </Provider>    
//      )
//  }
// } 

// ReactDom.render(<App />, document.getElementById('root'))

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props, context) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props, context));

        _this.state = {
            page: 'home',
            slug: null
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            //comopnentWillMount(){
            var pathname = window.location.pathname;
            console.log(pathname);
            var path = pathname.replace('/', '');

            var page = 'home';
            var slug = null;
            if (path.length > 0) {
                var parts = path.split('/');
                page = parts[0];
                if (parts.length > 1) slug = parts[1];
            }

            this.setState({
                page: page,
                slug: slug
            });
            // console.log('state: '+JSON.stringify(this.state))
            // alert('state: '+JSON.stringify(this.state))
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_containers.Main, { page: this.state.page, slug: this.state.slug });
        }
    }]);

    return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(App, null)
), document.getElementById('app'));

/***/ })
/******/ ]);
//# sourceMappingURL=app.map