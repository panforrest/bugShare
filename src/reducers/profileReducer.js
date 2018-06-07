import constants from '../constants'

var initialState = {
	list: []  //profiles: []
}

export default (state=initialState, action) => {  //export default (state=initialState, actions){
	let updated = Object.assign({}, state)
	switch(action.type){
		case constants.PROFILES_RECEIVED:
            // var updatedState = Object.assign([], state)
            console.log('PROFILES_RECEIVED: '+JSON.stringify(action.profiles))
            updated['list'] = action.profiles
            return updated  //return updatedState

        default:
            return state
	} 
}