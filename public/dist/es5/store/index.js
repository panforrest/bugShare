"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _redux = require("redux");

var createStore = _redux.createStore;
var combineReducers = _redux.combineReducers;
var applyMiddleware = _redux.applyMiddleware;
var thunk = _interopRequire(require("redux-thunk"));

var _reducers = require("../reducers");

var profileReducer = _reducers.profileReducer;
var accountReducer = _reducers.accountReducer;
var bugReducer = _reducers.bugReducer;
var trackReducer = _reducers.trackReducer;


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
var reducers = combineReducers({
    profile: profileReducer,
    account: accountReducer,
    bug: bugReducer,
    track: trackReducer
});

var store = createStore(reducers, applyMiddleware(thunk));

module.exports = store;