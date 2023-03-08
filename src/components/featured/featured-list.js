import { useSelector } from 'react-redux';

import { selectFeaturedItems } from '../../store/featured/featured.selector'
import Product from "../product/product";

import {
    FeaturedContainer,
} from './featured-list.styles'

const FeaturedList = () => {
    const featured  = useSelector(selectFeaturedItems)

    return (
        <>
            <h3 className='center'>Featured Products</h3>

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
