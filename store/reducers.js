import { SET_BERITA } from './actionTypes'

const initialState = {
    berita : [],
    isLoading : true
}


const reducers = (state = initialState, action) => {
    
    if (action.type === SET_BERITA){
        return {
            ...state,
            berita : action.payload,
            isLoading : false
        }
    }

    return state

}


export default reducers
