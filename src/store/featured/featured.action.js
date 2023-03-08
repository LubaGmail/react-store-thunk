import { FEATURED_ACTION_TYPES } from "./featured.types";
import { getFeatured } from "../../utils/firebase/firebase";

export const fetchFeaturedStartAsync = () => {
    return async (dispatch) => {
       
        dispatch({
            type: FEATURED_ACTION_TYPES.FETCH_FEATURED_START,
            isLoading: true
        })
        try {
            const featured = await getFeatured();
            dispatch({
                type: FEATURED_ACTION_TYPES.FETCH_FEATURED_SUCCESS,
                payload: featured
            })
        } catch (error) {
            dispatch({
                type: FEATURED_ACTION_TYPES.FETCH_FEATURED_FAILED,
                payload: error
            })    
        }
    }
}