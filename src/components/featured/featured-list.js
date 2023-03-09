import { useSelector } from 'react-redux';

import { selectFeaturedItems, selectIsLoading } from '../../store/featured/featured.selector'
import Product from "../product/product";
import Spinner from '../spinner/spinner';

import {
    FeaturedContainer,
} from './featured-list.styles'

const FeaturedList = () => {
    const featured = useSelector(selectFeaturedItems)
    const isLoading  = useSelector(selectIsLoading)

    return (
        <>
            <h3 className='center'>Featured Products</h3>

            <FeaturedContainer >
                {isLoading ? (
                    <Spinner />
                ): (
                    featured.map((el, i) => (
                        <span key={i}>
                            <Product product={el} />
                        </span>
                    ))     
                )}
            </FeaturedContainer>
        </>
    )
}

export default FeaturedList
