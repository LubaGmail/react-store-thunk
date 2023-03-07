import { useEffect, useState } from "react";  
import { useDispatch } from 'react-redux';

import { getFeatured } from "../../utils/firebase/firebase";
import Product from "../product/product";
import { FEATURED_ACTION_TYPES } from '../../store/featured/featured.types';

import {
    FeaturedContainer,
} from './featured-list.styles'

const FeaturedList = () => {
    const [featured, setFeatured] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async() => {
            const featured = await getFeatured();
            setFeatured(featured)
            dispatch({
                type: FEATURED_ACTION_TYPES.SET_FEATURED_ITEMS,
                payload: featured
            })
        }
        getData()
    }, [dispatch])

    return (
        <>
            <p>
                <h3 className='center'>Featured Products</h3>
            </p>

            <FeaturedContainer >
                {
                    featured.map((el, i) => (
                        <span key={i}>
                            <Product product={el} />
                        </span>
                    ))
                }
            </FeaturedContainer>
        </>
    )
}

export default FeaturedList
