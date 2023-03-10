import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { selectCategories, selectIsLoading } from '../../store/categories/categories.selector'
import Product from '../../components/product/product';
import Spinner from '../../components/spinner/spinner'

import {
    CategoryContainer,
    Title,
    ProductContainer
} from './category.styles'

const Category = () => {
    // routes/shop   <Route path=':category' element={<Category />} />
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategories)
    const isLoading = useSelector(selectIsLoading)
    const [products, setProducts] = useState(categoriesMap[category]);
  
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <CategoryContainer>
                <Title>{category.toUpperCase()}</Title>

                {
                    isLoading ? (
                        <Spinner />
                    ): (
                        <ProductContainer>
                            {
                                products?.map( product => (
                                    <Product key={product.id} product={product} />
                                ))  
                            }
                        </ProductContainer>    
                    )
                }

            </CategoryContainer>
        </>

    )
}

export default Category