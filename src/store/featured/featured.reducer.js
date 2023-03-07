import { FEATURED_ACTION_TYPES } from "./featured.types";

const INITIAL_FEATURED_STATE = {
    featuredItems: [],
}

export const featuredReducer = (state = INITIAL_FEATURED_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
   
        case FEATURED_ACTION_TYPES.SET_FEATURED_ITEMS:
            
            return { ...state, featuredItems: payload }
        default:
            return state
    }
}
