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
/******/ 	deferredModules.push([69,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(4);

var _actions = __webpack_require__(3);

var _actions2 = _interopRequireDefault(_actions);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_Component) {
	_inherits(Nav, _Component);

	function Nav() {
		_classCallCheck(this, Nav);

		return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
	}

	_createClass(Nav, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			// console.log('Nav componentDidMount: ')
			_utils.APIManager.get('/account/currentuser', null, function (err, response) {
				if (err) {
					var msg = err.message || err;
					alert(msg);
					return;
				}

				console.log('Nav componentDidMount: currentuser is ' + JSON.stringify(response.profile));
				_this2.props.currentUserReceived(response.profile);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var content = this.props.currentUser == null ? '' : this.props.currentUser.firstName;

			return _react2.default.createElement(
				'header',
				{ id: 'header', className: 'transparent-header dark' },
				_react2.default.createElement(
					'div',
					{ id: 'header-wrap' },
					_react2.default.createElement(
						'div',
						{ className: 'container clearfix' },
						_react2.default.createElement(
							'div',
							{ id: 'primary-menu-trigger' },
							_react2.default.createElement('i', { className: 'icon-reorder' })
						),
						_react2.default.createElement(
							'nav',
							{ id: 'primary-menu' },
							_react2.default.createElement(
								'ul',
								null,
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '/' },
										_react2.default.createElement(
											'div',
											null,
											'Home'
										)
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '/Signup/Login' },
										_react2.default.createElement(
											'div',
											null,
											'Register'
										)
									)
								),
								_react2.default.createElement(
									'li',
									null,
									_react2.default.createElement(
										'a',
										{ href: '/' },
										_react2.default.createElement(
											'div',
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
		}
	}]);

	return Nav;
}(_react.Component);

var stateToProps = function stateToProps(state) {
	return {
		currentUser: state.account.currentUser
	};
};

var dispatchToProps = function dispatchToProps(dispatch) {
	return {
		currentUserReceived: function currentUserReceived(profile) {
			return dispatch(_actions2.default.currentUserReceived(profile));
		}
	};
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Nav);

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(4);

var _actions = __webpack_require__(3);

var _actions2 = _interopRequireDefault(_actions);

var _reactRedux = __webpack_require__(2);

var _TrackPreview = __webpack_require__(40);

var _TrackPreview2 = _interopRequireDefault(_TrackPreview);

var _Admin = __webpack_require__(16);

var _Admin2 = _interopRequireDefault(_Admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // <li key={i}>{this.props.track.name}</li>
// <li key={track._id}><a href={'/track/'+track.slug}>{track.name}</a></li>


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
			var trackList = this.props.tracks.map(function (track, i) {
				return _react2.default.createElement(_TrackPreview2.default, { key: track._id, track: track });
			});

			return _react2.default.createElement(
				'div',
				{ className: 'container clearifx' },
				_react2.default.createElement(
					'div',
					{ className: 'col_three_fifth bothsidebar nobottommargin' },
					_react2.default.createElement(
						'div',
						{ className: 'fancy-title title-border' },
						_react2.default.createElement(
							'h3',
							null,
							'Tracks of Bugs'
						)
					),
					_react2.default.createElement(
						'div',
						{ id: 'posts', className: 'events small-thumbs' },
						trackList
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'col_one_fifth bothsidebar nobottommargin' },
					_react2.default.createElement(_Admin2.default, null)
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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Signup = undefined;

var _Signup = __webpack_require__(48);

var _Signup2 = _interopRequireDefault(_Signup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Signup = _Signup2.default;

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(3);

var _actions2 = _interopRequireDefault(_actions);

var _reactRedux = __webpack_require__(2);

var _presentation = __webpack_require__(15);

var _utils = __webpack_require__(4);

var _reactDropzone = __webpack_require__(24);

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _sha = __webpack_require__(47);

var _sha2 = _interopRequireDefault(_sha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Admin = function (_Component) {
    _inherits(Admin, _Component);

    function Admin() {
        _classCallCheck(this, Admin);

        var _this = _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this));

        _this.state = {
            bug: {
                profile: '',
                track: '',
                title: '',
                details: '',
                response: ''
            },
            track: {
                name: '',
                slug: '',
                url: '',
                image: ''
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

            var email = visitor.email;
            var firstName = visitor.firstName;
            var lastName = visitor.lastName;
            var password = visitor.password;

            if (email.length == 0) {
                alert('Please fill in Email!');
                return;
            }

            if (firstName.length == 0) {
                alert('Please fill in First Name!');
                return;
            }

            if (lastName.length == 0) {
                alert('Please fill in Last Name!');
                return;
            }

            if (password.length == 0) {
                alert('Please fill in Password!');
                return;
            }

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

            var email = credentials.email;
            var password = credentials.password;

            if (email.length == 0) {
                alert('Please fill in Email!');
                return;
            }

            if (password.length == 0) {
                alert('Please fill in Password!');
                return;
            }

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

            if (name.length == 0) {
                alert('Please fill in Track Name!');
                return;
            }

            var parts = name.split(' ');

            var slug = '';
            for (var i = 0; i < parts.length; i++) {
                var word = parts[i];
                slug += word;
                if (i != parts.length - 1) slug += '-';
            }

            slug = slug.replace('?', '-');
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
                window.location.href = '/track/' + track['slug'];
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
        key: 'uploadImage',
        value: function uploadImage(files) {
            var _this7 = this;

            var image = files[0];

            var cloudName = 'hmffqrvhq';
            var url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';

            var timestamp = Date.now() / 1000;
            var uploadPreset = 'ydm4pinf';

            var paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'rFL-RZTX81XWxpLcuDidqKN3WbU';
            var signature = (0, _sha2.default)(paramsStr);

            var params = {
                'api_key': '432944256736493',
                'timestamp': timestamp,
                'upload_preset': uploadPreset,
                'signature': signature

                // console.log('uploadImage: ')
            };_utils.APIManager.upload(url, image, params, function (err, response) {
                if (err) {
                    // console.log('UPLOAD ERROR: '+JSON.stringify(err))
                    alert(err);
                    return;
                }

                // console.log('UPLOAD COMPLETE: '+JSON.stringify(response.body))
                // const imageUrl = response.body['secure_url']

                var updatedTrack = Object.assign({}, _this7.state.track);
                updatedTrack['image'] = response.body['secure_url'];
                _this7.setState({
                    track: updatedTrack
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var image = this.state.track.image == null ? '' : this.state.track.image.replace('upload', 'upload/c_thumb,h_150,w_150,x_0,y_0'); //thumbnail, not entire image

            return _react2.default.createElement(
                'div',
                null,
                this.props.currentUser == null ? _react2.default.createElement(_presentation.Signup, { onRegister: this.register.bind(this), onLogin: this.login.bind(this) }) : _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Hi, ',
                        this.props.currentUser.firstName
                    ),
                    _react2.default.createElement(
                        'h3',
                        null,
                        'Create a new Track'
                    ),
                    _react2.default.createElement('input', { onChange: this.updateTrack.bind(this), type: 'text', id: 'name', placeholder: 'Track Name', className: 'form-control', style: { marginTop: 1, marginLeft: 12, width: 95 + '%' } }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', { onChange: this.updateTrack.bind(this), type: 'text', id: 'url', placeholder: 'Track Url', className: 'form-control', style: { marginTop: 1, marginLeft: 12, width: 95 + '%' } }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', { onChange: this.updateTrack.bind(this), type: 'text', id: 'description', placeholder: 'Track Description', className: 'form-control', style: { marginTop: 1, marginLeft: 12, width: 95 + '%' } }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('img', { src: image }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'h6',
                        null,
                        'Click below, upload image'
                    ),
                    _react2.default.createElement(_reactDropzone2.default, { onDrop: this.uploadImage.bind(this) }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.submitTrack.bind(this), className: 'btn btn-success' },
                        'Submit New Track'
                    ),
                    _react2.default.createElement('br', null)
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

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 194,
	"./af.js": 194,
	"./ar": 193,
	"./ar-dz": 192,
	"./ar-dz.js": 192,
	"./ar-kw": 191,
	"./ar-kw.js": 191,
	"./ar-ly": 190,
	"./ar-ly.js": 190,
	"./ar-ma": 189,
	"./ar-ma.js": 189,
	"./ar-sa": 188,
	"./ar-sa.js": 188,
	"./ar-tn": 187,
	"./ar-tn.js": 187,
	"./ar.js": 193,
	"./az": 186,
	"./az.js": 186,
	"./be": 185,
	"./be.js": 185,
	"./bg": 184,
	"./bg.js": 184,
	"./bm": 183,
	"./bm.js": 183,
	"./bn": 182,
	"./bn.js": 182,
	"./bo": 181,
	"./bo.js": 181,
	"./br": 180,
	"./br.js": 180,
	"./bs": 179,
	"./bs.js": 179,
	"./ca": 178,
	"./ca.js": 178,
	"./cs": 177,
	"./cs.js": 177,
	"./cv": 176,
	"./cv.js": 176,
	"./cy": 175,
	"./cy.js": 175,
	"./da": 174,
	"./da.js": 174,
	"./de": 173,
	"./de-at": 172,
	"./de-at.js": 172,
	"./de-ch": 171,
	"./de-ch.js": 171,
	"./de.js": 173,
	"./dv": 170,
	"./dv.js": 170,
	"./el": 169,
	"./el.js": 169,
	"./en-au": 168,
	"./en-au.js": 168,
	"./en-ca": 167,
	"./en-ca.js": 167,
	"./en-gb": 166,
	"./en-gb.js": 166,
	"./en-ie": 165,
	"./en-ie.js": 165,
	"./en-il": 164,
	"./en-il.js": 164,
	"./en-nz": 163,
	"./en-nz.js": 163,
	"./eo": 162,
	"./eo.js": 162,
	"./es": 161,
	"./es-do": 160,
	"./es-do.js": 160,
	"./es-us": 159,
	"./es-us.js": 159,
	"./es.js": 161,
	"./et": 158,
	"./et.js": 158,
	"./eu": 157,
	"./eu.js": 157,
	"./fa": 156,
	"./fa.js": 156,
	"./fi": 155,
	"./fi.js": 155,
	"./fo": 154,
	"./fo.js": 154,
	"./fr": 153,
	"./fr-ca": 152,
	"./fr-ca.js": 152,
	"./fr-ch": 151,
	"./fr-ch.js": 151,
	"./fr.js": 153,
	"./fy": 150,
	"./fy.js": 150,
	"./gd": 149,
	"./gd.js": 149,
	"./gl": 148,
	"./gl.js": 148,
	"./gom-latn": 147,
	"./gom-latn.js": 147,
	"./gu": 146,
	"./gu.js": 146,
	"./he": 145,
	"./he.js": 145,
	"./hi": 144,
	"./hi.js": 144,
	"./hr": 143,
	"./hr.js": 143,
	"./hu": 142,
	"./hu.js": 142,
	"./hy-am": 141,
	"./hy-am.js": 141,
	"./id": 140,
	"./id.js": 140,
	"./is": 139,
	"./is.js": 139,
	"./it": 138,
	"./it.js": 138,
	"./ja": 137,
	"./ja.js": 137,
	"./jv": 136,
	"./jv.js": 136,
	"./ka": 135,
	"./ka.js": 135,
	"./kk": 134,
	"./kk.js": 134,
	"./km": 133,
	"./km.js": 133,
	"./kn": 132,
	"./kn.js": 132,
	"./ko": 131,
	"./ko.js": 131,
	"./ky": 130,
	"./ky.js": 130,
	"./lb": 129,
	"./lb.js": 129,
	"./lo": 128,
	"./lo.js": 128,
	"./lt": 127,
	"./lt.js": 127,
	"./lv": 126,
	"./lv.js": 126,
	"./me": 125,
	"./me.js": 125,
	"./mi": 124,
	"./mi.js": 124,
	"./mk": 123,
	"./mk.js": 123,
	"./ml": 122,
	"./ml.js": 122,
	"./mn": 121,
	"./mn.js": 121,
	"./mr": 120,
	"./mr.js": 120,
	"./ms": 119,
	"./ms-my": 118,
	"./ms-my.js": 118,
	"./ms.js": 119,
	"./mt": 117,
	"./mt.js": 117,
	"./my": 116,
	"./my.js": 116,
	"./nb": 115,
	"./nb.js": 115,
	"./ne": 114,
	"./ne.js": 114,
	"./nl": 113,
	"./nl-be": 112,
	"./nl-be.js": 112,
	"./nl.js": 113,
	"./nn": 111,
	"./nn.js": 111,
	"./pa-in": 110,
	"./pa-in.js": 110,
	"./pl": 109,
	"./pl.js": 109,
	"./pt": 108,
	"./pt-br": 107,
	"./pt-br.js": 107,
	"./pt.js": 108,
	"./ro": 106,
	"./ro.js": 106,
	"./ru": 105,
	"./ru.js": 105,
	"./sd": 104,
	"./sd.js": 104,
	"./se": 103,
	"./se.js": 103,
	"./si": 102,
	"./si.js": 102,
	"./sk": 101,
	"./sk.js": 101,
	"./sl": 100,
	"./sl.js": 100,
	"./sq": 99,
	"./sq.js": 99,
	"./sr": 98,
	"./sr-cyrl": 97,
	"./sr-cyrl.js": 97,
	"./sr.js": 98,
	"./ss": 96,
	"./ss.js": 96,
	"./sv": 95,
	"./sv.js": 95,
	"./sw": 94,
	"./sw.js": 94,
	"./ta": 93,
	"./ta.js": 93,
	"./te": 92,
	"./te.js": 92,
	"./tet": 91,
	"./tet.js": 91,
	"./tg": 90,
	"./tg.js": 90,
	"./th": 89,
	"./th.js": 89,
	"./tl-ph": 88,
	"./tl-ph.js": 88,
	"./tlh": 87,
	"./tlh.js": 87,
	"./tr": 86,
	"./tr.js": 86,
	"./tzl": 85,
	"./tzl.js": 85,
	"./tzm": 84,
	"./tzm-latn": 83,
	"./tzm-latn.js": 83,
	"./tzm.js": 84,
	"./ug-cn": 82,
	"./ug-cn.js": 82,
	"./uk": 81,
	"./uk.js": 81,
	"./ur": 80,
	"./ur.js": 80,
	"./uz": 79,
	"./uz-latn": 78,
	"./uz-latn.js": 78,
	"./uz.js": 79,
	"./vi": 77,
	"./vi.js": 77,
	"./x-pseudo": 76,
	"./x-pseudo.js": 76,
	"./yo": 75,
	"./yo.js": 75,
	"./zh-cn": 74,
	"./zh-cn.js": 74,
	"./zh-hk": 73,
	"./zh-hk.js": 73,
	"./zh-tw": 72,
	"./zh-tw.js": 72
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 196;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactTime = __webpack_require__(195);

var _reactTime2 = _interopRequireDefault(_reactTime);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    formattedDate: function formattedDate(timestamp) {
        // var now = new Date()
        var timestamp = new Date(timestamp);
        return _react2.default.createElement(_reactTime2.default, { value: timestamp, titleFormat: 'YYYY/MM/DD HH:mm', relative: true });
    }

};

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var _constants = __webpack_require__(5);

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
								case _constants2.default.SOLUTIONS_RECEIVED:
												console.log('SOLUTIONS_RECEIVED: ' + JSON.stringify(action.solutions));
												updatedState['list'] = action.solutions;
												return updatedState;

								case _constants2.default.SOLUTION_CREATED:
												var updatedList = Object.assign([], updatedState.list); //var updatedList = Object.assign({}, updatedState.list)
												console.log('SOLUTION_CREATED: ' + JSON.stringify(action.solution));
												updatedList.push(action.solution);
												updatedState['list'] = updatedList;
												return updatedState;

								default:
												return state;
				}
};

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constants = __webpack_require__(5);

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

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(5);

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
            console.log('BUG_CREATED: ' + JSON.stringify(updated['list']));
            return updated;

        default:
            return state;
    }
};

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(5);

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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__(5);

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
    },

    solutionsReceived: function solutionsReceived(solutions) {
        return {
            type: _constants2.default.SOLUTIONS_RECEIVED,
            solutions: solutions
        };
    },

    solutionCreated: function solutionCreated(solution) {
        return {
            type: _constants2.default.SOLUTION_CREATED,
            solution: solution
        };
    }
};

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(5);

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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.solutionReducer = exports.trackReducer = exports.bugReducer = exports.accountReducer = exports.profileReducer = undefined;

var _profileReducer = __webpack_require__(30);

var _profileReducer2 = _interopRequireDefault(_profileReducer);

var _accountReducer = __webpack_require__(29);

var _accountReducer2 = _interopRequireDefault(_accountReducer);

var _bugReducer = __webpack_require__(28);

var _bugReducer2 = _interopRequireDefault(_bugReducer);

var _trackReducer = __webpack_require__(27);

var _trackReducer2 = _interopRequireDefault(_trackReducer);

var _solutionReducer = __webpack_require__(26);

var _solutionReducer2 = _interopRequireDefault(_solutionReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.profileReducer = _profileReducer2.default;
exports.accountReducer = _accountReducer2.default;
exports.bugReducer = _bugReducer2.default;
exports.trackReducer = _trackReducer2.default;
exports.solutionReducer = _solutionReducer2.default;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reducers = __webpack_require__(31);

var _redux = __webpack_require__(22);

var _reduxThunk = __webpack_require__(25);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//{ thunk }

// var store;

// export default {

//     configureStore: () => {  //configureStore = () => {

// 	    const reducers = combineReducers({

// 	    	profile: profileReducer,
// 	    	account: accountReducer,
// 	    	bug: bugReducer,
// 	    	track: trackReducer

// 	    }),

// 	    store = createStore(

// 	        reducers,
// 	    	applyMiddleware()  //applyMiddleware(thunk)

// 	    ) 

//         return store
//     }, 

//     currentStore: () => {
//         return store
//     }
// }

var reducers = (0, _redux.combineReducers)({
	profile: _reducers.profileReducer,
	account: _reducers.accountReducer,
	bug: _reducers.bugReducer,
	track: _reducers.trackReducer,
	solution: _reducers.solutionReducer
}); //'react-redux'


var store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk2.default));

exports.default = store;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(4);

var _actions = __webpack_require__(3);

var _actions2 = _interopRequireDefault(_actions);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bug = function (_Component) {
    _inherits(Bug, _Component);

    function Bug() {
        _classCallCheck(this, Bug);

        var _this2 = _possibleConstructorReturn(this, (Bug.__proto__ || Object.getPrototypeOf(Bug)).call(this));

        _this2.state = {
            solution: {
                text: ''

            }
        };
        return _this2;
    }

    _createClass(Bug, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            var _this = this;
            _utils.APIManager.get('/api/bug?slug=' + this.props.slug, null, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    alert(msg);
                    return;
                }

                console.log(JSON.stringify(response.results));
                var bugs = response.results;
                _this3.props.bugsReceived(bugs);
                _this.fetchSolutions();
            });

            // _this.fetchSolutions()
        }
    }, {
        key: 'fetchSolutions',
        value: function fetchSolutions() {
            var _this4 = this;

            console.log('fetchSolutions: ');
            console.log('this.props.bug.id: ' + JSON.stringify(this.props.bug.id));

            if (this.props.bug.id == null) {
                return;
            }

            _utils.APIManager.get('/api/solution?bug=' + this.props.bug.id, null, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    alert(msg);
                    return;
                }

                console.log(JSON.stringify(response.results));
                var solutions = response.results;
                _this4.props.solutionsReceived(solutions);
            });
        }
    }, {
        key: 'updateSolution',
        value: function updateSolution(event) {
            event.preventDefault();
            console.log('updateSolution: ' + event.target.id + ' == ' + event.target.value);
            var updatedSolution = Object.assign({}, this.state.solution);
            updatedSolution[event.target.id] = event.target.value;
            this.setState({
                solution: updatedSolution
            });
        }
    }, {
        key: 'submitSolution',
        value: function submitSolution(event) {
            var _this5 = this;

            event.preventDefault();
            if (this.props.currentUser == null) {
                alert('Please log in to add new solution!');
                return;
            }

            var solution = Object.assign({}, this.state.solution);
            solution['bug'] = this.props.bug.id;
            solution['profile'] = this.props.currentUser.id;
            console.log(JSON.stringify(solution));
            _utils.APIManager.post('/api/solution', solution, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    alert(msg);
                    return;
                }

                console.log(JSON.stringify(response.result));
                var solution = response.result;
                _this5.props.solutionCreated(solution);
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var solutionList = this.props.solutions.map(function (solution, i) {
                return (
                    //<li key={i}>{solution.text}</li>
                    _react2.default.createElement(
                        'a',
                        { key: i, className: 'list-group-item' },
                        _react2.default.createElement(
                            'h4',
                            { className: 'list-group-item-heading' },
                            solution.text
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'list-group-item-text' },
                            solution.text
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'section',
                    { id: 'content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'content-wrap' },
                        _react2.default.createElement(
                            'div',
                            { className: 'container clearfix' },
                            _react2.default.createElement(
                                'div',
                                { className: 'postcontent nobottommargin clearfix' },
                                _react2.default.createElement(
                                    'h3',
                                    null,
                                    'Add Your Solution'
                                ),
                                _react2.default.createElement('textarea', { onChange: this.updateSolution.bind(this), className: 'form-control', type: 'text', id: 'text', placeholder: 'Provide Your Solution or Contribute Your Response/experience' }),
                                _react2.default.createElement('br', null),
                                _react2.default.createElement(
                                    'button',
                                    { onClick: this.submitSolution.bind(this) },
                                    'Submit'
                                ),
                                _react2.default.createElement('br', null),
                                _react2.default.createElement('br', null),
                                _react2.default.createElement('hr', { style: { borderTop: '1px solid red #444' } }),
                                solutionList
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Bug;
}(_react.Component);

var stateToProps = function stateToProps(state) {
    var bugsArray = state.bug.list;

    return {
        bug: bugsArray.length == 0 ? { text: '' } : bugsArray[0],
        currentUser: state.account.currentUser,
        solutions: state.solution.list
    };
};

var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        bugsReceived: function bugsReceived(bugs) {
            return dispatch(_actions2.default.bugsReceived(bugs));
        },
        solutionsReceived: function solutionsReceived(solutions) {
            return dispatch(_actions2.default.solutionsReceived(solutions));
        },
        solutionCreated: function solutionCreated(solution) {
            return dispatch(_actions2.default.solutionCreated(solution));
        }
    };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Bug);

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _presentation = __webpack_require__(15);

var _utils = __webpack_require__(4);

var _actions = __webpack_require__(3);

var _actions2 = _interopRequireDefault(_actions);

var _reactRedux = __webpack_require__(2);

var _containers = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
    _inherits(Register, _Component);

    function Register() {
        _classCallCheck(this, Register);

        return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
    }

    _createClass(Register, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // console.log('componentDidMount: ')
            _utils.APIManager.get('/account/currentuser', null, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    alert(msg);
                    return;
                }
                console.log('Admin.js: ', JSON.stringify(response.profile));
                _this2.props.currentUserReceived(response.profile);
            });
        }
    }, {
        key: 'register',
        value: function register(visitor) {
            var email = visitor.email;
            var firstName = visitor.firstName;
            var lastName = visitor.lastName;
            var password = visitor.password;

            if (email.length == 0) {
                alert('Please fill in Email!');
                return;
            }

            if (firstName.length == 0) {
                alert('Please fill in First Name!');
                return;
            }

            if (lastName.length == 0) {
                alert('Please fill in Last Name!');
                return;
            }

            if (password.length == 0) {
                alert('Please fill in Password!');
                return;
            }

            _utils.APIManager.post('/account/register', visitor, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    alert(msg);
                    return;
                }

                // console.log('register: '+JSON.stringify(response))
                // this.props.profileCreated(response.profile)
                console.log('PROFILE CREATED:' + JSON.stringify(response));
                window.location.href = '/account';
            });
        }
    }, {
        key: 'login',
        value: function login(credentials) {
            _utils.APIManager.post('/account/login', credentials, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    // console.log(msg)
                    alert(msg);
                    return;
                }

                // console.log(JSON.stringify(response))
                // this.props.currentUserReceived(response.profile)
                console.log('USER LOGGED IN: ' + JSON.stringify(response));
                window.location.href = '/account';
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'section',
                    { id: 'content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'content-wrap' },
                        _react2.default.createElement(
                            'div',
                            { className: 'container clearfix' },
                            _react2.default.createElement(
                                'div',
                                { className: 'postcontent nobottommargin clearfix' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col_two_fifth bothsidebar nobottommargin' },
                                    this.props.currentUser != null ? _react2.default.createElement(
                                        'h2',
                                        null,
                                        ' Welcome, ',
                                        this.props.currentUser.email,
                                        ' ',
                                        this.props.currentUser.firstName,
                                        ' ',
                                        this.props.currentUser.lastName,
                                        ' '
                                    ) : _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(_presentation.Signup, { onRegister: this.register.bind(this), onLogin: this.login.bind(this) })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Register;
}(_react.Component);

var stateToProps = function stateToProps(state) {
    return {
        // profiles: state.profile.list,
        currentUser: state.account.currentUser
    };
};

var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        profileCreated: function profileCreated(profile) {
            return dispatch(_actions2.default.profileCreated(profile));
        },
        //profilesReceived: (profiles) => disptach(actions.profilesReceived(profiles)),
        currentUserReceived: function currentUserReceived(profile) {
            return dispatch(_actions2.default.currentUserReceived(profile));
        }
        // bugCreated: (bug) => dispatch(actions.bugCreated(bug)),
        // trackCreated: (track) => dispatch(actions.trackCreated(track))

    };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Register);

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(4);

var _actions = __webpack_require__(3);

var _actions2 = _interopRequireDefault(_actions);

var _reactRedux = __webpack_require__(2);

var _containers = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // <h3>Hi, {this.props.currentUser.firstName} {this.props.currentUser.lastName}</h3>
//import actions from '../../constants'


var Account = function (_Component) {
    _inherits(Account, _Component);

    function Account(props, context) {
        _classCallCheck(this, Account);

        var _this = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, props, context));

        _this.state = {
            currentUser: {
                // firstName: '',
                // lastName: '',
                // email: ''
            }
        };
        return _this;
    }

    _createClass(Account, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // console.log('componentDidMount: ')
            _utils.APIManager.get('/account/currentuser', null, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    alert(msg);
                    return;
                }
                // console.log('Admin.js: ', JSON.stringify(response.profile))
                _this2.props.currentUserReceived(response.profile);
            });
        }
    }, {
        key: 'logout',
        value: function logout(event) {
            var _this3 = this;

            //logout(){
            // console.log('logout: ')
            _utils.APIManager.get('/account/logout', null, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    alert(msg);
                    return;
                }
                console.log(_this3.props.currentUser.firstName);
                window.location.href = '/';
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'section',
                { id: 'content' },
                _react2.default.createElement(
                    'div',
                    { className: 'content-wrap' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container clearfix' },
                        _react2.default.createElement(
                            'div',
                            { className: 'postcontent nobottommargin clearfix' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col_two_fifth bothsidebar nobottommargin' },
                                _react2.default.createElement(
                                    'h3',
                                    null,
                                    'Hi, ',
                                    this.props.currentUser.firstName,
                                    ' ',
                                    this.props.currentUser.lastName
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { onClick: this.logout.bind(this) },
                                    'logout'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Account;
}(_react.Component);

var stateToProps = function stateToProps(state) {
    return {
        // profile: state.account.currentUser
        //currentUser: state.account.currentUser
        currentUser: state.account.currentUser
    };
};

var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        // currentUserReceived: (profile) => dispatch(actions.currentUserReceived(profile))
        currentUserReceived: function currentUserReceived(profile) {
            return dispatch(_actions2.default.currentUserReceived(profile));
        }

    };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Account);

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(4);

var _containers = __webpack_require__(6);

var _actions = __webpack_require__(3);

var _actions2 = _interopRequireDefault(_actions);

var _reactRedux = __webpack_require__(2);

var _reactTime = __webpack_require__(195);

var _reactTime2 = _interopRequireDefault(_reactTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // <textarea onChange={this.updateBug.bind(this)} placeholder="Response" id="response" className="form-control"></textarea><br /> 


var Track = function (_Component) {
    _inherits(Track, _Component);

    function Track() {
        _classCallCheck(this, Track);

        var _this2 = _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).call(this));

        _this2.state = {
            track: {
                name: ''
            },
            bug: {
                title: '',
                detail: '',
                response: '',
                slug: ''
            }
        };
        return _this2;
    }

    _createClass(Track, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            var _this = this;
            // console.log('Track.js layout componentDidMount: ')
            // APIManager.get('/api/track/'+this.props.slug, null, (err, response) => {
            _utils.APIManager.get('/api/track?slug=' + this.props.slug, null, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    alert(msg);
                    return;
                }
                console.log(JSON.stringify(response.results)); //(response.result))
                var tracks = response.results;
                // this.setState({
                //  track: track
                // })
                _this3.props.tracksReceived(tracks);
                _this.fetchBugs();
            });
        }
    }, {
        key: 'fetchBugs',
        value: function fetchBugs() {
            var _this4 = this;

            console.log('fetchPosts: ');
            console.log(JSON.stringify(this.props.track._id));
            if (this.props.track._id == null) {
                return;
            }

            var id = this.props.track._id;
            _utils.APIManager.get('/api/bug?track=' + id, null, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    alert(msg);
                    return;
                }

                console.log(JSON.stringify(response.results));
                _this4.props.bugsReceived(response.results);
            });
        }
    }, {
        key: 'updateBug',
        value: function updateBug(event) {
            event.preventDefault();
            console.log(event.target.id + ' == ' + event.target.value);
            var updatedBug = Object.assign({}, this.state.bug);
            updatedBug[event.target.id] = event.target.value;
            var bug = updatedBug;
            this.setState({
                bug: bug
            });
            console.log('updatedBug: ' + JSON.stringify(this.state.bug));
        }
    }, {
        key: 'submitBug',
        value: function submitBug(event) {
            var _this5 = this;

            event.preventDefault();
            if (this.props.currentUser == null) {
                alert('Please log in to record new bug');
                return;
            }

            console.log('to submitBug: ' + JSON.stringify(this.state.bug));
            var bug = this.state.bug;
            var title = bug.title;
            var parts = title.split(' ');

            var slug = '';
            for (var i = 0; i < parts.length; i++) {
                var word = parts[i];
                slug += word;
                if (i != parts.length - 1) slug += '-';
            }

            slug = slug.replace('?', '-');
            // slug = slug.replace('"', '-')
            bug['slug'] = slug;
            console.log(JSON.stringify(bug));

            var bug = Object.assign({}, this.state.bug); // var bug = this.state.bug
            console.log(JSON.stringify(this.props.track._id));
            console.log(JSON.stringify(this.props.currentUser.id));
            bug['track'] = this.props.track._id;
            bug['profile'] = this.props.currentUser.firstName;

            _utils.APIManager.post('/api/bug', bug, function (err, response) {
                if (err) {
                    var msg = err.message || err;
                    alert(msg);
                    return;
                }
                _this5.props.bugCreated(response.result);
                console.log('submitBug: ' + JSON.stringify(response.result));
                window.location.href = '/bug/' + bug['slug'];
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var bugList = this.props.bugs.map(function (bug, i) {
                return _react2.default.createElement(
                    'a',
                    { key: i, href: '#', className: 'list-group-item' },
                    _react2.default.createElement(
                        'h4',
                        { className: 'list-group-item-heading' },
                        'User ',
                        bug.profile,
                        ' contribute (',
                        _utils.DateUtils.formattedDate(bug.timestamp),
                        '): ',
                        _react2.default.createElement(
                            'a',
                            { href: '/bug/' + bug.slug },
                            bug.title,
                            ' '
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'list-group-item-text' },
                        bug.detail
                    )
                );
            });
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'section',
                    { id: 'content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'content-wrap' },
                        _react2.default.createElement(
                            'div',
                            { className: 'container clearfix' },
                            _react2.default.createElement(
                                'div',
                                { className: 'postcontent nobottommargin clearfix' },
                                _react2.default.createElement(
                                    'h4',
                                    null,
                                    'TRACK NAME: ',
                                    this.props.track.name
                                ),
                                _react2.default.createElement('input', { onChange: this.updateBug.bind(this), placeholder: 'Name your bug', id: 'title', className: 'form-control', type: 'text' }),
                                _react2.default.createElement('br', null),
                                _react2.default.createElement('textarea', { onChange: this.updateBug.bind(this), placeholder: 'When/Where', id: 'when_where', className: 'form-control' }),
                                _react2.default.createElement('br', null),
                                _react2.default.createElement('textarea', { onChange: this.updateBug.bind(this), placeholder: 'Symptom', id: 'symptom', className: 'form-control' }),
                                _react2.default.createElement('br', null),
                                _react2.default.createElement(
                                    'button',
                                    { onClick: this.submitBug.bind(this), className: 'btn btn-success' },
                                    'Record a new bug'
                                ),
                                _react2.default.createElement('br', null),
                                _react2.default.createElement('hr', { style: { borderTop: '1px solid red #444' } }),
                                bugList
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Track;
}(_react.Component);

var stateToProps = function stateToProps(state) {
    // var tracksArray = state.tracks.list
    var tracksArray = state.track.list;

    return {
        track: tracksArray.length == 0 ? { name: '' } : tracksArray[0],
        bugs: state.bug.list,
        currentUser: state.account.currentUser
    };
};

var dispatchToProps = function dispatchToProps(dispatch) {
    return {
        tracksReceived: function tracksReceived(tracks) {
            return dispatch(_actions2.default.tracksReceived(tracks));
        },
        bugCreated: function bugCreated(bug) {
            return dispatch(_actions2.default.bugCreated(bug));
        },
        bugsReceived: function bugsReceived(bugs) {
            return dispatch(_actions2.default.bugsReceived(bugs));
        }
    };
};

exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Track);

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Bug = exports.Register = exports.Account = exports.Track = undefined;

var _Track = __webpack_require__(36);

var _Track2 = _interopRequireDefault(_Track);

var _Account = __webpack_require__(35);

var _Account2 = _interopRequireDefault(_Account);

var _Register = __webpack_require__(34);

var _Register2 = _interopRequireDefault(_Register);

var _Bug = __webpack_require__(33);

var _Bug2 = _interopRequireDefault(_Bug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Home from './Home'
// import Main from './Main'
exports.Track = _Track2.default;
exports.Account = _Account2.default;
exports.Register = _Register2.default;
exports.Bug = _Bug2.default;

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "copyrights" },
                _react2.default.createElement(
                    "div",
                    { className: "container clearfix" },
                    _react2.default.createElement(
                        "div",
                        { className: "col_half" },
                        _react2.default.createElement("img", { src: "images/footer-logo.png", alt: "", className: "footer-logo" }),
                        "Copyrights \xA9 2014 All Rights Reserved by Canvas Inc."
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "col_half col_last tright" },
                        _react2.default.createElement(
                            "div",
                            { className: "copyrights-menu copyright-links fright clearfix" },
                            _react2.default.createElement(
                                "a",
                                { href: "#" },
                                "Home"
                            ),
                            "/",
                            _react2.default.createElement(
                                "a",
                                { href: "#" },
                                "About"
                            ),
                            "/",
                            _react2.default.createElement(
                                "a",
                                { href: "#" },
                                "Features"
                            ),
                            "/",
                            _react2.default.createElement(
                                "a",
                                { href: "#" },
                                "Portfolio"
                            ),
                            "/",
                            _react2.default.createElement(
                                "a",
                                { href: "#" },
                                "FAQs"
                            ),
                            "/",
                            _react2.default.createElement(
                                "a",
                                { href: "#" },
                                "Contact"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "fright clearfix" },
                            _react2.default.createElement(
                                "a",
                                { href: "#", className: "social-icon si-small si-borderless nobottommargin si-facebook" },
                                _react2.default.createElement("i", { className: "icon-facebook" }),
                                _react2.default.createElement("i", { className: "icon-facebook" })
                            ),
                            _react2.default.createElement(
                                "a",
                                { href: "#", className: "social-icon si-small si-borderless nobottommargin si-twitter" },
                                _react2.default.createElement("i", { className: "icon-twitter" }),
                                _react2.default.createElement("i", { className: "icon-twitter" })
                            ),
                            _react2.default.createElement(
                                "a",
                                { href: "#", className: "social-icon si-small si-borderless nobottommargin si-gplus" },
                                _react2.default.createElement("i", { className: "icon-gplus" }),
                                _react2.default.createElement("i", { className: "icon-gplus" })
                            ),
                            _react2.default.createElement(
                                "a",
                                { href: "#", className: "social-icon si-small si-borderless nobottommargin si-pinterest" },
                                _react2.default.createElement("i", { className: "icon-pinterest" }),
                                _react2.default.createElement("i", { className: "icon-pinterest" })
                            ),
                            _react2.default.createElement(
                                "a",
                                { href: "#", className: "social-icon si-small si-borderless nobottommargin si-vimeo" },
                                _react2.default.createElement("i", { className: "icon-vimeo" }),
                                _react2.default.createElement("i", { className: "icon-vimeo" })
                            ),
                            _react2.default.createElement(
                                "a",
                                { href: "#", className: "social-icon si-small si-borderless nobottommargin si-github" },
                                _react2.default.createElement("i", { className: "icon-github" }),
                                _react2.default.createElement("i", { className: "icon-github" })
                            ),
                            _react2.default.createElement(
                                "a",
                                { href: "#", className: "social-icon si-small si-borderless nobottommargin si-yahoo" },
                                _react2.default.createElement("i", { className: "icon-yahoo" }),
                                _react2.default.createElement("i", { className: "icon-yahoo" })
                            ),
                            _react2.default.createElement(
                                "a",
                                { href: "#", className: "social-icon si-small si-borderless nobottommargin si-linkedin" },
                                _react2.default.createElement("i", { className: "icon-linkedin" }),
                                _react2.default.createElement("i", { className: "icon-linkedin" })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Tracks = __webpack_require__(13);

var _Tracks2 = _interopRequireDefault(_Tracks);

var _Nav = __webpack_require__(12);

var _Nav2 = _interopRequireDefault(_Nav);

var _Footer = __webpack_require__(38);

var _Footer2 = _interopRequireDefault(_Footer);

var _layout = __webpack_require__(37);

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
                _react2.default.createElement(_Tracks2.default, null)
            );

            if (page == 'track') content = _react2.default.createElement(_layout.Track, { slug: this.props.slug });

            if (page == 'register') content = _react2.default.createElement(_layout.Register, null);

            if (page == 'account') content = _react2.default.createElement(_layout.Account, null);

            if (page == 'bug') content = _react2.default.createElement(_layout.Bug, { slug: this.props.slug });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Nav2.default, null),
                content
            );
        }
    }]);

    return Main;
}(_react.Component);

exports.default = Main;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DateUtils = exports.APIManager = undefined;

var _APIManager = __webpack_require__(58);

var _APIManager2 = _interopRequireDefault(_APIManager);

var _DateUtils = __webpack_require__(199);

var _DateUtils2 = _interopRequireDefault(_DateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.APIManager = _APIManager2.default;
exports.DateUtils = _DateUtils2.default;

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TrackPreview = function (_Component) {
    _inherits(TrackPreview, _Component);

    function TrackPreview() {
        _classCallCheck(this, TrackPreview);

        return _possibleConstructorReturn(this, (TrackPreview.__proto__ || Object.getPrototypeOf(TrackPreview)).apply(this, arguments));
    }

    _createClass(TrackPreview, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'entry clearfix' },
                _react2.default.createElement(
                    'div',
                    { className: 'entry-image hidden-sm' },
                    _react2.default.createElement(
                        'a',
                        { href: '/track/' + this.props.track.slug },
                        _react2.default.createElement('img', { src: this.props.track.image })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'entry-c' },
                    _react2.default.createElement(
                        'div',
                        { className: 'entry-title' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '/track/' + this.props.track.slug },
                                this.props.track.name
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'entry-meta clearfix' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '#' },
                                this.props.track.url,
                                ' '
                            )
                        )
                    ),
                    _react2.default.createElement('hr', { style: { borderTop: '1px solid #ddd' } }),
                    _react2.default.createElement(
                        'div',
                        { className: 'entry-content' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Description: ',
                            this.props.track.description
                        )
                    )
                )
            );
        }
    }]);

    return TrackPreview;
}(_react.Component);

exports.default = TrackPreview;

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(3);

var _actions2 = _interopRequireDefault(_actions);

var _reactRedux = __webpack_require__(2);

var _utils = __webpack_require__(4);

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
				{ className: 'container clearifx' },
				_react2.default.createElement(
					'div',
					{ className: 'col_three_fifth bothsidebar nobottommargin' },
					_react2.default.createElement(
						'div',
						{ className: 'fancy-title title-border' },
						_react2.default.createElement(
							'h3',
							null,
							'Bugs that are recorded by bugShare users:'
						)
					),
					_react2.default.createElement(
						'div',
						{ id: 'posts', className: 'events small-thumbs' },
						bugs
					)
				),
				_react2.default.createElement(Admin, null)
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

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(4);

var _actions = __webpack_require__(3);

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
                    this.props.currentUser.firstName
                ) : _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Sign up'
                    ),
                    _react2.default.createElement('input', { onChange: this.update.bind(this), type: 'text', id: 'email', placeholder: 'Email', className: 'form-control', style: { marginTop: 1, marginLeft: 12, width: 95 + '%' } }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', { onChange: this.update.bind(this), type: 'text', id: 'firstName', placeholder: 'First Name', className: 'form-control', style: { marginTop: 1, marginLeft: 12, width: 95 + '%' } }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', { onChange: this.update.bind(this), type: 'text', id: 'lastName', placeholder: 'Last Name', className: 'form-control', style: { marginTop: 1, marginLeft: 12, width: 95 + '%' } }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', { onChange: this.update.bind(this), type: 'password', id: 'password', placeholder: 'Password', className: 'form-control', style: { marginTop: 1, marginLeft: 12, width: 95 + '%' } }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.register.bind(this), className: 'btn btn-success' },
                        'Submit'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Log in'
                    ),
                    _react2.default.createElement('input', { onChange: this.update.bind(this), type: 'text', id: 'email', placeholder: 'Email', className: 'form-control', style: { marginTop: 1, marginLeft: 12, width: 95 + '%' } }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('input', { onChange: this.update.bind(this), type: 'password', id: 'password', placeholder: 'Password', className: 'form-control', style: { marginTop: 1, marginLeft: 12, width: 95 + '%' } }),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.login.bind(this), className: 'btn btn-success' },
                        'Submit'
                    ),
                    _react2.default.createElement('br', null)
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

/***/ 5:
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
    TRACK_CREATED: 'TRACK_CREATED',
    SOLUTIONS_RECEIVED: 'SOLUTIONS_RECEIVED',
    SOLUTION_CREATED: 'SOLUTION_CREATED'

};

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var _superagent = __webpack_require__(57);

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
				},

				upload: function upload(endpoint, file, params, callback) {
								console.log('APIManager - upload: ');
								var uploadRequest = _superagent2.default.post(endpoint);

								uploadRequest.attach('file', file);
								Object.keys(params).forEach(function (key) {
												uploadRequest.field(key, params[key]);
								});

								uploadRequest.end(function (err, resp) {
												if (err) {
																callback(err, null);
																return;
												}

												callback(null, resp);
								});
				}
};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(4);

var _actions = __webpack_require__(3);

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

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Nav = exports.Main = exports.Tracks = exports.Bugs = exports.Admin = exports.Profiles = undefined;

var _Profiles = __webpack_require__(59);

var _Profiles2 = _interopRequireDefault(_Profiles);

var _Admin = __webpack_require__(16);

var _Admin2 = _interopRequireDefault(_Admin);

var _Bugs = __webpack_require__(41);

var _Bugs2 = _interopRequireDefault(_Bugs);

var _Tracks = __webpack_require__(13);

var _Tracks2 = _interopRequireDefault(_Tracks);

var _Main = __webpack_require__(39);

var _Main2 = _interopRequireDefault(_Main);

var _Nav = __webpack_require__(12);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Profiles = _Profiles2.default;
exports.Admin = _Admin2.default;
exports.Bugs = _Bugs2.default;
exports.Tracks = _Tracks2.default;
exports.Main = _Main2.default;
exports.Nav = _Nav2.default;
// import Signup from './Signup'

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(67);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _containers = __webpack_require__(6);

var _reactRedux = __webpack_require__(2);

var _store = __webpack_require__(32);

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

/******/ });
//# sourceMappingURL=app.map