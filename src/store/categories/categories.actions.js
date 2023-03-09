import { CATEGORIES_ACTION_TYPES } from '../../store/categories/categories.types';
import { getCategories } from '../../utils/firebase/firebase';

export const fetchCategoriesStartAsync = () => {
    return async (dispatch) => {
        dispatch({
            type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
            isLoading: true
        })
        try {
            const categories = await getCategories();
            dispatch({  
                type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
                payload: categories
            })
        } catch (error) {
            dispatch({
                type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
                error: error
            })
            alert(error.toString())
        }

    }
}

