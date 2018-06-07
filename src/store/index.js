import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { profileReducer } from '../reducers'

var store;

export default {
// configureStore
// combineReducer

    configureStore: () => {
    	
    	const reducers = combineReducers({
    		profile: profileReducer   // profileReducer, THIS CAUSES THE PROBLEM: cannot read the list of undefined
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
