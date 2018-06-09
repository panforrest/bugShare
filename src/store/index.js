import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { profileReducer, accountReducer, bugReducer, trackReducer } from '../reducers'

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
})

var store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store
