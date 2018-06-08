import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { profileReducer, accountReducer, bugReducer } from '../reducers'

var store;

export default {
// configureStore
// combineReducer

    configureStore: () => {
    	
    	const reducers = combineReducers({
    		profile: profileReducer,
            account: accountReducer,
            bug: bugReducer
    	}),

    	store = createStore(
    		reducers,
    		applyMiddleware()
    	)


    	return store
    },

    currentStore: () => {
    	return store
    }

}
