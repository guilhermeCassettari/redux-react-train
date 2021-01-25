import { minNumberAlterade, maxNumberAlterade } from '../actions/actionTypes'

const initialState = {
    min: 0,
    max: 10
}

const numberReducer = (state = initialState, action) => {

    switch (action.type) {
        case minNumberAlterade:

            return {
                ...state,
                min: action.payLoad
            }
        case maxNumberAlterade:

            return {
                ...state,
                max: action.payLoad
            }

        default:
            return state
    }


}

export default numberReducer
