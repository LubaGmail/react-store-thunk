import { FEATURED_ACTION_TYPES } from "./featured.types";

const INITIAL_FEATURED_STATE = {
    featuredItems: [],
    isLoading: false,
    error: null
}

export const featuredReducer = (state = INITIAL_FEATURED_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case FEATURED_ACTION_TYPES.FETCH_FEATURED_START:
            console.log('s', state)
            return {
              ...state,
              isLoading: true,
            };
        case FEATURED_ACTION_TYPES.FETCH_FEATURED_SUCCESS:
            return { ...state, featuredItems: payload, isLoading: false };
        case FEATURED_ACTION_TYPES.FETCH_FEATURED_FAILED:
            return { ...state,  error: payload, isLoading: false };
        default:
            return state;
    }
}
